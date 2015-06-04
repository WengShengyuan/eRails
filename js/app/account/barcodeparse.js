//扫描完的回调函数
function scaned( t, r, f ) {
	console.log('scan: '+ r);
	
	mui.ajax('http://192.168.1.104:8080/web/ajax/user/scanuserticket',{
				data:{
					ticketNum : r
				},
				dataType:'json',//服务器返回json格式数据
				type:'get',//HTTP请求类型
				success:function(data){
					console.log(data);
					if(data.stateId == 0){
						var userName = data.map.userName;
						showPrompt(userName+'您好','扫码登陆','请输入密码',function(e){
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
	  	
