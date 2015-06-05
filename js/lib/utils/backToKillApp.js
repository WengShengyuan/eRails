/**页面要增加back事件监听**/
//		mui.init({
//	    	mui.back = function () {
//    			closeApp();
//    		}
//	    });



var first = null;

/**
 * 退出按钮按下的事件
 */
function closeApp () {
	console.log('quiting... OS:' + plus.os.name);
	doubleBackWithinOneSecond();
//	confirmToClose();
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
			if(plus.os.name=='iOS'){
				mui.toast('iOS系统请直接按HOME键退出');				
			} else {
				plus.runtime.quit();
			}
		}
	}
}

/**
 * 确认框确认退出
 */
function confirmToClose() {
	var buttons=['确认','取消'];
	plus.nativeUI.confirm('确认要退出程序吗?',function(e){
		var i = e.index;
		if(i>=0){
			if(i==0){
				//确认
				if(plus.os.name=='iOS'){
					mui.toast('iOS系统请直接按HOME键退出');				
				} else {
					plus.runtime.quit();
				}
			} else {
				//取消
			}
		} else {
			//后退键
		}
	},'退出程序',buttons);
}
