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