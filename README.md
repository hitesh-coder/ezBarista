# Vs Code Extension README

This is the README for extension "ezBarista".

# How to run this Extension

Step 1: Clone and download repository.

Step 2: run ```npm install```

step 3: run ```npm run watch```

step 3: debug the repository (cmd + shift + d)

Extension is up and running

# Detail about code

## dist-web
Need all compiled js code here so that extension could use it

## web
Contains code for webview panel of main screen. It is written in vuejs and integrated with vscodeExtension using rollupjs. To update run ```npm run watch``` in this directory and update the code. All changes will be automatically updated and will be compiled in dist-web directory (Configuration is written in vue.config.js).

## SeparatePages
Contains sidebar view but more components could be added. Run ```npm run watch``` in main directory and make changes in sidebar pages all changes will be automatically compiled in dist-web directory.

## src
Contains vscode interaction component. To interact with vscode use this.
