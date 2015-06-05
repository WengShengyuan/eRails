//扫描完的回调函数
function afterGetCode(r) {
	console.log('scan: ' + r);

	mui.ajax(barcodePostAddr, {
		data: {
			ticketNum: r
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		success: function(data) {
			console.log(data);
			if (data.stateId == 0) {
				var userName = data.map.userName;
				showPrompt(userName + '您好', '扫码登陆', '请输入密码', function(e) {
					document.getElementById('userName').value = userName;
					document.getElementById('password').value = e;
					login();
				})
			} else {
				alert(data.errorMsg);
			}

		}
	});
}


/**
 * 登陆操作 
 */
function login() {

	console.log('logging in');

	var user = document.getElementById('userName').value;
	var pass = document.getElementById('password').value;

	mui.ajax(doLoginAddr, {
		data: {
			userName: user,
			password: pass
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 1000,
		success: function(data) {
			console.log(data.map.result);
			if (data.stateId == 0) {
				alert('登陆成功');
			} else {
				alert(data.errorMsg);
			}

		},
		error: function(xhr, type, errorThrown) {
			alert('获取用户信息失败:' + type);
		}
	});
}