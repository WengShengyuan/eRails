function currentLoadURL(URL) {
	plus.webview.currentWebview().loadURL(URL);
}

function currentHide(){
	plus.webview.currentWebview().hide();
}

function loadURLById(id, URL){
	var util_ws = plus.webview.getWebviewById(id).loadURL(URL);
}

function showWebViewById (id) {
	var util_ws = plus.webview.getWebviewById(id);
	util_ws.show();
}

function hideWebViewById (id) {
	var util_ws = plus.webview.getWebviewById(id);
	util_ws.hide();
}

function showWebView (view) {
	view.show();
}

function hideWebView (view) {
	view.hide();
}