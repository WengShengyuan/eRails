/*------------------- URL ---------------------*/
//服务器所有的API基础地址
var hostApiAddr = '192.168.1.104:8080/web/ajax/';
//上传barcode，返回用户登陆信息
var barcodePostAddr = hostApiAddr + 'user/scanuserticket';
//用户的登陆处理
var doLoginAddr = hostApiAddr + 'user/login';


/*------------------- VARS ---------------------*/
//用于某tab页的内容填充，tab页本身已经50px buttom, 所以该页不需要botom
var tab_content_styles = {
	top:'44px',
	bottom:'0px'
}
//tab页的style，包含hedder，因此top 0px
var tab_page_styles = {
	top:'0px',
	bottom:'50px'
}
//纯content的style
var content_styles = {
	top:'44px',
	bottom:'50px'
}
