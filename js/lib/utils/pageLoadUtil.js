var util_ws;

/**
 * 当前WebView载入URL
 * @param {Object} URL
 */
function currentLoadURL(URL) {
	mui.currentWebview().loadURL(URL);
}


/**
 * 当前WebView隐藏
 */
function currentHide(){
	mui.currentWebview().hide();
}

/**
 * 当前WebView关闭
 */
function currentClose() {
	mui.currentWebview().close();
}

/**
 * 根据id载入URL
 * @param {Object} id
 * @param {Object} URL
 */
function loadURLById(id, URL){
	util_ws = mui.getWebviewById(id).loadURL(URL);
}

/**
 * 根据id显示
 * @param {Object} id
 */
function showWebViewById (id) {
	util_ws = mui.getWebviewById(id);
	util_ws.show();
}

/**
 * 根据id隐藏
 * @param {Object} id
 */
function hideWebViewById (id) {
	util_ws = mui.getWebviewById(id);
	util_ws.hide();
}

/**
 * 根据id关闭
 * @param {Object} id
 */
function closeWebViewById(id) {
	util_ws = mui.getWebviewById(id);
	util_ws.close();
}

/**
 * 显示WebView
 * @param {Object} view
 */
function showWebView (view) {
	view.show();
}

/**
 * 隐藏WebView
 * @param {Object} view
 */
function hideWebView (view) {
	view.hide();
}

/**
 * 关闭WebView
 * @param {Object} view
 */
function closeWebView(view){
	view.close();
}


