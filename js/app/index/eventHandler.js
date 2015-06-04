var shopUrl = 'pages/shop/shopindex.html';
var cartUrl = 'pages/shop/cartlist.html';
var accountUrl = 'pages/tab-account.html';

var shopId = 'shop';
var cartId = 'cart';
var accountId = 'account';

var shopView;
var cartView;
var accountView;

var contentStyle = {
	top:'0px',
	bottom:'50px'
};


//三个标签预载
function preloadPage() {
	console.log('preloading...');
	
	shopView = mui.preload({
		url : shopUrl,
		id : shopId,
		styles : contentStyle,
		extras : {}
		
	});
	accountView = mui.preload({
		url : accountUrl,
		id : accountId,
		styles : contentStyle,
		extras : {}
	});
	cartView = mui.preload({
		url : cartUrl,
		id : cartId,
		styles : contentStyle,
		extras : {}
	});
	console.log('preloaded');
	shopView.addEventListener('loaded', function() {
		console.log('auto show shopView');
		shopView.show();  
		document.getElementById(shopId).addEventListener('tap', showShopView);
		document.getElementById(accountId).addEventListener('tap', showAccountView);
		document.getElementById(cartId).addEventListener('tap', showCartView);
//		document.getElementById('search').addEventListener('tap', search);
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
};

function showCartView () {
	console.log('show cart view...');
//	accountView.hide();
//	shopView.hide();
	cartView.show();
};

function showAccountView () {
	console.log('show account view...');
//	cartView.hide();
//	shopView.hide();
	accountView.show();
};

//function search () {
//	showAlert('搜索', '提示', function() {
//		console.log('search Action')
//	});
//};