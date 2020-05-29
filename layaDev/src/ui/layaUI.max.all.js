var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var gameUI=(function(_super){
		function gameUI(){
			
		    this.coinBox=null;
		    this.coinNum=null;
		    this.couponNum=null;
		    this.cont=null;
		    this.coupon=null;
		    this.couponAni=null;
		    this.controlBtn=null;
		    this.wordBox=null;
		    this.infoScroll=null;
		    this.infoWord=null;

			gameUI.__super.call(this);
		}

		CLASS$(gameUI,'ui.gameUI',_super);
		var __proto__=gameUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(gameUI.uiView);

		}

		gameUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"y":0,"x":0,"name":"bg"},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#fff4d6"}}]},{"type":"Box","props":{"y":100,"x":30,"width":200,"var":"coinBox","height":83},"child":[{"type":"Image","props":{"y":0,"x":7,"skin":"images/icon/coin.png"}},{"type":"Image","props":{"y":57,"x":0,"width":46,"skin":"images/icon/coupon.png","height":26}},{"type":"Text","props":{"y":3,"x":57,"width":129,"var":"coinNum","text":"0","height":37,"fontSize":40,"font":"Microsoft YaHei","color":"#000","bold":false}},{"type":"Text","props":{"y":52,"x":57,"width":129,"var":"couponNum","text":"0","height":37,"fontSize":40,"font":"Microsoft YaHei","color":"#000","bold":false}}]},{"type":"Box","props":{"y":444,"x":0,"width":750,"var":"cont","height":1180},"child":[{"type":"Sprite","props":{"y":71,"x":65,"width":130,"var":"coupon","pivotY":71,"pivotX":65,"height":142,"alpha":0},"child":[{"type":"Animation","props":{"var":"couponAni","source":"images/icon/coupon/001.png,images/icon/coupon/002.png,images/icon/coupon/003.png,images/icon/coupon/004.png,images/icon/coupon/005.png,images/icon/coupon/006.png,images/icon/coupon/007.png,images/icon/coupon/008.png,images/icon/coupon/009.png,images/icon/coupon/010.png,images/icon/coupon/012.png,images/icon/coupon/013.png,images/icon/coupon/014.png,images/icon/coupon/015.png,images/icon/coupon/016.png,images/icon/coupon/017.png,images/icon/coupon/018.png,images/icon/coupon/019.png,images/icon/coupon/020.png","interval":66,"autoPlay":false}}]}]},{"type":"Sprite","props":{"y":0,"x":0,"width":750,"var":"controlBtn","height":1624}},{"type":"Box","props":{"y":100,"x":250,"visible":true,"var":"wordBox","alpha":0},"child":[{"type":"Image","props":{"x":0,"skin":"images/game/block.png"}},{"type":"Panel","props":{"y":20,"x":20,"width":440,"var":"infoScroll","vScrollBarSkin":"images/index/vscroll.png","renderType":"render","height":205},"child":[{"type":"Text","props":{"y":0,"x":0,"wordWrap":true,"width":425,"var":"infoWord","text":"星巴克2020.03.24-2020.09.102020.03.24-2020.0当季新品已上市！当季新品已上市！当季新品 已上市！当季新品已上市！当季新品已上市！ 当季新品已上市！当季新品已上市！当季新品 已上市！当季新品已上市！当季新品已上市！","overflow":"scroll","leading":10,"fontSize":21,"font":"Microsoft YaHei","color":"#000","bold":false}}]}]}]};
		return gameUI;
	})(View);
var indexUI=(function(_super){
		function indexUI(){
			
		    this.endAni=null;
		    this.cont=null;
		    this.ruleScroll=null;
		    this.ruleWord=null;
		    this.startBtn=null;

			indexUI.__super.call(this);
		}

		CLASS$(indexUI,'ui.indexUI',_super);
		var __proto__=indexUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(indexUI.uiView);

		}

		indexUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"name":"bg"},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#fff4d6"}}]},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":1180},"child":[{"type":"Image","props":{"y":90,"x":137,"width":470,"skin":"images/index/block.png","name":"block","height":474,"alpha":1},"compId":8},{"type":"Image","props":{"y":0,"x":495,"skin":"images/index/title.png","name":"title","alpha":1},"compId":10},{"type":"Box","props":{"y":591,"x":98,"alpha":1},"compId":19,"child":[{"type":"Image","props":{"skin":"images/index/rule.png","name":"rule"}},{"type":"Panel","props":{"y":323,"x":33,"width":491,"var":"ruleScroll","vScrollBarSkin":"images/index/vscroll.png","renderType":"render","height":210},"child":[{"type":"Text","props":{"y":20,"x":0,"wordWrap":true,"width":470,"var":"ruleWord","overflow":"scroll","leading":7,"fontSize":24,"font":"Microsoft YaHei","color":"#000","bold":true}}]}]},{"type":"Image","props":{"y":452,"x":98,"var":"startBtn","skin":"images/index/start.png","alpha":1},"compId":11}]}],"animations":[{"nodes":[{"target":19,"keyframes":{"y":[{"value":591,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":0},{"value":1098,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":14}],"x":[{"value":98,"tweenMethod":"linearNone","tween":true,"target":19,"key":"x","index":0},{"value":756,"tweenMethod":"linearNone","tween":true,"target":19,"key":"x","index":14}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":19,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":19,"key":"alpha","index":14}]}},{"target":11,"keyframes":{"x":[{"value":98,"tweenMethod":"linearNone","tween":true,"target":11,"key":"x","index":0},{"value":-400,"tweenMethod":"linearNone","tween":true,"target":11,"key":"x","index":14}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":14}]}},{"target":10,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":-311,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":14}],"x":[{"value":495,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":836,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":14}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":14}]}},{"target":8,"keyframes":{"y":[{"value":90,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":0},{"value":-276,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":14}],"x":[{"value":137,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0},{"value":-473,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":14}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":14}]}}],"name":"endAni","id":1,"frameRate":24,"action":0}]};
		return indexUI;
	})(View);
var loginUI=(function(_super){
		function loginUI(){
			
		    this.cont=null;

			loginUI.__super.call(this);
		}

		CLASS$(loginUI,'ui.loginUI',_super);
		var __proto__=loginUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loginUI.uiView);

		}

		loginUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"y":0,"x":0,"name":"bg"},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#fff4d6"}}]},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":1180}}]};
		return loginUI;
	})(View);
var navIconUI=(function(_super){
		function navIconUI(){
			
		    this.ani1=null;
		    this.nav=null;

			navIconUI.__super.call(this);
		}

		CLASS$(navIconUI,'ui.navIconUI',_super);
		var __proto__=navIconUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(navIconUI.uiView);

		}

		navIconUI.uiView={"type":"View","props":{"y":160,"x":140,"width":280,"pivotY":160,"pivotX":140,"height":320},"child":[{"type":"Image","props":{"y":10,"x":15,"width":250,"var":"nav","skin":"images/navs/1.png","height":300},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":10},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":20}],"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":30,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
		return navIconUI;
	})(View);
var playerUI=(function(_super){
		function playerUI(){
			
		    this.somersaultAni=null;
		    this.img=null;

			playerUI.__super.call(this);
		}

		CLASS$(playerUI,'ui.playerUI',_super);
		var __proto__=playerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(playerUI.uiView);

		}

		playerUI.uiView={"type":"View","props":{"y":91,"x":51,"width":103,"pivotY":91,"pivotX":51,"height":181},"child":[{"type":"Image","props":{"y":91,"x":51,"width":103,"var":"img","skin":"images/player/p.png","pivotY":91,"pivotX":51,"height":181,"bottom":0},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":12}]}}],"name":"somersaultAni","id":1,"frameRate":24,"action":0}]};
		return playerUI;
	})(View);
var rankUI=(function(_super){
		function rankUI(){
			

			rankUI.__super.call(this);
		}

		CLASS$(rankUI,'ui.rankUI',_super);
		var __proto__=rankUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(rankUI.uiView);

		}

		rankUI.uiView={"type":"Dialog","props":{"width":640,"height":1120}};
		return rankUI;
	})(Dialog);
var regUI=(function(_super){
		function regUI(){
			
		    this.cont=null;

			regUI.__super.call(this);
		}

		CLASS$(regUI,'ui.regUI',_super);
		var __proto__=regUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(regUI.uiView);

		}

		regUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"y":0,"x":0,"name":"bg"},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#fff4d6"}}]},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":1180}}]};
		return regUI;
	})(View);
var resultUI=(function(_super){
		function resultUI(){
			
		    this.cont=null;
		    this.couponScroll=null;
		    this.couponWord=null;
		    this.againBtn=null;

			resultUI.__super.call(this);
		}

		CLASS$(resultUI,'ui.resultUI',_super);
		var __proto__=resultUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(resultUI.uiView);

		}

		resultUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"y":0,"x":0,"name":"bg"},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#fff4d6"}}]},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":1180},"child":[{"type":"Image","props":{"y":2,"x":46,"skin":"images/result/logo.png","name":"logo"}},{"type":"Image","props":{"y":46,"x":211,"skin":"images/index/block.png","name":"block"}},{"type":"Box","props":{"y":640,"x":375,"width":638,"pivotY":75,"pivotX":319,"name":"couponBox","height":149},"child":[{"type":"Image","props":{"skin":"images/result/kuang.png"}},{"type":"Panel","props":{"y":28,"x":63,"width":555,"var":"couponScroll","vScrollBarSkin":"images/index/vscroll.png","renderType":"render","height":94},"child":[{"type":"Text","props":{"y":20,"x":0,"wordWrap":true,"width":470,"var":"couponWord","overflow":"scroll","leading":7,"fontSize":24,"font":"Microsoft YaHei","color":"#000","bold":true}}]}]},{"type":"Box","props":{"y":347,"x":73,"width":246,"name":"pointBox","height":184},"child":[{"type":"Image","props":{"y":6,"skin":"images/icon/coin.png"}},{"type":"Text","props":{"y":10,"x":55,"width":155,"text":"0","height":50,"fontSize":50,"color":"#000000","bold":true}},{"type":"Text","props":{"y":67,"x":8,"width":155,"text":"=","height":50,"fontSize":26,"font":"Microsoft YaHei","color":"#000000","bold":false}},{"type":"Text","props":{"y":70,"x":110,"width":155,"text":"积分","height":50,"fontSize":23,"font":"Microsoft YaHei","color":"#000000","bold":false}},{"type":"Text","props":{"y":67,"x":55,"width":38,"text":"0","height":50,"fontSize":37,"color":"#000000","bold":true,"align":"left"}},{"type":"Image","props":{"y":128,"x":2,"width":35,"skin":"images/icon/coupon.png","height":20}},{"type":"Text","props":{"y":113,"x":55,"width":38,"text":"0","height":50,"fontSize":45,"color":"#000000","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":757,"x":375,"width":638,"pivotX":319,"name":"btnBox","height":90},"child":[{"type":"Image","props":{"y":45,"x":319,"width":290,"var":"againBtn","skin":"images/result/btn3.png","pivotY":45,"pivotX":145,"height":90}}]}]}]};
		return resultUI;
	})(View);
var ruleUI=(function(_super){
		function ruleUI(){
			

			ruleUI.__super.call(this);
		}

		CLASS$(ruleUI,'ui.ruleUI',_super);
		var __proto__=ruleUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ruleUI.uiView);

		}

		ruleUI.uiView={"type":"Dialog","props":{"width":640,"height":1040}};
		return ruleUI;
	})(Dialog);
var storeUI=(function(_super){
		function storeUI(){
			
		    this.store=null;

			storeUI.__super.call(this);
		}

		CLASS$(storeUI,'ui.storeUI',_super);
		var __proto__=storeUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(storeUI.uiView);

		}

		storeUI.uiView={"type":"View","props":{"y":170,"x":170,"width":340,"pivotY":170,"pivotX":170,"height":340},"child":[{"type":"Image","props":{"y":0,"x":0,"width":340,"var":"store","skin":"images/game/store.png","height":340}}]};
		return storeUI;
	})(View);
var tipsUI=(function(_super){
		function tipsUI(){
			

			tipsUI.__super.call(this);
		}

		CLASS$(tipsUI,'ui.tipsUI',_super);
		var __proto__=tipsUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tipsUI.uiView);

		}

		tipsUI.uiView={"type":"View","props":{"width":750,"height":500}};
		return tipsUI;
	})(View);