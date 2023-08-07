import * as vscode from "vscode";
import getNonce from "./getNonce";

export class WebAppPanel {
    /**
     * Track the currently panel. Only allow a single panel to exist at a time.
     */
    public static currentPanel: WebAppPanel | undefined;

    public static readonly viewType = "Chat Bot";

    private readonly _panel: vscode.WebviewPanel;
    private readonly _extensionUri: vscode.Uri;
    private _disposables: vscode.Disposable[] = [];

    public static createOrShow(extensionUri: vscode.Uri) {
        const column = vscode.window.activeTextEditor
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;

        // If we already have a panel, show it.
        if (WebAppPanel.currentPanel) {
            WebAppPanel.currentPanel._panel.reveal(column);
            WebAppPanel.currentPanel._update();
            return;
        }

        // Otherwise, create a new panel.
        const panel = vscode.window.createWebviewPanel(
            WebAppPanel.viewType,
            "Chat Bot",
            column || vscode.ViewColumn.One,
            {
                // Enable javascript in the webview
                enableScripts: true,

                // And restrict the webview to only loading content from our extension's `media` directory.
                localResourceRoots: [
                    vscode.Uri.joinPath(extensionUri, 'media'),
                    vscode.Uri.joinPath(extensionUri, 'dist-web'),
                ],
            }
        );

        WebAppPanel.currentPanel = new WebAppPanel(panel, extensionUri);
    }

    public static kill() {
        WebAppPanel.currentPanel?.dispose();
        WebAppPanel.currentPanel = undefined;
    }

    public static revive(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
        WebAppPanel.currentPanel = new WebAppPanel(panel, extensionUri);
    }

    private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
        this._panel = panel;
        this._extensionUri = extensionUri;

        // Set the webview's initial html content
        this._update();

        // Listen for when the panel is disposed
        // This happens when the user closes the panel or when the panel is closed programatically
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

        // // Handle messages from the webview
        // this._panel.webview.onDidReceiveMessage(
        //   (message) => {
        //     switch (message.command) {
        //       case "alert":
        //         vscode.window.showErrorMessage(message.text);
        //         return;
        //     }
        //   },
        //   null,
        //   this._disposables
        // );
    }

    public dispose() {
        WebAppPanel.currentPanel = undefined;

        // Clean up our resources
        this._panel.dispose();

        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) {
                x.dispose();
            }
        }
    }

    private async _update() {
        const webview = this._panel.webview;

        this._panel.webview.html = this._getHtmlForWebview(webview);
        webview.onDidReceiveMessage(async (data) => {
            switch (data.type) {
                case "onInfo": {
                    if (!data.value) {
                        return;
                    }
                    vscode.window.showInformationMessage(data.value);
                    break;
                }
                case "onError": {
                    if (!data.value) {
                        return;
                    }
                    vscode.window.showErrorMessage(data.value);
                    break;
                }
                // case "tokens": {
                //     await Util.globalState.update(accessTokenKey, data.accessToken);
                //     await Util.globalState.update(refreshTokenKey, data.refreshToken);
                //     break;
                // }
            }
        });
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        // // And the uri we use to load this script in the webview
        // const scriptUri = webview.asWebviewUri(
        //     vscode.Uri.joinPath(this._extensionUri, "out", "compiled/swiper.js")
        // );

        const appUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, "dist-web", "js/app.js")
        );

        const aboutUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, "dist-web", "js/about.js")
        );

        const appVendorUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, "dist-web",
                "js/chunk-vendors.js")
        );

        const baseUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._extensionUri, 'dist-web')
        ).toString().replace('%22', '');

        // <input hidden data-uri="${baseUri}">

        // Local path to css styles
        // Uri to load styles into webview
        const stylesResetUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._extensionUri,
            "media",
            "reset.css"
        ));
        const stylesMainUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this._extensionUri,
            "media",
            "vscode.css"
        ));
        // const cssUri = webview.asWebviewUri(
        //     vscode.Uri.joinPath(this._extensionUri, "dist-web", "css/app.css")
        // );

        // Use a nonce to only allow specific scripts to be run
        const nonce = getNonce();
        console.log("main", appUri)

        return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<!--
					Use a content security policy to only allow loading images from https or from our extension directory,
					and only allow scripts that have a specific nonce.
        -->
        
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="${stylesResetUri}" rel="stylesheet">
                <link href="${stylesMainUri}" rel="stylesheet">
        <script nonce="${nonce}">
            const chatvscode = acquireVsCodeApi();
        </script>
			</head>
      <body>
      <div id="app"></div>  

    <script type="text/javascript" src="${appVendorUri}" nonce="${nonce}"></script>  
    <script type="text/javascript" src="${appUri}" nonce="${nonce}"></script>
     <script type="text/javascript" src="${aboutUri}" nonce="${nonce}"></script>
			</body>
			</html>`;
    }
}

