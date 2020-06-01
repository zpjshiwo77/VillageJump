var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var couponUI=(function(_super){
		function couponUI(){
			
		    this.word=null;
		    this.num=null;

			couponUI.__super.call(this);
		}

		CLASS$(couponUI,'ui.couponUI',_super);
		var __proto__=couponUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(couponUI.uiView);

		}

		couponUI.uiView={"type":"View","props":{"width":470,"height":47},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":470,"height":47},"child":[{"type":"Text","props":{"y":0,"x":0,"width":420,"var":"word","valign":"middle","height":47,"fontSize":24,"font":"Microsoft YaHei","color":"#000","bold":true}},{"type":"Text","props":{"y":0,"x":420,"width":50,"var":"num","valign":"middle","text":"x 1","height":47,"fontSize":24,"font":"Microsoft YaHei","color":"#000","bold":true,"align":"right"}}]}]};
		return couponUI;
	})(View);
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

		gameUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"y":0,"x":0,"name":"bg"},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#fff4d6"}}]},{"type":"Box","props":{"y":100,"x":30,"width":200,"var":"coinBox","height":83},"child":[{"type":"Image","props":{"y":0,"x":7,"skin":"images/icon/coin.png"}},{"type":"Image","props":{"y":57,"x":0,"width":46,"skin":"images/icon/coupon.png","height":26}},{"type":"Text","props":{"y":4,"x":57,"width":129,"var":"coinNum","text":"0","height":37,"fontSize":40,"font":"Microsoft YaHei","color":"#000","bold":false}},{"type":"Text","props":{"y":53,"x":57,"width":129,"var":"couponNum","text":"0","height":37,"fontSize":40,"font":"Microsoft YaHei","color":"#000","bold":false}}]},{"type":"Box","props":{"y":444,"x":0,"width":750,"var":"cont","height":1180},"child":[{"type":"Sprite","props":{"y":71,"x":65,"width":130,"var":"coupon","pivotY":71,"pivotX":65,"height":142,"alpha":0},"child":[{"type":"Animation","props":{"var":"couponAni","source":"images/icon/coupon/001.png,images/icon/coupon/002.png,images/icon/coupon/003.png,images/icon/coupon/004.png,images/icon/coupon/005.png,images/icon/coupon/006.png,images/icon/coupon/007.png,images/icon/coupon/008.png,images/icon/coupon/009.png,images/icon/coupon/010.png,images/icon/coupon/012.png,images/icon/coupon/013.png,images/icon/coupon/014.png,images/icon/coupon/015.png,images/icon/coupon/016.png,images/icon/coupon/017.png,images/icon/coupon/018.png,images/icon/coupon/019.png,images/icon/coupon/020.png","interval":66,"autoPlay":false}}]}]},{"type":"Sprite","props":{"y":0,"x":0,"width":750,"var":"controlBtn","height":1624}},{"type":"Box","props":{"y":100,"x":250,"visible":true,"var":"wordBox","alpha":0},"child":[{"type":"Image","props":{"x":0,"skin":"images/game/block.png"}},{"type":"Panel","props":{"y":20,"x":20,"width":440,"var":"infoScroll","vScrollBarSkin":"images/index/vscroll.png","renderType":"render","height":205},"child":[{"type":"Text","props":{"y":0,"x":0,"wordWrap":true,"width":425,"var":"infoWord","text":"星巴克2020.03.24-2020.09.102020.03.24-2020.0当季新品已上市！当季新品已上市！当季新品 已上市！当季新品已上市！当季新品已上市！ 当季新品已上市！当季新品已上市！当季新品 已上市！当季新品已上市！当季新品已上市！","overflow":"scroll","leading":10,"fontSize":21,"font":"Microsoft YaHei","color":"#000","bold":false}}]}]}]};
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
		    this.readed=null;
		    this.ruleBtn=null;
		    this.loginBtn=null;
		    this.gotoReg=null;
		    this.backBtn=null;
		    this.phone=null;
		    this.code=null;
		    this.getCodeBtn=null;
		    this.codeWord=null;
		    this.readedBtn=null;

			loginUI.__super.call(this);
		}

		CLASS$(loginUI,'ui.loginUI',_super);
		var __proto__=loginUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loginUI.uiView);

		}

		loginUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"y":0,"x":0,"name":"bg"},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#fff4d6"}}]},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":1180},"child":[{"type":"Image","props":{"y":50,"x":248,"skin":"images/login/title.png"}},{"type":"Image","props":{"y":151,"x":88,"skin":"images/login/b1.png"}},{"type":"Image","props":{"y":266,"x":88,"skin":"images/login/b2.png"}},{"type":"Image","props":{"y":376,"x":88,"skin":"images/login/read.png"}},{"type":"Sprite","props":{"y":381,"x":93,"visible":false,"var":"readed"},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":20,"lineWidth":1,"height":20,"fillColor":"#000000"}}]},{"type":"Sprite","props":{"y":376,"x":331,"width":321,"var":"ruleBtn","height":28}},{"type":"Image","props":{"y":541,"x":230,"var":"loginBtn","skin":"images/login/btn2.png"}},{"type":"Image","props":{"y":665,"x":247,"var":"gotoReg","skin":"images/login/reg.png"}},{"type":"Image","props":{"y":1073,"x":50,"var":"backBtn","skin":"images/icon/back.png"}},{"type":"TextInput","props":{"y":166,"x":110,"width":533,"var":"phone","type":"number","promptColor":"#9fa0a0","prompt":"手机号","maxChars":11,"height":55,"fontSize":25,"font":"Microsoft YaHei","color":"#000000"}},{"type":"TextInput","props":{"y":282,"x":110,"width":274,"var":"code","type":"number","promptColor":"#9fa0a0","prompt":"验证码","maxChars":8,"height":55,"fontSize":25,"font":"Microsoft YaHei","color":"#000000"}},{"type":"Box","props":{"y":263,"x":412,"var":"getCodeBtn"},"child":[{"type":"Image","props":{"skin":"images/login/btn1.png"}},{"type":"Text","props":{"y":5,"x":0,"width":251,"var":"codeWord","valign":"middle","text":"获取验证码","height":86,"fontSize":30,"font":"Microsoft YaHei","color":"#000","align":"center"}}]},{"type":"Sprite","props":{"y":368,"x":83,"width":243,"var":"readedBtn","height":39}}]}]};
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
			
		    this.closeBtn=null;
		    this.shareBtn=null;
		    this.rankScroll=null;
		    this.self=null;
		    this.rank=null;
		    this.head=null;
		    this.nickname=null;
		    this.coin=null;

			rankUI.__super.call(this);
		}

		CLASS$(rankUI,'ui.rankUI',_super);
		var __proto__=rankUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(rankUI.uiView);

		}

		rankUI.uiView={"type":"Dialog","props":{"width":647,"height":1120},"child":[{"type":"Image","props":{"y":1047,"x":0,"var":"closeBtn","skin":"images/icon/back.png"}},{"type":"Image","props":{"y":1057,"x":600,"visible":false,"var":"shareBtn","skin":"images/icon/share.png"}},{"type":"Image","props":{"y":0,"x":156,"skin":"images/rank/title.png"}},{"type":"Image","props":{"y":130,"x":0,"skin":"images/rank/kuang1.png"}},{"type":"Image","props":{"y":780,"skin":"images/rank/kuang2.png"}},{"type":"Panel","props":{"y":175,"x":30,"width":590,"var":"rankScroll","vScrollBarSkin":"images/index/vscroll.png","renderType":"render","height":500}},{"type":"Box","props":{"y":810,"x":30,"width":560,"name":"selfBox","height":110},"child":[{"type":"Sprite","props":{"y":0,"width":560,"var":"self","height":110},"child":[{"type":"Text","props":{"y":0,"x":0,"width":95,"var":"rank","valign":"middle","text":"0","height":74,"fontSize":35,"font":"Microsoft YaHei","color":"#000","bold":true,"align":"center"}},{"type":"Image","props":{"y":0,"x":95,"width":74,"var":"head","skin":"images/game/store.png","height":74}},{"type":"Text","props":{"y":0,"x":185,"width":222,"var":"nickname","valign":"middle","text":"测试","height":74,"fontSize":32,"font":"Microsoft YaHei","color":"#000","bold":false,"align":"left"}},{"type":"Image","props":{"y":15,"x":410,"skin":"images/icon/coin.png"}},{"type":"Text","props":{"y":0,"x":450,"width":108,"var":"coin","valign":"middle","text":"00000","height":74,"fontSize":35,"font":"Microsoft YaHei","color":"#000","bold":false,"align":"left"}}]}]}]};
		return rankUI;
	})(Dialog);
var rankRowUI=(function(_super){
		function rankRowUI(){
			
		    this.rank=null;
		    this.head=null;
		    this.nickname=null;
		    this.coin=null;

			rankRowUI.__super.call(this);
		}

		CLASS$(rankRowUI,'ui.rankRowUI',_super);
		var __proto__=rankRowUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(rankRowUI.uiView);

		}

		rankRowUI.uiView={"type":"View","props":{"width":560,"height":110},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":560,"height":110},"child":[{"type":"Text","props":{"y":0,"x":0,"width":95,"var":"rank","valign":"middle","text":"0","height":74,"fontSize":35,"font":"Microsoft YaHei","color":"#000","bold":true,"align":"center"}},{"type":"Image","props":{"y":0,"x":95,"width":74,"var":"head","skin":"images/game/store.png","height":74}},{"type":"Text","props":{"y":0,"x":185,"width":222,"var":"nickname","valign":"middle","text":"测试","height":74,"fontSize":32,"font":"Microsoft YaHei","color":"#000","bold":false,"align":"left"}},{"type":"Image","props":{"y":15,"x":410,"skin":"images/icon/coin.png"}},{"type":"Text","props":{"y":0,"x":450,"width":108,"var":"coin","valign":"middle","text":"00000","height":74,"fontSize":35,"font":"Microsoft YaHei","color":"#000","bold":false,"align":"left"}}]}]};
		return rankRowUI;
	})(View);
var regUI=(function(_super){
		function regUI(){
			
		    this.cont=null;
		    this.readed=null;
		    this.ruleBtn=null;
		    this.regBtn=null;
		    this.gotoLogin=null;
		    this.backBtn=null;
		    this.phone=null;
		    this.code=null;
		    this.getCodeBtn=null;
		    this.codeWord=null;
		    this.readedBtn=null;

			regUI.__super.call(this);
		}

		CLASS$(regUI,'ui.regUI',_super);
		var __proto__=regUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(regUI.uiView);

		}

		regUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"y":0,"x":0,"name":"bg"},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#fff4d6"}}]},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":1180},"child":[{"type":"Image","props":{"y":50,"x":215,"skin":"images/reg/title.png"}},{"type":"Image","props":{"y":151,"x":88,"skin":"images/login/b1.png"}},{"type":"Image","props":{"y":266,"x":88,"skin":"images/login/b2.png"}},{"type":"Image","props":{"y":376,"x":88,"skin":"images/login/read.png"}},{"type":"Sprite","props":{"y":381,"x":93,"visible":false,"var":"readed"},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":20,"lineWidth":1,"height":20,"fillColor":"#000000"}}]},{"type":"Sprite","props":{"y":376,"x":331,"width":321,"var":"ruleBtn","height":28}},{"type":"Image","props":{"y":541,"x":230,"var":"regBtn","skin":"images/reg/ok.png"}},{"type":"Image","props":{"y":665,"x":276,"var":"gotoLogin","skin":"images/reg/login.png"}},{"type":"Image","props":{"y":1073,"x":50,"var":"backBtn","skin":"images/icon/back.png"}},{"type":"TextInput","props":{"y":166,"x":110,"width":533,"var":"phone","type":"number","promptColor":"#9fa0a0","prompt":"手机号","maxChars":11,"height":55,"fontSize":25,"font":"Microsoft YaHei","color":"#000000"}},{"type":"TextInput","props":{"y":282,"x":110,"width":274,"var":"code","type":"number","promptColor":"#9fa0a0","prompt":"验证码","maxChars":8,"height":55,"fontSize":25,"font":"Microsoft YaHei","color":"#000000"}},{"type":"Box","props":{"y":263,"x":412,"var":"getCodeBtn"},"child":[{"type":"Image","props":{"skin":"images/login/btn1.png"}},{"type":"Text","props":{"y":0,"x":0,"width":251,"var":"codeWord","valign":"middle","text":"获取验证码","height":91,"fontSize":30,"font":"Microsoft YaHei","color":"#000","align":"center"}}]}]},{"type":"Sprite","props":{"y":570,"x":82,"width":243,"var":"readedBtn","height":39}}]};
		return regUI;
	})(View);
var resultUI=(function(_super){
		function resultUI(){
			
		    this.showAni=null;
		    this.cont=null;
		    this.couponScroll=null;
		    this.couponNone=null;
		    this.coinNum=null;
		    this.pointNum=null;
		    this.couponNum=null;
		    this.againBtn=null;
		    this.giveupBtn=null;
		    this.awardBtn=null;
		    this.otherBtn=null;
		    this.shareBtn=null;
		    this.rankBtn=null;
		    this.rank1=null;
		    this.rank2=null;
		    this.rank3=null;

			resultUI.__super.call(this);
		}

		CLASS$(resultUI,'ui.resultUI',_super);
		var __proto__=resultUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(resultUI.uiView);

		}

		resultUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"y":0,"x":0,"name":"bg"},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#fff4d6"}}]},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":1180},"child":[{"type":"Image","props":{"y":2,"x":46,"skin":"images/result/logo.png","name":"logo"},"compId":6},{"type":"Image","props":{"y":46,"x":211,"skin":"images/index/block.png","name":"block"},"compId":7},{"type":"Box","props":{"y":640,"x":375,"width":638,"pivotY":75,"pivotX":319,"name":"couponBox","height":149},"compId":9,"child":[{"type":"Image","props":{"skin":"images/result/kuang.png"}},{"type":"Panel","props":{"y":28,"x":63,"width":555,"var":"couponScroll","vScrollBarSkin":"images/index/vscroll.png","renderType":"render","height":94}},{"type":"Sprite","props":{"y":22,"x":35,"width":573,"var":"couponNone","height":96},"child":[{"type":"Image","props":{"y":16,"x":46,"skin":"images/icon/block.png"}},{"type":"Text","props":{"y":44,"x":125,"width":388,"text":"本局没有抢到优惠券，还要继续努力~","height":36,"fontSize":24,"font":"Microsoft YaHei","color":"#000","bold":true}}]}]},{"type":"Box","props":{"y":370,"x":73,"width":246,"name":"pointBox","height":184},"compId":14,"child":[{"type":"Image","props":{"y":6,"skin":"images/icon/coin.png"}},{"type":"Text","props":{"y":6,"x":45,"width":155,"var":"coinNum","text":"0","height":50,"fontSize":50,"color":"#000000","bold":true}},{"type":"Text","props":{"y":78,"x":8,"width":155,"text":"=","height":50,"fontSize":26,"font":"Microsoft YaHei","color":"#000000","bold":false}},{"type":"Text","props":{"y":80,"x":110,"width":155,"text":"积分","height":50,"fontSize":23,"font":"Microsoft YaHei","color":"#000000","bold":false}},{"type":"Text","props":{"y":76,"x":45,"width":63,"var":"pointNum","text":"0","height":50,"fontSize":37,"color":"#000000","bold":true,"align":"left"}},{"type":"Image","props":{"y":145,"x":2,"width":35,"skin":"images/icon/coupon.png","height":20}},{"type":"Text","props":{"y":132,"x":45,"width":38,"var":"couponNum","text":"0","height":50,"fontSize":45,"color":"#000000","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":757,"x":375,"width":638,"pivotX":319,"name":"btnBox","height":90},"compId":21,"child":[{"type":"Image","props":{"y":45,"x":319,"width":290,"visible":false,"var":"againBtn","skin":"images/result/btn3.png","pivotY":45,"pivotX":145,"height":90}},{"type":"Image","props":{"var":"giveupBtn","skin":"images/result/btn1.png"}},{"type":"Image","props":{"y":0,"x":349,"var":"awardBtn","skin":"images/result/btn2.png"}}]},{"type":"Box","props":{"y":1130,"x":58,"name":"shareBox"},"compId":30,"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"images/result/shareBtn.png"}},{"type":"Sprite","props":{"y":0,"width":216,"var":"otherBtn","height":51}},{"type":"Sprite","props":{"y":0,"x":389,"width":249,"var":"shareBtn","height":53}}]},{"type":"Box","props":{"y":900,"x":0,"width":750,"name":"rankBox","height":217},"compId":32,"child":[{"type":"Image","props":{"x":298,"skin":"images/result/rank.png"}},{"type":"Image","props":{"y":41,"x":570,"var":"rankBtn","skin":"images/result/rankBtn.png"}},{"type":"Box","props":{"y":85,"x":218,"width":74,"var":"rank1","height":74},"child":[{"type":"Image","props":{"y":0,"x":0,"width":74,"skin":"images/game/store.png","name":"head","height":74}},{"type":"Text","props":{"y":76,"x":0,"width":74,"text":"KennyS","name":"nickname","fontSize":18,"font":"Microsoft YaHei","color":"#000","align":"center"}},{"type":"Image","props":{"y":102,"x":0,"width":13,"skin":"images/icon/coin.png","height":15}},{"type":"Text","props":{"y":103,"x":17,"width":56,"text":"0","name":"coin","height":18,"fontSize":18,"font":"Microsoft YaHei","color":"#000","align":"left"}}]},{"type":"Box","props":{"y":85,"x":338,"width":74,"var":"rank2","height":74},"child":[{"type":"Image","props":{"y":0,"x":0,"width":74,"skin":"images/game/store.png","name":"head","height":74}},{"type":"Text","props":{"y":76,"x":0,"width":74,"text":"KennyS","name":"nickname","fontSize":18,"font":"Microsoft YaHei","color":"#000","align":"center"}},{"type":"Image","props":{"y":102,"x":0,"width":13,"skin":"images/icon/coin.png","height":15}},{"type":"Text","props":{"y":103,"x":17,"width":56,"text":"0","name":"coin","height":18,"fontSize":18,"font":"Microsoft YaHei","color":"#000","align":"left"}}]},{"type":"Box","props":{"y":85,"x":458,"width":74,"var":"rank3","height":74},"child":[{"type":"Image","props":{"y":0,"x":0,"width":74,"skin":"images/game/store.png","name":"head","height":74}},{"type":"Text","props":{"y":76,"x":0,"width":74,"text":"KennyS","name":"nickname","fontSize":18,"font":"Microsoft YaHei","color":"#000","align":"center"}},{"type":"Image","props":{"y":102,"x":0,"width":13,"skin":"images/icon/coin.png","height":15}},{"type":"Text","props":{"y":103,"x":17,"width":56,"text":"0","name":"coin","height":18,"fontSize":18,"font":"Microsoft YaHei","color":"#000","align":"left"}}]}]}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"y":[{"value":-124,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":5}],"x":[{"value":-138,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0},{"value":46,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":5}]}},{"target":7,"keyframes":{"y":[{"value":-134,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":46,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":5}],"x":[{"value":811,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":211,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":5}]}},{"target":32,"keyframes":{"y":[{"value":1450,"tweenMethod":"linearNone","tween":true,"target":32,"key":"y","index":0},{"value":900,"tweenMethod":"linearNone","tween":true,"target":32,"key":"y","index":5}]}},{"target":30,"keyframes":{"y":[{"value":1680,"tweenMethod":"linearNone","tween":true,"target":30,"key":"y","index":0},{"value":1130,"tweenMethod":"linearNone","tween":true,"target":30,"key":"y","index":5}]}},{"target":14,"keyframes":{"x":[{"value":-250,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":0},{"value":73,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":5}]}},{"target":9,"keyframes":{"x":[{"value":-375,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":375,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":5}]}},{"target":21,"keyframes":{"x":[{"value":1100,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":0},{"value":375,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":5}]}}],"name":"showAni","id":1,"frameRate":24,"action":0}]};
		return resultUI;
	})(View);
var ruleUI=(function(_super){
		function ruleUI(){
			
		    this.closeBtn=null;
		    this.title=null;
		    this.ruleScroll=null;
		    this.ruleWord=null;

			ruleUI.__super.call(this);
		}

		CLASS$(ruleUI,'ui.ruleUI',_super);
		var __proto__=ruleUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ruleUI.uiView);

		}

		ruleUI.uiView={"type":"Dialog","props":{"width":640,"height":1040},"child":[{"type":"Image","props":{"skin":"images/rule/cont.png"}},{"type":"Image","props":{"y":950,"x":171,"var":"closeBtn","skin":"images/rule/close.png"}},{"type":"Text","props":{"y":45,"x":0,"width":640,"var":"title","text":"三里屯太古里用户隐私政策","height":64,"fontSize":40,"font":"Microsoft YaHei","color":"#000","bold":true,"align":"center"}},{"type":"Panel","props":{"y":118,"x":45,"width":578,"var":"ruleScroll","vScrollBarSkin":"images/rule/vscroll.png","renderType":"render","height":752},"child":[{"type":"Text","props":{"y":0,"x":0,"wordWrap":true,"width":550,"var":"ruleWord","overflow":"scroll","leading":10,"fontSize":30,"font":"Microsoft YaHei","color":"#727171","bold":false}}]}]};
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
			
		    this.closeBtn=null;

			tipsUI.__super.call(this);
		}

		CLASS$(tipsUI,'ui.tipsUI',_super);
		var __proto__=tipsUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tipsUI.uiView);

		}

		tipsUI.uiView={"type":"Dialog","props":{"width":696,"height":464},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"images/tips/award.png"}},{"type":"Sprite","props":{"y":0,"x":503,"width":87,"var":"closeBtn","height":60}}]};
		return tipsUI;
	})(Dialog);
//常量的定义
const Browser = Laya.Browser;
const WebGL = Laya.WebGL;
const Loader = Laya.Loader;
const Stat = Laya.Stat;

const STORE_NUM = 7;                            //显示的商店总数量
const STORE_DIS = 320;                          //跳到商店中心点的位置
const STORE_DIS_MIN = 280, STORE_DIS_MAX = 400; //商店间最大，最小的距离
const PRESS_TIME = 1000;                        //按压的时间
const JUMP_TIME = 500;                          //跳的时间
const PLAYER_STORE_DIS = -150;                  //玩家与商店的垂直距离
const NAV_STORE_DIS = 50;                       //导航与商店的垂直距离
const SENCE_MOVE_TIME = 500;                    //场景移动的时间
const STORE_WIDTH = 160;                        //块的可站立宽度
const COIN_UNIT = 1;                            //成功一次的金币数量
const PAGE_TRF_TIME = 300;                      //页面过渡时间
const GAME_LEVEL = 2;                           //游戏等级

//变量
let iWX;

let BgPageY = 0, WindowH = 0;
let GameContH = 0;

let CoinNum = 0,couponList = [];

let storeDatas = [];
let storeDataCount = 0;

let PlayKey = "";                               //关键字符
let ContinuePlayGame = false;                   //是否继续游戏
let AddUpCoinGiveCoupon = [];                   //一定积分以后可获得的优惠券
let CurrentCoins = 0;                           //当前用户的金币
let CurrentScores = 0;                          //当前用户的积分
let IsMember = false;                           //当前用户是否是会员
let Mobile = null;                              //当前用户的电话

let storeData = {
    "Id": 1,
    "StoreKey": "093c39d01b3d486db526efdd7ab3e630",
    "StoreName": "太古里一号店",
    "StoreDesc": null,
    "StoreSort": 1,
    "StoreImgurl": "https://restest.bestcake.com/tgl/34aa54591c9144939653a57ebaca5c22.png",//墩子素材
    "CreateTime": "2020-05-28T20:51:51.63",
    "ActiveTitle": "太古里一号店",//活动标题
    "ActiveDate": "2020-05-28至2020-05-31",//活动时间
    "ActiveContents": "所有门店9.5折",//活动内容
    "IsImportant": 1,
    "ContainsCoupons": 0,//是否包含优惠券
    "ContainsCoin": 0,
    "CoinCount": 0,
    "State": 1
}
var unpackImg = ["images/common/blank.png","images/common/share.jpg","images/index/rule.png","images/login/b1.png","images/login/read.png","images/navs/1.png","images/navs/2.png","images/navs/3.png","images/navs/4.png","images/navs/5.png","images/navs/6.png","images/navs/7.png","images/navs/8.png","images/rank/kuang1.png","images/rank/kuang2.png","images/reg/read.png","images/result/kuang.png","images/result/shareBtn.png","images/rule/cont.png","images/tips/award.png"];

var PreResources = [
    { url: 'res/atlas/images/common.atlas', type: Loader.ATLAS },
    { url: 'res/atlas/images/game.atlas', type: Loader.ATLAS },
    { url: 'res/atlas/images/icon.atlas', type: Loader.ATLAS },
    { url: 'res/atlas/images/index.atlas', type: Loader.ATLAS },
    { url: 'res/atlas/images/login.atlas', type: Loader.ATLAS },
    { url: 'res/atlas/images/player.atlas', type: Loader.ATLAS },
    { url: 'res/atlas/images/rank.atlas', type: Loader.ATLAS },
    { url: 'res/atlas/images/reg.atlas', type: Loader.ATLAS },
    { url: 'res/atlas/images/result.atlas', type: Loader.ATLAS },
    { url: 'res/atlas/images/rule.atlas', type: Loader.ATLAS },
    { url: 'res/atlas/images/icon/coupon.atlas', type: Loader.ATLAS },
];
var Resources = [
    { url: 'res/atlas/images/stores.atlas', type: Loader.ATLAS },
    // { url: 'images/result/w3.png', type: Loader.IMAGE },    
    // { url: 'res/atlas/images/culture.atlas', type: Loader.ATLAS }
];

var ResourcesLoadComplete = false;
var importantMath = function(){
    var _self = this;

    /**
     * 获得范围内随机整数
     */
	_self.randomRange = function (min, max) {
		var randomNumber;
		randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		return randomNumber;
	} //end func 

    /**
     * 浮点数的加法
     */
    _self.FloatPointAdd = function(a,b,bit){
        var digit = bit || 10000;
        return (Math.floor(a * digit) + Math.floor(b * digit)) / digit;
    }//end func

	/**
     * 角度转换
     */
	_self.convertAngle = function(deg){
		return Math.PI / 180 * deg;
	}//end func

	/**
     * 两点间距离
     */
	_self.PointDistance = function(x1,y1,x2,y2){
		return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	}//end func

    /**
     * 计算右边Y轴的值
     */
    _self.countRightY = function(x,offset){
        let oft = offset || 0;
        return parseInt(-197 / 338 * x)+oft;
    }

    /**
     * 计算左边Y轴的值
     */
    _self.countLeftY = function(x,offset){
        let oft = offset || 0;
        return parseInt(197 / 338 * x)+oft;
    }
    
    /**
     * 判断是否再两个数之间
     */
    _self.judgeInTwoNums = function(val,nums){
        let min,max;
        if(nums[0] > nums[1]) {
            min = nums[1];
            max = nums[0];
        }
        else{
            min = nums[0];
            max = nums[1];
        }
        return (val >= min && val <= max);
    }
}

var imath = new importantMath();
var utils = function(){
    var _self = this;

	/**
	 * 字符串截取
	 * @param {*} str			需要截取的字符串
	 * @param {*} len			截取长度
	 */
	_self.setString = function(str, len) {
	    var strlen = 0;
	    var s = "";
	    for (var i = 0; i < str.length; i++) {
	        if (str.charCodeAt(i) > 128) {
	            strlen += 2;
	        } else {
	            strlen++;
	        }
	        s += str.charAt(i);
	        if (strlen >= len) {
	            return s + "...";
	        }
	    }
	    return s;
	} //end func

	/**
     * 时间格式化
     */
	_self.dateFormat = function (date) {
		date = date.split("-");
		return parseInt(date[0]) + "年" + parseInt(date[1]) + "月" + parseInt(date[2]) + "日";
	} //end func

    /**
     * 深度复制
     */
	_self.deepClone = function(source) {
		function getClone(_source) {
			var clone = _self.dataType(_source) == "array" ? [] : {};
			for(var i in _source) {
				if(_self.dataType(_source[i]) != 'object' && _self.dataType(_source[i]) != 'array') clone[i] = _source[i];
				else clone[i] = getClone(_source[i]);
			} //end for
			return clone;
		} //edn func
		return getClone(source);
	} //end func

    /**
     * 判断是数组还是对象
     */
	_self.dataType = function(o) {
		if(typeof(o) === 'object') return Array == o.constructor ? 'array' : 'object';
		else return null;
	} //end func

	/**
	 * 常用正则
	 */
	_self.checkStr = function (str, type) {
		if (str && str != '') {
			type = type || 0;
			switch (type) {
				case 0:
					var reg = new RegExp(/^1[3-9]\d{9}$/); //手机号码验证
					break;
				case 1:
					var reg = new RegExp(/^[1-9]\d{5}$/); //邮政编码验证
					break;
				case 2:
					var reg = new RegExp(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/); //匹配EMAIL
					break;
				case 3:
					var reg = new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/); //匹配身份证
					break;
				case 4:
					var reg = new RegExp(/^\d+$/); //是否为0-9的数字
					break;
				case 5:
					var reg = new RegExp(/^[a-zA-Z\u0391-\uFFE5]*[\w\u0391-\uFFE5]*$/); //不能以数字或符号开头
					break;
				case 6:
					var reg = new RegExp(/^\w+$/); //匹配由数字、26个英文字母或者下划线组成的字符串
					break;
				case 7:
					var reg = new RegExp(/^[\u0391-\uFFE5]+$/); //匹配中文
					break;
				case 8:
					var reg = new RegExp(/^[a-zA-Z\u0391-\uFFE5]+$/); //不能包含数字和符号
					break;
				case 9:
					var reg = new RegExp(/^\d{6}$/); //6位验证码验证
					break;
				case 10:
					var reg = new RegExp(/^\d{4}$/); //4位验证码验证
					break;
			} //end switch
			if (reg.exec(str)) return true;
			else return false;
		} //end if
		else return false;
	}
}

var iUtils = new utils();
var Anime = function () {
    var _self = this;

    /**
     * sprite下落的动画
     */
    _self.fallAnime = function (sprite, delay) {
        let h = sprite.y;
        sprite.y -= 300;

        Laya.Tween.to(sprite, {
            alpha: 1,
            y: h
        }, 1000, Laya.Ease.elasticInOut, null, delay);
    }

    /**
     * sprite右移动的动画
     */
    _self.RightMoveAnime = function (sprite, delay) {
        let x = sprite.x;
        let y = sprite.y;
        sprite.x -= 50;
        sprite.y += 30;

        Laya.Tween.to(sprite, {
            alpha: 1,
            y: y,
            x: x
        }, 500, Laya.Ease.linearIn, null, delay);
    }

    /**
     * sprite显示的动画
     */
    _self.showAnime = function (sprite, delay) {
        Laya.Tween.to(sprite, {
            alpha: 1
        }, 1000, Laya.Ease.elasticInOut, null, delay);
    }

    /**
     * 移动场景的动画
     */
    _self.moveSenceAnime = function (sprite,x,y,handler) {
        Laya.Tween.to(sprite, {
            x:x,
            y:y
        }, SENCE_MOVE_TIME, Laya.Ease.linearIn,handler);
    }
}

var iAnime = new Anime();
var wxFunc = function () {
    var _self = this;
    var isWX = Browser.onMiniGame ? true : false;
    var wx = Browser.window.wx;
    // var openId = "";
    var openId = "omFZq5N4I2_M1GTxAUYer4rQjRpU";
    var systemInfo, userInfo, auth;
    userInfo = {
        nickName: "测试",
        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIvaoPfI1GfVuibg0Ifr2J1XQ0IqlrZ0FZdNJyia790RRe0VGplg1SjNB4oJlFdwSUUILSXBMQDVOwg/132",
        gender: 1
    };

    _self.isWX = isWX;
    _self.wx = wx;
    _self.openId = openId;
    _self.systemInfo = systemInfo;
    _self.userInfo = userInfo;
    _self.auth = auth;

    /**
     * 登录
     */
    _self.login = function () {
        if (isWX) {
            wx.login({
                success(res) {
                    if (res.code) {
                        API.wxLogin({ code: res.code }).then((res) => {
                            if (res.Status == "ok") {
                                API.SessionKey = res.Tag.seesionKey;
                                openId = res.Tag.openid;
                                _self.openId = openId;
                            }
                        })
                    } else {
                        console.log('登录失败！' + res.Msg)
                    }
                }
            })
        }
    }

    /**
     * alert
     */
    _self.alert = function (word, callback) {
        if (isWX) {
            wx.showModal({
                title: word,
                mask: true,
                success(res) {
                    if (res.confirm) {
                        callback(true);
                    } else if (res.cancel) {
                        callback(false);
                    }
                }
            })
        }
    }

    /**
     * 显示loading
     */
    _self.showLoading = function (word) {
        if (isWX) {
            wx.showLoading({
                title: word,
                mask: true
            })
        }
    }

    /**
     * 隐藏loading
     */
    _self.hideLoading = function () {
        if (isWX) {
            wx.hideLoading();
        }
    }

    /**
     * 设置微信存储
     * @param name key
     * @param val 值
     */
    _self.SetWxStorage = function (name, data) {
        if (isWX) {
            wx.setStorage({ key: name, data: val });
        }
    }

    /**
     * 读取微信存储
     * @param name key
     * @param success 成功的回调 返回参数res
     * @param fail 失败的回调 返回参数res
     */
    _self.GetWxStorage = function (name, success, fail) {
        if (isWX) {
            wx.getStorage({
                key: name,
                success: function (res) {
                    if (success) success(res);
                },
                fail: function (res) {
                    if (fail) fail(res);
                }
            })
        }
    }

    /**
     * 初始化wx的授权按钮 暂时全屏显示 点一下就会授权成功
     */
    _self.wxCreateUserInfo = function (callback) {
        if (isWX) {
            if (wx.createUserInfoButton) {
                systemInfo = wx.getSystemInfoSync();
                _self.systemInfo = systemInfo;
                // console.log(systemInfo)
                var button = wx.createUserInfoButton({
                    type: 'image',
                    image: 'images/common/blank.png',
                    // text: 'test',
                    style: {
                        // backgroundColor:"#ffffff",
                        left: 98 / systemInfo.pixelRatio,
                        top: systemInfo.screenHeight / 2 - 180 / systemInfo.pixelRatio,
                        width: 320 / systemInfo.pixelRatio,
                        height: 360 / systemInfo.pixelRatio
                    }
                })
                button.onTap((res) => {
                    if (res.errMsg == 'getUserInfo:fail auth deny') {
                        this.wx.showModal({
                            title: '提示',
                            content: '请同意授权才能继续游戏哦',
                            showCancel: false
                        });
                    } else {
                        userInfo = res.userInfo
                        auth = true;
                        _self.userInfo = userInfo;
                        _self.auth = auth;
                        button.destroy();
                        callback();
                    }
                })
            }
        }
    }

    /**
     * 检查小游戏更新
     */
    _self.checkUpdateGame = function () {
        if (isWX) {
            if (wx.getUpdateManager) {
                let updateManager = wx.getUpdateManager();
                updateManager.onCheckForUpdate(function (res) {
                    if (res.hasUpdate) {
                        wx.showLoading({
                            title: '升级中',
                            mask: true
                        })
                        updateManager.onUpdateReady(function (res) {
                            wx.hideLoading();
                            wx.showModal({
                                title: '升级提示',
                                content: '新版本已经准备好，是否重启应用？',
                                success: function (res) {
                                    if (res.confirm) {
                                        updateManager.applyUpdate()
                                    }
                                }
                            });
                        });
                        updateManager.onUpdateFailed(function () {
                            wx.hideLoading();
                            wx.showModal({
                                title: '升级失败',
                                content: '新版本下载失败，请检查网络！',
                                showCancel: false
                            });
                        })
                    }
                })
            }
        }
    }

    /**
     * 分享初始化
     * @param word 分享文案
     */
    _self.shareInit = function (word) {
        if (isWX) {
            wx.onShareAppMessage(function () {
                return { title: word, imageUrl: "images/common/share.jpg" };
            });
            wx.showShareMenu();
        }
    }

    /**
     * 分享游戏
     */
    _self.shareTheGame = function (word) {
        if (isWX) {
            wx.shareAppMessage({
                title: word,
                imageUrl: "images/common/share.jpg"
            });
        }
    }
}

var encryption = function () {
    var _self = this;

    var timestamp = new Date().getTime() + '000';   //当前客户端时间戳
    var nonce = "123456789";                        //客户端随机生成
    var privatekey = "@qwer****123456@";            //私钥 与接口同步
    var signature;                                  //创建的sign
    var hexcase1 = 0;

    _self.timestamp = timestamp;
    _self.nonce = nonce;
    _self.privatekey = privatekey;
    _self.signature = null;

    /**
     * 加密
     */
    _self.getMD5Staff = function (queryData) {
        var staffId = privatekey;
        var data = dictionaryOrderWithData(queryData);

        // console.log(timestamp + nonce + staffId + data)
        return hex_md5(timestamp + nonce + staffId + data);
    }

    function dictionaryOrderWithData(dic) {
        //eg {x:2，y:3，z:1}
        var result = "";
        var sdic = Object.keys(dic).sort(function (a, b) { return a.localeCompare(b) });
        // console.log(sdic)
        var value = "";
        for (var ki in sdic) {
            if (dic[sdic[ki]] == null) {
                value = ""
            }
            else {
                value = dic[sdic[ki]];
            }
            result += sdic[ki] + value;
        }
        return result.replace(/\s/g, "");
    }

    var hexcase1 = 0;


    function hex_md5(a) {
        return rstr2hex(rstr_md5(str2rstr_utf8(a)))
    }


    function hex_hmac_md5(a, b) {
        return rstr2hex(rstr_hmac_md5(str2rstr_utf8(a), str2rstr_utf8(b)))
    }


    function md5_vm_test() {
        return hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72"
    }


    function rstr_md5(a) {
        return binl2rstr(binl_md5(rstr2binl(a), a.length * 8))
    }


    function rstr_hmac_md5(c, f) {
        var e = rstr2binl(c);
        if (e.length > 16) {
            e = binl_md5(e, c.length * 8)
        }
        var a = Array(16),
            d = Array(16);
        for (var b = 0; b < 16; b++) {
            a[b] = e[b] ^ 909522486;
            d[b] = e[b] ^ 1549556828
        }
        var g = binl_md5(a.concat(rstr2binl(f)), 512 + f.length * 8);
        return binl2rstr(binl_md5(d.concat(g), 512 + 128))
    }


    function rstr2hex(c) {
        try {
            hexcase1
        } catch (g) {
            hexcase1 = 0
        }
        var f = hexcase1 ? "0123456789ABCDEF" : "0123456789abcdef";
        var b = "";
        var a;
        for (var d = 0; d < c.length; d++) {
            a = c.charCodeAt(d);
            b += f.charAt((a >>> 4) & 15) + f.charAt(a & 15)
        }
        return b
    }


    function str2rstr_utf8(c) {
        var b = "";
        var d = -1;
        var a, e;
        while (++d < c.length) {
            a = c.charCodeAt(d);
            e = d + 1 < c.length ? c.charCodeAt(d + 1) : 0;
            if (55296 <= a && a <= 56319 && 56320 <= e && e <= 57343) {
                a = 65536 + ((a & 1023) << 10) + (e & 1023);
                d++
            }
            if (a <= 127) {
                b += String.fromCharCode(a)
            } else {
                if (a <= 2047) {
                    b += String.fromCharCode(192 | ((a >>> 6) & 31), 128 | (a & 63))
                } else {
                    if (a <= 65535) {
                        b += String.fromCharCode(224 | ((a >>> 12) & 15), 128 | ((a >>> 6) & 63), 128 | (a & 63))
                    } else {
                        if (a <= 2097151) {
                            b += String.fromCharCode(240 | ((a >>> 18) & 7), 128 | ((a >>> 12) & 63), 128 | ((a >>> 6) & 63), 128 | (a & 63))
                        }
                    }
                }
            }
        }
        return b
    }


    function rstr2binl(b) {
        var a = Array(b.length >> 2);
        for (var c = 0; c < a.length; c++) {
            a[c] = 0
        }
        for (var c = 0; c < b.length * 8; c += 8) {
            a[c >> 5] |= (b.charCodeAt(c / 8) & 255) << (c % 32)
        }
        return a
    }


    function binl2rstr(b) {
        var a = "";
        for (var c = 0; c < b.length * 32; c += 8) {
            a += String.fromCharCode((b[c >> 5] >>> (c % 32)) & 255)
        }
        return a
    }


    function binl_md5(p, k) {
        p[k >> 5] |= 128 << ((k) % 32);
        p[(((k + 64) >>> 9) << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }


    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }


    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn((f & k) | ((~f) & j), g, f, e, i, h)
    }


    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn((f & j) | (k & (~j)), g, f, e, i, h)
    }


    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }


    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | (~j)), g, f, e, i, h)
    }


    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return (b << 16) | (c & 65535)
    }


    function bit_rol(a, b) {
        return (a << b) | (a >>> (32 - b))
    };
}

var iEncryption = new encryption();
var API = new importAPI();

function importAPI() {
    var _self = this;

    _self.SessionKey = "";

    var requestDomain = "https://happycs.bestcake.com/api/";

    function _Ajax(opts) {
        if (iWX.isWX) {
            return WxAjax(opts.API, opts.data, opts.method);
        }
        else {
            return new Promise((resolve, reject) => {
                normalAjax(opts.API, opts.data, opts.method)
                    .then((res) => {
                        res = eval('(' + res + ')');
                        if (res.errcode == 0) resolve(res);
                        else reject(res);
                    })
            })
        }
    }

    /**
     * wx的ajax方法
     * @param method 
     * @param data 
     */
    function WxAjax(Api, data, method) {
        return new Promise((resolve, reject) => {
            let header = {
                'content-type': "application/x-www-form-urlencoded"
            };
            if (_self.SessionKey) data.SessionKey = _self.SessionKey;

            if (method == "POST") {
                let signature = iEncryption.getMD5Staff(data);
                header = {
                    'content-type': "application/json",
                    'timestamp': iEncryption.timestamp,
                    'nonce': iEncryption.nonce,
                    'signature': signature
                }
            }

            iWX.wx.request({
                url: requestDomain + Api,
                data: data,
                method: method,
                header: header,
                dataType: 'json',
                success: (res) => {
                    resolve(res.data);
                },
                fail: (err) => {
                    reject(err);
                }
            });
        })
    }

    /**
     * 普通的ajax方法
     * @param method 
     * @param data 
     */
    function normalAjax(Api, data, method) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('post', requestDomain + Api);
            xhr.setRequestHeader("Content-type", method == "POST" ? "application/json": "application/x-www-form-urlencoded");
            let idata = "";
            for (let key in data) {
                idata += key + "=" + data[key] + "&";
            }
            idata = idata.substring(0, idata.length - 1);
            xhr.send(idata);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(xhr.responseText)
                }
                else reject();
            };
        })
    }

	/**
     * 登录的方法
     * @param {*} data 参数
     */
    _self.wxLogin = function (data) {
        return _Ajax({
            API: "Authorize/Getweixinopenid",
            data: data,
            method: "GET"
        });
    }//end func

    /**
     * 获取活动规则
     */
    _self.getRule = function () {
        return _Ajax({
            API: "game/GetGameRules",
            data: {},
            method: "GET"
        });
    }//end func

    /**
     * 获取隐私条款
     */
    _self.getPrivacy = function () {
        return _Ajax({
            API: "game/GetRules",
            data: {},
            method: "GET"
        });
    }//end func

    /**
     * 获取店铺优惠券
     */
    _self.GetCouponsInfoByStore = function (data) {
        return _Ajax({
            API: "game/GetCouponsInfoByStore",
            data: data,
            method: "GET"
        });
    }//end func

    /**
     * 监测，pv
     * @param {*} data 参数
     */
    _self.addPV = function (data) {
        data.openid = iWX.openId;
        return _Ajax({
            API: "view/AddPV",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 监测，uv
     * @param {*} data 参数
     */
    _self.addUV = function (data) {
        data.openid = iWX.openId;
        return _Ajax({
            API: "view/adduv",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 添加用户
     * @param {*} data 参数
     */
    _self.addUser = function (data) {
        return _Ajax({
            API: "game/StartGame",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 继续游戏
     * @param {*} data 参数
     */
    _self.ContinuePlayGame = function (data) {
        return _Ajax({
            API: "game/ContinuePlayGame",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 扣除会员积分
     * @param {*} data 参数
     */
    _self.ReduceScores = function (data) {
        return _Ajax({
            API: "game/ReduceScores",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 获取验证码
     * @param {*} data 参数
     */
    _self.SendPhoneCode = function (data) {
        return _Ajax({
            API: "game/SendPhoneCode",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 登录注册
     * @param {*} data 参数
     */
    _self.login = function (data) {
        return _Ajax({
            API: "game/Login",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 游戏结束记录
     * @param {*} data 参数
     */
    _self.EndGame = function (data) {
        return _Ajax({
            API: "game/EndGame",
            data: data,
            method: "POST"
        });
    }//end func

}//end import
var indexPage = function () {
    var _self = this;
    var page;
    var showFlag = false;

    /**
     * 初始化
     */
    _self.init = function () {
        showFlag = true;
        uiInit();
        eventInit();
        requestRule();
        API.addPV({ pagepath: "/pages/index" });
    }

    /**
     * 销毁
     */
    _self.distroy = function () {
        showFlag = false;
        page.removeSelf();
    }

    /**
     * 事件初始化
     */
    function eventInit() {
        iWX.wxCreateUserInfo(addUserInfo);
        page.startBtn.on(Laya.Event.CLICK, this, addUserInfo)
    }

    /**
     * 添加用户信息
     */
    function addUserInfo() {
        if (showFlag) {
            showFlag = false;
            let data = {
                "openid": iWX.openId,
                "nickName": iWX.userInfo.nickName,
                "avatarUrl": iWX.userInfo.avatarUrl,
                "gender": iWX.userInfo.gender
            };
            // if(false) data.friendOpenid = "";
            let res = API.addUser(data);
            res.then(function (res) {
                iWX.showLoading("游戏加载中...");
                if (res.Status == "ok") {
                    dealUserInfo(res.Tag);
                    dealStoreInfo(res.Tag.data, function () {
                        hideIndexPage();
                        iWX.hideLoading();
                    });
                }
                // console.log(res);
            })

            API.addUV({});
        }
    }

    /**
     * 隐藏开始页面
     */
    function hideIndexPage() {

        page.zOrder = 99;
        iGamePage.init();
        iResultPage.init();
        iLoginPage.init();
        iRegPage.init();
        iRankPage.init();
        iTipsPage.init();
        iRulePage.init();

        endAnime();

        Laya.Tween.to(page, {
            alpha: 0
        }, 500, Laya.Ease.linearIn);

        setTimeout(function () {
            _self.distroy();
        }, 500);

    }

    function dealStoreInfo(data, callback) {
        storeDatas = [...data.ImportantList, ...data.RandomList];
        let Resources = [];
        for (var i = 0; i < storeDatas.length; i++) {
            let item = { url: storeDatas[i].StoreImgurl, type: Loader.IMAGE };
            Resources.push(item);
        }
        
        Laya.loader.load(Resources, laya.utils.Handler.create(this, function () {
            if (callback) callback();
        }));
    }

    /**
     * 处理用户信息
     */
    function dealUserInfo(data) {
        PlayKey = data.PlayKey;
        AddUpCoinGiveCoupon = JSON.parse(data.AddUpCoinGiveCoupon);
        CurrentCoins = data.CurrentCoins;
        CurrentScores = data.CurrentScores;
        IsMember = data.IsMember == "0" ? false : true;
        Mobile = data.Mobile;
    }

    /**
     * 请求游戏规则
     */
    function requestRule() {
        API.getRule().then(function (res) {
            if (res.Status == "ok") {
                page.ruleWord.text = res.Tag.contents;
                page.ruleScroll.refresh();
            }
        })
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new indexUI();
        Laya.stage.addChild(page);
        page.cont.y = (WindowH - page.cont.height) / 2;
    }

    /**
     * 结尾的动画
     */
    function endAnime() {
        page.endAni.play(0, false);
    }

}

var iIndexPage = new indexPage();
var gamePage = function () {
    var _self = this;
    var page;
    var showFlag = false;

    var Player;
    var Stores = [];
    var Sence_Stores = [];
    var Navs = [];
    var Sence_Navs = [];

    var wordBox, storeInfo;
    var coinNumText, couponNumText;
    var couponBox, couponAni;
    var coinNum = 0, couponNum = 0;


    var Store_dis = STORE_DIS;          //商店间的距离
    var Move_dir = 0;                   //移动的方向   0右，1左
    var Change_dir = false;             //是否改变方向
    var pressFlag = false;              //是否能按压
    var recordFlag = false;             //是否开始记录时间
    var pressTime = 0;                  //按压时间
    var nowStoreIndex = 0;              //当前店铺的下标

    var centerX = 0, centerY = 0;

    /**
     * 初始化
     */
    _self.init = function () {
        showFlag = true;
        uiInit();
        eventInit();
        _self.gameStart();
    }

    /**
     * 开始游戏
     */
    _self.gameStart = function () {
        AddNavToSence(0, imath.countRightY(0, NAV_STORE_DIS));

        AddStoreToSence(-Store_dis / 2, imath.countRightY(-Store_dis / 2));
        AddStoreToSence(Store_dis / 2, imath.countRightY(Store_dis / 2));

        setItemXY(Player, -STORE_DIS / 2, imath.countRightY(-STORE_DIS / 2, PLAYER_STORE_DIS));

        enterAnime();

        let nowStore = Sence_Stores[nowStoreIndex];
        if (nowStore.infoData.ActiveTitle) showInfoBox(nowStore.infoData);
        API.addPV({pagepath:"/pages/game"});
    }

    /**
     * 重置游戏
     */
    _self.resetGame = function (continueGame) {
        Store_dis = STORE_DIS;
        Move_dir = 0;
        Change_dir = false;
        pressFlag = false;
        recordFlag = false;
        pressTime = 0;
        nowStoreIndex = 0;
        Player.sprite.zOrder = 99;
        
        if(!continueGame){
            coinNum = 0;
            CoinNum = 0;
            couponNum = 0;
            storeDataCount = 0;
            couponList = [];
        }

        updateCoinNum(0);
        updateCouponNum(0);

        wordBox.alpha = 0;

        Player.FlipImg(1);
        Player.sprite.alpha = 0;

        let len1 = Sence_Stores.length;
        let len2 = Sence_Navs.length;
        for (let i = 0; i < len1; i++) {
            let item = Sence_Stores.pop();
            item.sprite.alpha = 0;
            Stores.push(item);
        }

        for (let i = 0; i < len2; i++) {
            let item = Sence_Navs.pop();
            item.sprite.alpha = 0;
            Navs.push(item);
        }
    }

    /**
     * 游戏结束
     */
    function gameOver() {
        // console.log("gameOver");
        iResultPage.show(coinNum);
    }

    /**
     * 事件初始化
     */
    function eventInit() {
        // page.controlBtn.on(Laya.Event.MOUSE_DOWN, this, testEvent);

        page.controlBtn.on(Laya.Event.MOUSE_DOWN, this, pressEvent);
        page.controlBtn.on(Laya.Event.MOUSE_UP, this, releaseEvent);
    }

    /**
     * 测试的事件
     */
    function testEvent() {
        if (pressFlag) {
            pressFlag = false;
            countNextData();
        }
    }

    /**
     * 按压动作
     */
    function pressEvent() {
        if (pressFlag) {
            recordFlag = true;
            pressTime = 0;
            recordTime();
            Player.warmUp();
            hideInfoBox();
        }
    }

    /**
     * 记录时间
     */
    function recordTime() {
        if (pressTime < PRESS_TIME / 3) pressTime += 17;
        else if (pressTime < PRESS_TIME / 2) pressTime += 17 * GAME_LEVEL * GAME_LEVEL;
        else pressTime += 17 * GAME_LEVEL * GAME_LEVEL * GAME_LEVEL;
        if (recordFlag) {
            requestAnimationFrame(() => {
                recordTime();
            });
        }
    }

    /**
     * 释放动作
     */
    function releaseEvent() {
        if (recordFlag && pressFlag) {
            recordFlag = false;
            pressFlag = false;
            CountJumpDis(pressTime);
        }
    }

    /**
     * 计算跳跃的距离
     */
    function CountJumpDis(time) {
        let nowStore = Sence_Stores[nowStoreIndex];
        let nextStore = Sence_Stores[nowStoreIndex + 1];
        let CanStandW = STORE_WIDTH / 2;

        let Max = parseInt(nextStore.x + (Move_dir ? -1 : 1) * (nextStore.sprite.width / 2 - CanStandW));
        let Min = parseInt(nextStore.x + (Move_dir ? 1 : -1) * (nextStore.sprite.width / 2 - CanStandW));
        let x = (Move_dir ? -1 : 1) * 200 * time / (PRESS_TIME * GAME_LEVEL);

        //跳出屏幕
        // if ((!Move_dir && x > Max) || (Move_dir && x < Max)) {
        //     let x = nowStore.sprite.x + (Move_dir ? -1 : 1) * 1500;
        //     let y = nowStore.sprite.x - 1000;
        //     Player.jumpOver(x, y, gameOver);
        //     return;
        // }

        // x = 0;
        if (!Move_dir) {
            let minDis = parseInt(nowStore.x + nowStore.sprite.width / 2 - 30);
            x = x < minDis ? minDis : x;
        }
        else {
            let maxDis = parseInt(nowStore.x - nowStore.sprite.width / 2 + 30);
            x = x > maxDis ? maxDis : x;
        }
        let y = Move_dir ? imath.countLeftY(x, PLAYER_STORE_DIS) : imath.countRightY(x, PLAYER_STORE_DIS);

        Player.jumping(x + centerX, y + centerY, function () {
            if((!Move_dir && x > Max) || (Move_dir && x < Min)) Player.sprite.zOrder = nextStore.sprite.zOrder - 1;
            setItemXY(Player, x, y);
            if (imath.judgeInTwoNums(x, [Min, Max])) {
                countNextData();
                Player.FlipImg(Move_dir ? -1 : 1);
            }
            else {
                Player.overAni();
                setTimeout(function () {
                    gameOver();
                }, 210)
            }
        });
        // console.log(Min,Max)
        // setItemXY(Player,x,y);

        // countNextData();
    }

    /**
     * 计算下个一个位置的数据
     */
    function countNextData() {
        let move_dir = imath.randomRange(0, 1);
        Store_dis = imath.randomRange(STORE_DIS_MIN, STORE_DIS_MAX);
        Change_dir = !(move_dir == Move_dir);
        Move_dir = move_dir;

        let len = Sence_Stores.length;
        let last_store = Sence_Stores[len - 1];
        let upDis = Change_dir ? last_store.y * 2 : 0;
        let x = last_store.x + (Move_dir ? -1 : 1) * Store_dis;
        let y = Move_dir ? imath.countLeftY(x, upDis) : imath.countRightY(x, upDis);
        let senceMoveX = last_store.x + (Move_dir ? -1 : 1) * Store_dis / 2;
        let senceMoveY = (Move_dir ? imath.countLeftY(senceMoveX, upDis) : imath.countRightY(senceMoveX, upDis));

        AddStoreToSence(x, y);
        AddNavToSence(0 + senceMoveX, NAV_STORE_DIS + senceMoveY);
        SenceMoving(senceMoveX, senceMoveY);
    }

    /**
     * 场景移动
     */
    function SenceMoving(offsetX, offsetY) {
        let x = page.cont.x - offsetX;
        let y = page.cont.y - offsetY;

        iAnime.moveSenceAnime(page.cont, x, y, Laya.Handler.create(this, function () {
            page.cont.x += offsetX;
            page.cont.y += offsetY;
            let len1 = Sence_Stores.length, len2 = Sence_Navs.length;

            for (let i = 0; i < len1; i++) {
                let ele = Sence_Stores[i];
                setItemXY(ele, ele.x - offsetX, ele.y - offsetY);
            }
            for (let i = 0; i < len2; i++) {
                let ele = Sence_Navs[i];
                setItemXY(ele, ele.x - offsetX, ele.y - offsetY);
            }
            setItemXY(Player, Player.x - offsetX, Player.y - offsetY);

            let lastStore = Sence_Stores[len1 - 1];
            let lastNav = Sence_Navs[len2 - 1];

            iAnime.fallAnime(lastStore.sprite, 0);
            iAnime.showAnime(lastNav.sprite, 400);

            updateCoinNum(COIN_UNIT);
            let nowStore = Sence_Stores[nowStoreIndex];
            judgeCoinNumsCoupon(Player.sprite.x, Player.sprite.y);
            if (nowStore.infoData.ContainsCoupons > 0) requestStoreCoupon(nowStore.infoData,Player.sprite.x, Player.sprite.y);
            if (nowStore.infoData.ActiveTitle) showInfoBox(nowStore.infoData);

            setTimeout(function () {
                pressFlag = true;
            }, 1500);
        }));
    }

    /**
     * 判断一定数量的金币获取优惠券
     */
    function judgeCoinNumsCoupon(x,y){
        for (var i = 0; i < AddUpCoinGiveCoupon.length; i++) {
            if(coinNum >= AddUpCoinGiveCoupon[i].needcoins){
                let item = AddUpCoinGiveCoupon.shift();
                item.id = item.couponid;
                item.CouponName = item.needcoins + "金币优惠券";
                couponList.push(item);
                couponAnime(x,y,1);
                return;
            }
        }
    }

    /**
     * 请求优惠券
     */
    function requestStoreCoupon(info,x,y){
        API.GetCouponsInfoByStore({storekey:info.StoreKey})
        .then(function(res){
            if(res.Status == "ok" && res.Tag.length > 0){
                couponList.push(...res.Tag);
                couponAnime(x,y,res.Tag.length);
            }
        })
    }

    /**
     * 显示商店信息
     */
    function showInfoBox(info) {
        let word = "";
        word += info.ActiveTitle + "\n";
        word += info.ActiveDate + "\n";
        word += info.ActiveContents;
        updateStoreInfo(word);

        Laya.Tween.to(wordBox, {
            alpha: 1
        }, 300, Laya.Ease.linearIn);
    }

    /**
     * 隐藏商店信息
     */
    function hideInfoBox() {
        Laya.Tween.to(wordBox, {
            alpha: 0
        }, 300, Laya.Ease.linearIn);
    }

    /**
     * 入场的动画
     */
    function enterAnime(test) {
        if (test) {
            pressFlag = true;
            for (var i = 0; i < Sence_Stores.length; i++) {
                var ele = Sence_Stores[i];
                ele.sprite.alpha = 1;
            }
            Sence_Navs[0].sprite.alpha = 1;
            return;
        }


        for (var i = 0; i < Sence_Stores.length; i++) {
            var ele = Sence_Stores[i];
            iAnime.fallAnime(ele.sprite, 400 * i)
        }

        for (var i = 0; i < Sence_Navs.length; i++) {
            var ele = Sence_Navs[i];
            iAnime.showAnime(ele.sprite, 800 * (i + 1))
        }

        iAnime.RightMoveAnime(Player.sprite, 1200, PLAYER_STORE_DIS);
        setTimeout(function () {
            pressFlag = true;
        }, 1800);
    }

    /**
     * 更新金币数量
     * @param {*} num 
     */
    function updateCoinNum(num) {
        coinNum += num;
        coinNumText.text = coinNum;
        CoinNum = coinNum;
    }

    /**
     * 更新优惠券数量
     * @param {*} num 
     */
    function updateCouponNum(num) {
        couponNum += num;
        couponNumText.text = couponNum;
    }

    /**
     * 更新商店信息
     */
    function updateStoreInfo(word) {
        storeInfo.text = word;
        page.infoScroll.refresh();
        page.infoScroll.scrollTo();
    }

    /**
     * 获得优惠券的动画
     */
    function couponAnime(x, y, num) {
        couponBox.alpha = 1;
        couponBox.x = x;
        couponBox.y = y - 100;

        couponAni.play(0, false);

        Laya.Tween.to(couponBox, {
            alpha: 0
        }, 500, Laya.Ease.linearIn, null, 1000);

        updateCouponNum(num);
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new gameUI();
        Laya.stage.addChild(page);
        page.cont.height = GameContH;
        page.cont.y = WindowH - page.cont.height;
        centerX = page.cont.width / 2;
        centerY = page.cont.height / 2;

        wordBox = page.wordBox;
        storeInfo = page.infoWord;
        coinNumText = page.coinNum;
        couponNumText = page.couponNum;
        couponBox = page.coupon;
        couponBox.zOrder = 100;
        couponAni = page.couponAni;

        creatNav();
        creatStore();
        creatPlayer();
    }

    /**
     * 创建玩家
     */
    function creatPlayer() {
        Player = new player(page.cont);
    }

    /**
     * 创建店铺
     */
    function creatStore() {
        let first = new store(page.cont);
        Stores.push(first);

        for (var i = 0; i < STORE_NUM - 1; i++) {
            let item = new store(page.cont);
            Stores.push(item);
        }
    }

    /**
     * 创建导航标签
     */
    function creatNav() {
        let first = new Nav(page.cont);
        Navs.push(first);

        for (var i = 0; i < STORE_NUM - 2; i++) {
            let item = new Nav(page.cont);
            Navs.push(item);
        }
    }

    /**
     * 添加标签去场景里面
     * @param {*} x 
     * @param {*} y 
     */
    function AddNavToSence(x, y) {
        let item = Navs.pop();

        setItemXY(item, x, y);
        item.changeSkin();

        item.FlipImg(Move_dir ? -1 : 1);

        Sence_Navs.push(item);

        for (var i = 0; i < Sence_Navs.length; i++) {
            var ele = Sence_Navs[i];
            ele.sprite.zOrder = (STORE_NUM - i) * 2 - 1;
        }

        if (Navs.length < 1) {
            let item = Sence_Navs.shift();
            item.sprite.alpha = 0;
            Navs.push(item);
        }
    }

    /**
     * 添加商店去场景里面
     * @param {*} x 
     * @param {*} y 
     */
    function AddStoreToSence(x, y) {
        let item = Stores.pop();

        setItemXY(item, x, y);
        if (storeDataCount < storeDatas.length) {
            item.infoData = storeDatas[storeDataCount];
            storeDataCount++;
        }
        else {
            item.infoData = storeDatas[imath.randomRange(0, storeDatas.length - 1)];
        }
        item.changeSkin();

        Sence_Stores.push(item);

        for (var i = 0; i < Sence_Stores.length; i++) {
            var ele = Sence_Stores[i];
            ele.sprite.zOrder = (STORE_NUM - i) * 2;
        }

        if (Stores.length < 1) {
            let item = Sence_Stores.shift();
            item.sprite.alpha = 0;
            Stores.push(item);
        }

        nowStoreIndex = Sence_Stores.length - 2;
    }

    /**
     * 设置对象的虚拟位置
     */
    function setItemXY(item, x, y) {
        item.x = x;
        item.y = y;

        setSpriteXY(item.sprite, x, y);
    }

    /**
     * 设置对象的位置
     */
    function setSpriteXY(sp, x, y) {
        sp.x = x + centerX;
        sp.y = y + centerY;
    }
}

var iGamePage = new gamePage();

var resultPage = function () {
    var _self = this;
    var page;
    var showFlag = false;
    var step = 0;

    /**
     * 初始化
     */
    _self.init = function () {
        showFlag = true;
        uiInit();
        eventInit();
    }

    /**
     * 销毁
     */
    _self.distroy = function () {
        showFlag = false;
        page.removeSelf();
    }

    /**
     * 显示
     */
    _self.show = function (coinNum) {
        renderPage(coinNum);
        step = coinNum;

        page.visible = true;
        page.alpha = 0;
        page.showAni.play(0, false);
        Laya.Tween.to(page, {
            alpha: 1
        }, PAGE_TRF_TIME, Laya.Ease.linearIn);

        requestRank();
        API.addPV({ pagepath: "/pages/result" });
    }

    /**
     * 隐藏
     */
    _self.hide = function () {
        Laya.Tween.to(page, {
            alpha: 0
        }, PAGE_TRF_TIME, Laya.Ease.linearIn);

        setTimeout(function () {
            page.visible = false;
        }, PAGE_TRF_TIME + 20);
    }

    /**
     * 更新是否是会员
     */
    _self.updateIsMember = function () {
        IsMember = true;
        page.againBtn.visible = true;
        page.giveupBtn.visible = false;
        page.awardBtn.visible = false;
    }

    /**
     * 事件初始化
     */
    function eventInit() {
        page.againBtn.on(Laya.Event.CLICK, this, hidePage);
        page.giveupBtn.on(Laya.Event.CLICK, this, hidePage);
        page.awardBtn.on(Laya.Event.CLICK, this, showLoginPage);
        page.rankBtn.on(Laya.Event.CLICK, this, showRankPage);
        page.otherBtn.on(Laya.Event.CLICK, this, gotoOtherApp);
        page.shareBtn.on(Laya.Event.CLICK, this, makePoster);
    }

    /**
     * 请求排行榜
     */
    function requestRank() {

    }

    /**
     * 制作海报
     */
    function makePoster() {

    }

    /**
     * 去另一个小程序
     */
    function gotoOtherApp() {

    }

    /**
     * 继续游戏
     */
    function ContinuePlayGame() {
        iWX.alert("是否要继续游戏", function (bool) {
            if (bool) {
                API.ContinuePlayGame({
                    mobile: Mobile,
                    playkey: PlayKey,
                    currentstep: step
                })
                    .then(function (res) {
                        if (res.Status == "ok") {
                            if (res.Tag.continuepaly) {
                                ReduceScores();
                            }
                            else iWX.alert("复活需要的积分不足");
                        }
                        else iWX.alert(res.Msg);
                    })
            }
            else hidePage();
        })
    }

    /**
     * 扣除积分
     */
    function ReduceScores() {
        API.ReduceScores({
            mobile: Mobile,
            playkey: PlayKey
        })
            .then(function (res) {
                if (res.Status == "ok") {
                    iGamePage.resetGame(true);
                    iGamePage.gameStart();
                    _self.hide();
                }
                else iWX.alert(res.Msg);
            })
    }

    /**
     * 渲染页面
     */
    function renderPage(coinNum) {
        page.coinNum.text = coinNum;
        page.pointNum.text = CurrentScores;
        page.couponNum.text = couponList.length;

        var len = couponList.length;
        if (len > 0) {
            page.couponNone.visible = false;
            page.couponScroll.visible = true;
            page.couponScroll.removeChildren();
            for (var i = 0; i < len; i++) {
                var ele = couponList[i];
                var item = creatCouponSprite(ele.CouponName);
                item.y = item.height * i;
                page.couponScroll.addChild(item);
            }
            page.couponScroll.refresh();
        }
        else {
            page.couponScroll.visible = false;
            page.couponNone.visible = true;
        }

        if (IsMember) {
            page.againBtn.visible = true;
            page.giveupBtn.visible = false;
            page.awardBtn.visible = false;
        }
        else {
            page.againBtn.visible = false;
            page.giveupBtn.visible = true;
            page.awardBtn.visible = true;
        }

        if (IsMember) sendGameData();
    }

    /**
     * 发送游戏数据
     */
    function sendGameData() {
        let couponid = "";
        for (var i = 0; i < couponList.length; i++) {
            couponid += (i == 0 ? "" : ",") + couponList[i].id
        }
        let data = {
            openid: iWX.openId,
            playkey: PlayKey,
            mobile: Mobile,
            totalcoins: CoinNum,
            steps: CoinNum,
            couponid: couponid
        }
        API.EndGame(data)
            .then(function (res) {
                if (res.Status == "ok") {
                    if (couponList.length > 0) iTipsPage.show();
                }
                // else iWX.alert(res.Msg);
            })
    }

    /**
     * 创建
     */
    function creatCouponSprite(name) {
        let sp = new couponUI();
        sp.word.text = name;
        return sp;
    }

    /**
     * 显示登陆页面
     */
    function showLoginPage() {
        iLoginPage.show();
    }

    /**
     * 显示排行榜页面
     */
    function showRankPage() {
        iRankPage.show();
    }

    /**
     * 隐藏页面
     */
    function hidePage() {
        iGamePage.resetGame(false);
        iGamePage.gameStart();
        _self.hide();
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new resultUI();
        Laya.stage.addChild(page);
        page.cont.y = (WindowH - page.cont.height) / 2;
        page.visible = false;
    }
}

var iResultPage = new resultPage();
var regPage = function () {
    var _self = this;
    var page;
    var showFlag = false;
    var readFlag = false;

    /**
     * 初始化
     */
    _self.init = function () {
        showFlag = true;
        uiInit();
        eventInit();
    }

    /**
     * 销毁
     */
    _self.distroy = function () {
        showFlag = false;
        page.removeSelf();
    }

    /**
     * 显示
     */
    _self.show = function () {
        page.visible = true;
        page.alpha = 0;
        Laya.Tween.to(page, {
            alpha: 1
        }, PAGE_TRF_TIME, Laya.Ease.linearIn);
        API.addPV({ pagepath: "/pages/reg" });
    }

    /**
     * 事件初始化
     */
    function eventInit() {
        page.backBtn.on(Laya.Event.CLICK, this, hide);
        page.gotoLogin.on(Laya.Event.CLICK, this, hide);
        page.ruleBtn.on(Laya.Event.CLICK, this, showRulePage);

        page.readedBtn.on(Laya.Event.CLICK, this, readPrivacy);
        page.getCodeBtn.on(Laya.Event.CLICK, this, getCode);
        page.regBtn.on(Laya.Event.CLICK, this, login);
    }

    /**
     * 登录
     */
    function login() {
        let phone = page.phone.text;
        let code = page.code.text;

        if(!readFlag) iWX.alert("请先阅读三里屯太古里用户隐私政策");
        else if (!iUtils.checkStr(phone)) iWX.alert("请输入正确的手机号");
        else if (code == "") iWX.alert("请输入验证码");
        else {
            let couponid = "";
            for (var i = 0; i < couponList.length; i++) {
                couponid += (i == 0 ? "" : ",") + couponList[i].id
            }
            let param = {
                openid: iWX.openId,
                mobile: phone,
                code: code,
                type: "REG",// LOGIN 或 REG
                playkey: PlayKey
            };
            let gift =
                {
                    openid: iWX.openId,
                    playkey: PlayKey,
                    mobile: phone,
                    totalcoins: CoinNum,
                    steps: CoinNum,
                    couponid: couponid
                };
            API.login({ logininfo: JSON.stringify(param), giftinfo: JSON.stringify(gift) })
                .then(function (res) {
                    if (res.Status == "ok") {
                        iLoginPage.hide();
                        hide();
                        if (couponList.length > 0) iTipsPage.show();
                        iResultPage.updateIsMember();
                        Mobile = phone;
                    }
                    else iWX.alert(res.Msg);
                })
        }
    }

    /**
     * 获取验证码
     */
    function getCode() {
        var phone = page.phone.text;
        if (page.codeWord.text != "获取验证码") return;
        if (!iUtils.checkStr(phone)) iWX.alert("请输入正确的手机号");
        else {
            page.codeWord.text = "60s";
            API.SendPhoneCode({ mobile: phone })
                .then(function (res) {
                    if (res.Status == "ok") {
                        codeCount();
                    }
                    else {
                        iWX.alert(res.Msg);
                        page.codeWord.text = "获取验证码";
                    }
                })
        }
    }

    /**
     * 获取验证码倒计时
     */
    function codeCount() {
        var time = 60;
        var timer = setInterval(function () {
            time--;
            if (time > 0) page.codeWord.text = time + "s";
            else {
                page.codeWord.text = "获取验证码";
                clearInterval(timer);
            }
        }, 1000);
    }

    /**
     * 阅读隐私政策
     */
    function readPrivacy() {
        readFlag = !readFlag;
        page.readed.visible = readFlag;
    }

    /**
     * 显示规则页面
     */
    function showRulePage() {
        iRulePage.show();
    }

    /**
     * 隐藏
     */
    function hide() {
        Laya.Tween.to(page, {
            alpha: 0
        }, PAGE_TRF_TIME, Laya.Ease.linearIn);

        setTimeout(function () {
            page.visible = false;
        }, PAGE_TRF_TIME + 20);
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new regUI();
        Laya.stage.addChild(page);
        page.cont.y = (WindowH - page.cont.height) / 2;
        page.visible = false;
    }
}

var iRegPage = new regPage();
var loginPage = function(){
    var _self = this;
    var page;
    var showFlag = false;
    var readFlag = false;

    /**
     * 初始化
     */
    _self.init = function () {
        showFlag = true;
        uiInit();
        eventInit();
    }

    /**
     * 销毁
     */
    _self.distroy = function () {
        showFlag = false;
        page.removeSelf();
    }

    /**
     * 显示
     */
    _self.show = function(){
        page.visible = true;
        page.alpha = 0;
        Laya.Tween.to(page, {
            alpha: 1
        }, PAGE_TRF_TIME, Laya.Ease.linearIn);
        API.addPV({pagepath:"/pages/login"});
    }

    /**
     * 隐藏
     */
    _self.hide = function(){
        Laya.Tween.to(page, {
            alpha: 0
        }, PAGE_TRF_TIME, Laya.Ease.linearIn);

        setTimeout(function(){
            page.visible = false;
        },PAGE_TRF_TIME+20);
    }

    /**
     * 事件初始化
     */
    function eventInit(){
        page.backBtn.on(Laya.Event.CLICK,this,hidePage);
        page.gotoReg.on(Laya.Event.CLICK,this,showRegPage);
        page.ruleBtn.on(Laya.Event.CLICK,this,showRulePage);

        page.readedBtn.on(Laya.Event.CLICK,this,readPrivacy);
        page.getCodeBtn.on(Laya.Event.CLICK,this,getCode);
        page.loginBtn.on(Laya.Event.CLICK,this,login);
    }


    /**
     * 登录
     */
    function login(){
        let phone = page.phone.text;
        let code = page.code.text;

        if(!readFlag) iWX.alert("请先阅读三里屯太古里用户隐私政策");
        else if(!iUtils.checkStr(phone)) iWX.alert("请输入正确的手机号");
        else if(code == "") iWX.alert("请输入验证码");
        else{
            let couponid = "";
            for (var i = 0; i < couponList.length; i++) {
                couponid += (i == 0 ? "" : ",") + couponList[i].id
            }
            let param = {
                openid: iWX.openId,
                mobile: phone,
                code: code,
                type: "LOGIN",// LOGIN 或 REG
                playkey: PlayKey
            };
            let gift =
            {
                openid: iWX.openId,
                playkey: PlayKey,
                mobile: phone,
                totalcoins: CoinNum,
                steps: CoinNum,
                couponid: couponid
            };
            API.login({logininfo: JSON.stringify(param), giftinfo: JSON.stringify(gift)})
            .then(function(res){
                if(res.Status == "ok"){
                    hidePage();
                    if(couponList.length > 0) iTipsPage.show();
                    iResultPage.updateIsMember();
                    Mobile = phone;
                }
                else iWX.alert(res.Msg);
            })
        }
    }

    /**
     * 获取验证码
     */
    function getCode(){
        let phone = page.phone.text;
        if(page.codeWord.text != "获取验证码") return;
        if(!iUtils.checkStr(phone)) iWX.alert("请输入正确的手机号");
        else{
            page.codeWord.text = "60s";
            API.SendPhoneCode({mobile:phone})
            .then(function(res){
                if(res.Status == "ok"){
                    codeCount();
                }
                else {
                    iWX.alert(res.Msg);
                    page.codeWord.text = "获取验证码";
                }
            })
        }
    }

    /**
     * 获取验证码倒计时
     */
    function codeCount(){
        var time = 60;
        var timer = setInterval(function(){
            time--;
            if(time > 0) page.codeWord.text = time+"s";
            else{
                page.codeWord.text = "获取验证码";
                clearInterval(timer);
            }
        },1000);
    }

    /**
     * 隐藏
     */
    function hidePage(){
        _self.hide();
    }

    /**
     * 阅读隐私政策
     */
    function readPrivacy(){
        readFlag = !readFlag;
        page.readed.visible = readFlag;
    }

    /**
     * 显示规则页面
     */
    function showRulePage(){
        iRulePage.show();
    }

    /**
     * 显示注册页面
     */
    function showRegPage(){
        iRegPage.show();
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new loginUI();
        Laya.stage.addChild(page);
        page.cont.y = (WindowH - page.cont.height) / 2;
        page.visible = false;
    }
}

var iLoginPage = new loginPage();
var tipsPage = function(){
    var _self = this;
    var page;
    var showFlag = false;

    /**
     * 初始化
     */
    _self.init = function () {
        showFlag = true;
        uiInit();
        eventInit();
    }

    /**
     * 销毁
     */
    _self.distroy = function () {
        showFlag = false;
        page.removeSelf();
    }

    /**
     * 显示
     */
    _self.show = function(){
        page.popup();
        API.addPV({pagepath:"/pages/awardtips"});
    }

    /**
     * 隐藏
     */
    function hide(){
        page.close();
    }

    /**
     * 事件初始化
     */
    function eventInit(){
        page.closeBtn.on(Laya.Event.CLICK,this,hide);
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new tipsUI();
    }
}

var iTipsPage = new tipsPage();
var rankPage = function () {
    var _self = this;
    var page;
    var showFlag = false;

    /**
     * 初始化
     */
    _self.init = function () {
        showFlag = true;
        uiInit();
        eventInit();
    }

    /**
     * 销毁
     */
    _self.distroy = function () {
        showFlag = false;
        page.removeSelf();
    }

    /**
     * 显示
     */
    _self.show = function () {
        page.popup();
        requestRank();
        API.addPV({ pagepath: "/pages/rank" });
    }

    /**
     * 请求排行榜
     */
    function requestRank() {
        renderRank();
    }

    /**
     * 渲染页面
     */
    function renderRank() {
        page.rankScroll.removeChildren();
        for (var i = 0; i < 20; i++) {
            var item = CreatRankRow(i);
            item.y = item.height * i;
            page.rankScroll.addChild(item);
        }
        page.rankScroll.refresh();
    }

    /**
     * 创建排行榜
     */
    function CreatRankRow(i) {
        let sp = new rankRowUI();
        sp.rank.text = i;
        let url = "https://www.seventh77.com/view/food/img/head.jpg";
        Laya.loader.load([{ url: url, type: Loader.IMAGE }], laya.utils.Handler.create(this, function () {
            sp.head.source = Laya.Loader.getRes(url);
        }));
        sp.nickname.text = "测试";
        sp.coin.text = 9999;
        return sp;
    }

    /**
     * 隐藏
     */
    function hide() {
        page.close();
    }

    /**
     * 事件初始化
     */
    function eventInit() {
        page.closeBtn.on(Laya.Event.CLICK, this, hide);
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new rankUI();
    }
}

var iRankPage = new rankPage();
var rulePage = function(){
    var _self = this;
    var page;
    var showFlag = false;

    /**
     * 初始化
     */
    _self.init = function () {
        showFlag = true;
        uiInit();
        eventInit();
        requestPrivacy();
    }

    /**
     * 销毁
     */
    _self.distroy = function () {
        showFlag = false;
        page.removeSelf();
    }

    /**
     * 显示
     */
    _self.show = function(){
        page.popup();
        API.addPV({pagepath:"/pages/rule"});
    }

    /**
     * 请求隐私条款
     */
    function requestPrivacy(){
        API.getPrivacy().then(function(res){
            if(res.Status == "ok"){
                let cont = "";
                
                for (var i = 0; i < res.Tag.RegRule.list.length; i++) {
                    var item = res.Tag.RegRule.list[i];
                    cont += item.itemtitle + "\n" + item.contents + ( i == res.Tag.RegRule.list.length-1 ? "" :"\n");
                }
                page.title.text = res.Tag.RegRule.title;
                page.ruleWord.text = cont;

                page.ruleScroll.refresh();
            }
        })
    }

    /**
     * 隐藏
     */
    function hide(){
        page.close();
    }

    /**
     * 事件初始化
     */
    function eventInit(){
        page.closeBtn.on(Laya.Event.CLICK,this,hide);
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new ruleUI();
    }
}

var iRulePage = new rulePage();
var Nav = function (box) {
    var _self = this;
    _self.sprite = {};
    _self.x = 0;
    _self.y = 0;

    /**
     * 换皮肤
     */
    _self.changeSkin = function (url) {
        let img = url || 'images/navs/' + imath.randomRange(1,8) +'.png';
        this.sprite.nav.source = Laya.Loader.getRes(img);
    }

    /**
     * 翻转图片
     * @param {*} dir 翻转方向 1右 -1左 
     */
    _self.FlipImg = function(dir){
        this.sprite.scaleX = dir;
    }

    /**
     * 初始化
     */
    function init() {
        _self.sprite = new navIconUI();
        _self.sprite.alpha = 0;
        box.addChild(_self.sprite);
    }
    init();
}

var store = function(box){
    var _self = this;
    _self.sprite = {};
    _self.x = 0;
    _self.y = 0;
    _self.infoData = {};

    /**
     * 换皮肤
     */
    _self.changeSkin = function(url){
        let img = url || _self.infoData.StoreImgurl;
        this.sprite.store.source = Laya.Loader.getRes(img);
    }

    /**
     * 初始化
     */
    function init(){
        _self.sprite = new storeUI();
        _self.sprite.alpha = 0;
        box.addChild(_self.sprite);
    }
    init();
}

var player = function (box) {
    var _self = this;
    _self.sprite = {};
    _self.x = 0;
    _self.y = 0;

    var warmUpAni;

    /**
     * 准备动作
     */
    _self.warmUp = function () {
        warmUpAni = Laya.Tween.to(_self.sprite.img, {
            height: 100
        }, PRESS_TIME, Laya.Ease.linearIn);
    }

    /**
     * 翻转图片
     * @param {*} dir 翻转方向 1右 -1左 
     */
    _self.FlipImg = function (dir) {
        this.sprite.scaleX = dir;
    }

    /**
     * 跳出屏幕
     */
    _self.jumpOver = function (x, y, callback) {
        warmUpAni.complete();
        _self.sprite.img.height = 181;

        Laya.Tween.to(_self.sprite, {
            x: x,
            y: y
        }, JUMP_TIME, Laya.Ease.linearIn, Laya.Handler.create(this, function () {
            if (callback) callback();
        }));
    }

    /**
     * 失败动画
     */
    _self.overAni = function () {
        Laya.Tween.to(_self.sprite, {
            y: _self.sprite.y - PLAYER_STORE_DIS
        }, 200, Laya.Ease.linearIn);
    }

    /**
     * 跳跃动画
     */
    _self.jumping = function (x, y, callback) {
        warmUpAni.complete();
        _self.sprite.img.height = 181;

        let max = y - 200;

        _self.sprite.somersaultAni.play(0, false);

        Laya.Tween.to(_self.sprite, {
            y: max
        }, JUMP_TIME / 2, Laya.Ease.sineOut);

        Laya.Tween.to(_self.sprite, {
            y: y
        }, JUMP_TIME / 2, Laya.Ease.sineIn, null, JUMP_TIME / 2);

        Laya.Tween.to(_self.sprite, {
            x: x
        }, JUMP_TIME, Laya.Ease.linearIn, Laya.Handler.create(this, function () {
            if (callback) callback();
        }));
    }

    /**
     * 初始化
     */
    function init() {
        _self.sprite = new playerUI();
        _self.sprite.alpha = 0;
        _self.sprite.zOrder = 99;
        box.addChild(_self.sprite);
    }
    init();
}

function layaInit() {
    //初始化微信小游戏
    Laya.MiniAdpter.init();
    //初始化引擎
    Laya.init(750, 1624, true);

    //适配模式
    Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
    Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
    Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;

    //开启统计信息
    // Laya.Stat.show();

    //关闭弹窗掉外框关闭
    UIConfig.closeDialogOnSide = false;
    UIConfig.popupBgAlpha = 0.8;

    for (var i = 0; i < unpackImg.length; i++) {
        var item = { url: unpackImg[i], type: Loader.IMAGE };
        PreResources.push(item);
    }

    Laya.loader.load(PreResources, laya.utils.Handler.create(this, preLoadComplate), null);

    CountPageSize();

    
    iWX = new wxFunc();
    iWX.checkUpdateGame();
    iWX.shareInit("快来一起玩吧~");
    iWX.login();
}
layaInit();

/**
 * 预加载素材加载完成
 */
function preLoadComplate() {
    iIndexPage.init();
    // RequestStoreInfoTest();
    // DevelopTest();

    // Laya.URL.basePath = "https://beatsAdgame.beats-digital.com/";

    // Laya.loader.load(Resources, laya.utils.Handler.create(this, loadUIComplate));
}

/**
 * 开发测试用
 */
function DevelopTest() {
    iGamePage.init();
}

/**
 * 请求商店的信息
 */
function RequestStoreInfoTest() {
    for (var i = 1; i <= 25; i++) {
        let item = {
            id: i,
            src: 'images/stores/' + i + '.png',
            couponName: "",
            info: null
        };
        if (imath.randomRange(0, 5) == 1 || i == 3) item.couponName = "星巴克券";
        if (imath.randomRange(0, 5) == 1 || i == 2) {
            item.info = {
                title: "测试活动",
                date: "2020.05.20",
                cont: "测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容"
            };
        }
        storeDatas.push(item)
    }
}

/**
 * 素材加载完成
 */
function loadUIComplate() {
    ResourcesLoadComplete = true;
}

/**
 * 计算页面size
 */
function CountPageSize() {
    WindowH = (750 / Browser.clientWidth) * Browser.clientHeight;
    BgPageY = (WindowH - 1624) / 2;
    GameContH = WindowH - 440;
}