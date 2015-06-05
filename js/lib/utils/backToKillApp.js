var first = null;

/**
 * 退出按钮按下的事件
 */
function closeApp () {
	doubleBackWithinOneSecond();
}

/*********************可选的关闭函数*****************************/

/**
 * 首次按键，提示‘再按一次退出应用’
 */
function doubleBackWithinOneSecond() {
	//处理逻辑：1秒内，连续两次按返回键，则退出应用；
	if (!first) {
		first = new Date().getTime();
		mui.toast('再按一次退出应用');
		setTimeout(function() {
			first = null;
		}, 1000);
	} else {
		if (new Date().getTime() - first < 1000) {
			plus.runtime.quit();
		}
	}
}