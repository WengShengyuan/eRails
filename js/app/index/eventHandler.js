var shopUrl = 'pages/shop/shopindex/shopindex.html';
var catagoryUrl = 'pages/shop/account/cartlist.html';
var accountUrl = 'pages/tab-account.html';

var shopId = 'shop';
var catagoryId = 'catagory';
var accountId = 'account';

var shopView;
var catagoryView;
var accountView;



//三个标签预载
function preloadPage() {
	console.log('preloading...');
	
	shopView = mui.preload({
		url : shopUrl,
		id : shopId,
		styles : tab_page_styles;
		extras : {}
		
	});
	accountView = mui.preload({
		url : accountUrl,
		id : accountId,
		styles : tab_page_styles,
		extras : {}
	});
	catagoryView = mui.preload({
		url : catagoryUrl,
		id : catagoryId,
		styles : tab_page_styles,
		extras : {}
	});
	console.log('preloaded');
	shopView.addEventListener('loaded', function() {
		console.log('shopView loaded');
		shopView.show();  
		document.getElementById(shopId).addEventListener('tap', showShopView);
		document.getElementById(accountId).addEventListener('tap', showAccountView);
		document.getElementById(catagoryId).addEventListener('tap', showCatagoryView);
		console.log('event listener added');
	});
}


mui.plusReady(function(){
	preloadPage();
})



function showShopView () {
	console.log('show shop view...');
//	cartView.hide();
//	accountView.hide();
	shopView.show();
	console.log('view shown');
//	shopView.reload();
//	console.log('reloaded');
};

function showCatagoryView () {
	console.log('show catagory view...');
//	accountView.hide();
//	shopView.hide();
	catagoryView.show();
	console.log('view shown');
//	catagoryView.reload();
//	console.log('reloaded');
};

function showAccountView () {
	console.log('show account view...');
//	cartView.hide();
//	shopView.hide();
	accountView.show();
	console.log('view shown');
};

//function search () {
//	showAlert('搜索', '提示', function() {
//		console.log('search Action')
//	});
//};