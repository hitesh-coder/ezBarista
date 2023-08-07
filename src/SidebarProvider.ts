import * as vscode from "vscode";
import getNonce from "./getNonce";

export class SidebarProvider implements vscode.WebviewViewProvider {
    _view?: vscode.WebviewView;
    _doc?: vscode.TextDocument;

    constructor(private readonly _extensionUri: vscode.Uri) { }

    public resolveWebviewView(webviewView: vscode.WebviewView) {
        this._view = webviewView;

        webviewView.webview.options = {
            // Allow scripts in the webview
            enableScripts: true,

            localResourceRoots: [ this._extensionUri ],
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

        webviewView.webview.onDidReceiveMessage(async (data) => {
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
                case "openMainPage": {
                    vscode.commands.executeCommand("ezBarista.mainPage");
                }
            }
        });
    }

    public revive(panel: vscode.WebviewView) {
        this._view = panel;
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        const styleResetUri = webview.asWebviewUri(
            vscode.Uri.joinPath(
                this._extensionUri, "media", "reset.css")
        );

        const styleVSCodeUri = webview.asWebviewUri(
            vscode.Uri.joinPath(
                this._extensionUri, "media", "vscode.css")
        );

        const siderbarStyleVSCodeUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, "media", "SidebarCss.css")
        );

        const appVendorUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, "dist-web",
                "js/chunk-vendors.js")
        );

        const sidebarUri = webview.asWebviewUri(
            vscode.Uri.joinPath(
                this._extensionUri, "dist-web", "js/sidebar.js")
        );

        // const styleMainUri = webview.asWebviewUri(
        //     vscode.Uri.joinPath(
        //         this._extensionUri, "dist-web", "sidebar.css")
        // );

        const nonce = getNonce();

        console.log("sidebar", sidebarUri)

        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />  
                <link href="${styleResetUri}" rel="stylesheet">
                <link href="${styleVSCodeUri}" rel="stylesheet">
                <link href="${siderbarStyleVSCodeUri}" rel="stylesheet">
                <script nonce="${nonce}">    
                    const chatvscode = acquireVsCodeApi();
                </script>
        </head>     
        <body>
        <div id="app"></div>

        <script type="text/javascript" src="${sidebarUri}" nonce="${nonce}"> </script> 
        </body>
        </html>   
    `;
    }
}