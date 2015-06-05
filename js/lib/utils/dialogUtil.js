var loadingWindow;

/**
 * toast通知
 * @param {Object} str
 */
function toast(str) {
	plus.nativeUI.toast(str,{duration:"long"});
}

/**
 * 创建载入动画，注意一旦启动，无法手动消除
 * @param {Object} str
 */
function showLoading(str) {
	loadingWindow = plus.nativeUI.showWaiting(str);
}

/**
 * 关闭载入动画
 */
function closeLoading(){
	loadingWindow.close();
}

/**
 * 显示弹窗警告
 * @param {Object} message 信息
 * @param {Object} title 标题
 * @param {Object} func 按确认后执行的函数
 */
function showAlert(message, title, func) {
	plus.nativeUI.alert(message, func, title,'确认');
}

/**
 * 确认信息
 * @param {Object} message 信息
 * @param {Object} title 标题
 * @param {Object} confirmFunc 按确认按钮后的函数
 * @param {Object} cancelFunc 按取消按钮后的函数
 */
function showConfirm(message, title, confirmFunc, cancelFunc){
	var buttons=['确认','取消'];
	plus.nativeUI.confirm(message,function(e){
		var i = e.index;
		if(i>=0){
			if(i==0){
				//确认
				confirmFunc(); 
			} else {
				//取消
				cancelFunc();
			}
			
		} else {
			//后退键
			cancelFunc();
		}
	},title,buttons);
}

/**
 * 输入对话框
 * @param {Object} message 消息
 * @param {Object} title 标题
 * @param {Object} placeholder 输入框的默认显示文本
 * @param {Object} func 确认后的函数（function(e)形式，要有e来代表输入的内容）
 */
function showPrompt(message, title, placeholder, func) {
	var bts=["确认","取消"];
	plus.nativeUI.prompt(message,function(e){
		var i=e.index;
		if(i==0){
			func(e.value);
		}
	},title,placeholder,bts);
}