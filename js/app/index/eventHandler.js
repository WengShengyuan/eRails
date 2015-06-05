var tabCount = 3;
var tabpages=[
'pages/shop/shopindex/shopindex.html',
'pages/shop/catagories/catagoriesindex.html', 
'pages/shop/account/tab-account.html'
];

var buttons=[
'shop',
'catagory',
'account'
]


function showtab(){
	var targetTab = this.getAttribute('href');
	console.log('target:'+ targetTab);
	if(targetTab == activeTab){
		return ;
	}
	plus.webview.show(targetTab);
	plus.webview.hide(activeTab);
	activeTab = targetTab;
};


mui.plusReady(function(){
	var self = plus.webview.currentWebview();
	for(var i =0 ; i < tabCount; i++){
		console.log('creating view:'+tabpages[i]);
		var sub = plus.webview.create(tabpages[i],tabpages[i], tab_page_styles);
		document.getElementById(buttons[i]).addEventListener('tap',showtab);
		if(i>0){
			sub.hide();
		}
		self.append(sub);
	}
});



var activeTab = tabpages[0];








//自定义事件，模拟点击“首页选项卡”
document.addEventListener('gohome', function() {
	var defaultTab = document.getElementById("shop");
	//模拟首页点击
	mui.trigger(defaultTab, 'tap');
	//切换选项卡高亮
	var current = document.querySelector(".mui-bar-tab>.mui-tab-item.mui-active");
	if (defaultTab !== current) {
		current.classList.remove('mui-active');
		defaultTab.classList.add('mui-active');
	}
});


//var shopUrl = 'pages/shop/shopindex/shopindex.html';
//var catagoryUrl = 'pages/shop/account/cartlist.html';
//var accountUrl = 'pages/shop/account/tab-account.html';

//var shopId = 'shop';
//var catagoryId = 'catagory';
//var accountId = 'account';
//
//var shopView;
//var catagoryView;
//var accountView;
//
//
//
////三个标签预载
//function preloadPage() {
//	console.log('preloading...');
//	
//	shopView = mui.preload({
//		url : shopUrl,
//		id : shopId,
//		styles : tab_page_styles,
//		extras : {}
//		
//	});
//	accountView = mui.preload({
//		url : accountUrl,
//		id : accountId,
//		styles : tab_page_styles,
//		extras : {}
//	});
//	catagoryView = mui.preload({
//		url : catagoryUrl,
//		id : catagoryId,
//		styles : tab_page_styles,
//		extras : {}
//	});
//	console.log('preloaded');
//	shopView.addEventListener('loaded', function() {
//		console.log('shopView loaded');
//		shopView.show();  
//		document.getElementById(shopId).addEventListener('tap', showShopView);
//		document.getElementById(accountId).addEventListener('tap', showAccountView);
//		document.getElementById(catagoryId).addEventListener('tap', showCatagoryView);
//		console.log('event listener added');
//	});
//}
//
//
//mui.plusReady(function(){
//	preloadPage();
//})
//
//
//
//function showShopView () {
//	console.log('show shop view...');
////	cartView.hide();
////	accountView.hide();
//	shopView.show();
//	console.log('view shown');
////	shopView.reload();
////	console.log('reloaded');
//};
//
//function showCatagoryView () {
//	console.log('show catagory view...');
////	accountView.hide();
////	shopView.hide();
//	catagoryView.show();
//	console.log('view shown');
////	catagoryView.reload();
////	console.log('reloaded');
//};
//
//function showAccountView () {
//	console.log('show account view...');
////	cartView.hide();
////	shopView.hide();
//	accountView.show();
//	console.log('view shown');
//};
//
////function search () {
////	showAlert('搜索', '提示', function() {
////		console.log('search Action')
////	});
////};