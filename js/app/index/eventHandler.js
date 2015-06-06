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

