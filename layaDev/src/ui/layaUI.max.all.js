var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var bgmBtnUI=(function(_super){
		function bgmBtnUI(){
			
		    this.bgmBtn=null;

			bgmBtnUI.__super.call(this);
		}

		CLASS$(bgmBtnUI,'ui.bgmBtnUI',_super);
		var __proto__=bgmBtnUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(bgmBtnUI.uiView);

		}

		bgmBtnUI.uiView={"type":"View","props":{"width":58,"height":58},"child":[{"type":"Image","props":{"var":"bgmBtn","skin":"images/common/play.png"}}]};
		return bgmBtnUI;
	})(View);
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

		gameUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"y":0,"x":0,"name":"bg"},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":750,"lineWidth":0,"height":1624,"fillColor":"#ffcb73"}}]},{"type":"Box","props":{"y":100,"x":30,"width":200,"var":"coinBox","height":83},"child":[{"type":"Image","props":{"y":0,"x":7,"width":37,"skin":"images/icon/coin.png","height":37}},{"type":"Image","props":{"y":57,"x":0,"width":46,"skin":"images/icon/coupon.png","height":23}},{"type":"Sprite","props":{"y":3,"x":50,"width":140,"var":"coinNum","height":27}},{"type":"Sprite","props":{"y":54,"x":50,"width":140,"var":"couponNum","height":27}}]},{"type":"Box","props":{"y":444,"x":0,"width":750,"var":"cont","height":1180},"child":[{"type":"Sprite","props":{"y":71,"x":65,"width":130,"var":"coupon","pivotY":71,"pivotX":65,"height":142,"alpha":0},"child":[{"type":"Animation","props":{"var":"couponAni","source":"images/icon/coupon/001.png,images/icon/coupon/002.png,images/icon/coupon/003.png,images/icon/coupon/004.png,images/icon/coupon/005.png,images/icon/coupon/006.png,images/icon/coupon/007.png,images/icon/coupon/008.png,images/icon/coupon/009.png,images/icon/coupon/010.png,images/icon/coupon/012.png,images/icon/coupon/013.png,images/icon/coupon/014.png,images/icon/coupon/015.png,images/icon/coupon/016.png,images/icon/coupon/017.png,images/icon/coupon/018.png,images/icon/coupon/019.png,images/icon/coupon/020.png","interval":66,"autoPlay":false}}]}]},{"type":"Sprite","props":{"y":0,"x":0,"width":750,"var":"controlBtn","height":1624}},{"type":"Box","props":{"y":100,"x":250,"visible":true,"var":"wordBox","alpha":0},"child":[{"type":"Image","props":{"y":-30,"x":0,"skin":"images/game/block.png"}},{"type":"Panel","props":{"y":20,"x":20,"width":440,"var":"infoScroll","vScrollBarSkin":"images/index/vscroll.png","renderType":"render","height":205},"child":[{"type":"Text","props":{"y":0,"x":0,"wordWrap":true,"width":425,"var":"infoWord","text":"星巴克2020.03.24-2020.09.102020.03.24-2020.0当季新品已上市！当季新品已上市！当季新品 已上市！当季新品已上市！当季新品已上市！ 当季新品已上市！当季新品已上市！当季新品 已上市！当季新品已上市！当季新品已上市！","overflow":"scroll","leading":10,"fontSize":26,"font":"Microsoft YaHei","color":"#000","bold":false}}]}]}]};
		return gameUI;
	})(View);
var indexUI=(function(_super){
		function indexUI(){
			
		    this.endAni=null;
		    this.ani2=null;
		    this.cont=null;
		    this.ruleBtn=null;
		    this.startBtn=null;

			indexUI.__super.call(this);
		}

		CLASS$(indexUI,'ui.indexUI',_super);
		var __proto__=indexUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(indexUI.uiView);

		}

		indexUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"name":"bg"},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#ffcb73"}}]},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":1180},"child":[{"type":"Image","props":{"y":210,"x":0,"width":750,"skin":"images/index/block.png","name":"block","height":760,"alpha":1},"compId":8},{"type":"Image","props":{"y":-13,"x":38,"skin":"images/index/title.png","name":"title","alpha":1},"compId":10},{"type":"Image","props":{"y":2,"x":375,"width":347,"skin":"images/index/title2.png","pivotY":0,"pivotX":173,"name":"title2","height":199},"compId":20},{"type":"Image","props":{"y":1015,"x":174,"var":"ruleBtn","skin":"images/index/rule.png"},"compId":9},{"type":"Box","props":{"y":896,"x":174,"var":"startBtn"},"compId":21,"child":[{"type":"Image","props":{"skin":"images/index/start.png","alpha":1}},{"type":"Image","props":{"y":-18,"x":182,"skin":"images/common/light.png"},"compId":24},{"type":"Image","props":{"y":-18,"x":-174,"skin":"images/index/mask.png"}},{"type":"Image","props":{"skin":"images/index/start2.png"}}]}]}],"animations":[{"nodes":[{"target":8,"keyframes":{"y":[{"value":210,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":0},{"value":-237,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":14}],"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0},{"value":928,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":14}]}},{"target":10,"keyframes":{"y":[{"value":-13,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":-334,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":14}],"x":[{"value":38,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":-325,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":14}]}},{"target":20,"keyframes":{"y":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":0},{"value":-500,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":14}]}},{"target":21,"keyframes":{"x":[{"value":174,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":0},{"value":-500,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":14}]}},{"target":9,"keyframes":{"x":[{"value":174,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":800,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":14}]}}],"name":"endAni","id":1,"frameRate":24,"action":0},{"nodes":[{"target":24,"keyframes":{"x":[{"value":-145,"tweenMethod":"linearNone","tween":true,"target":24,"key":"x","index":0},{"value":400,"tweenMethod":"linearNone","tween":true,"target":24,"key":"x","index":20}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
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

		loginUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"y":0,"x":0,"name":"bg"},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#ffcb73"}}]},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":1180},"child":[{"type":"Image","props":{"y":50,"x":248,"skin":"images/login/title.png"}},{"type":"Image","props":{"y":151,"x":88,"skin":"images/login/b1.png"}},{"type":"Image","props":{"y":266,"x":88,"skin":"images/login/b2.png"}},{"type":"Image","props":{"y":376,"x":88,"skin":"images/login/read.png"}},{"type":"Sprite","props":{"y":381,"x":93,"visible":false,"var":"readed"},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":20,"lineWidth":1,"height":20,"fillColor":"#000000"}}]},{"type":"Sprite","props":{"y":376,"x":331,"width":321,"var":"ruleBtn","height":28}},{"type":"Image","props":{"y":541,"x":164,"var":"loginBtn","skin":"images/login/btn2.png"}},{"type":"Image","props":{"y":665,"x":247,"var":"gotoReg","skin":"images/login/reg.png"}},{"type":"Image","props":{"y":1073,"x":50,"var":"backBtn","skin":"images/icon/back.png"}},{"type":"TextInput","props":{"y":166,"x":110,"width":533,"var":"phone","type":"number","promptColor":"#9fa0a0","prompt":"手机号","maxChars":11,"height":55,"fontSize":25,"font":"Microsoft YaHei","color":"#000000"}},{"type":"TextInput","props":{"y":282,"x":110,"width":274,"var":"code","type":"number","promptColor":"#9fa0a0","prompt":"验证码","maxChars":8,"height":55,"fontSize":25,"font":"Microsoft YaHei","color":"#000000"}},{"type":"Box","props":{"y":263,"x":412,"var":"getCodeBtn"},"child":[{"type":"Image","props":{"skin":"images/login/btn1.png"}},{"type":"Text","props":{"y":5,"x":0,"width":251,"var":"codeWord","valign":"middle","text":"获取验证码","height":86,"fontSize":30,"font":"Microsoft YaHei","color":"#000","align":"center"}}]},{"type":"Sprite","props":{"y":368,"x":83,"width":243,"var":"readedBtn","height":39}}]}]};
		return loginUI;
	})(View);
var lotteryUI=(function(_super){
		function lotteryUI(){
			
		    this.awardAni=null;
		    this.bg=null;
		    this.cont=null;
		    this.lotteryBox=null;
		    this.lotteryAni=null;
		    this.awardBox=null;
		    this.awardImg=null;
		    this.closeBtn=null;
		    this.awardWord=null;

			lotteryUI.__super.call(this);
		}

		CLASS$(lotteryUI,'ui.lotteryUI',_super);
		var __proto__=lotteryUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(lotteryUI.uiView);

		}

		lotteryUI.uiView={"type":"View","props":{"y":0,"x":0,"width":750,"visible":false,"pivotY":0,"pivotX":0,"height":1624},"child":[{"type":"Sprite","props":{"y":0,"x":0,"var":"bg","alpha":0.7},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#000000"}}]},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"cont","pivotY":0,"pivotX":0,"height":1180},"child":[{"type":"Box","props":{"y":635,"x":370,"width":684,"var":"lotteryBox","pivotY":450,"pivotX":342,"height":900,"alpha":1},"compId":3,"child":[{"type":"Animation","props":{"y":450,"x":342,"width":523,"var":"lotteryAni","source":"images/award/ani/01.png,images/award/ani/02.png,images/award/ani/03.png,images/award/ani/04.png,images/award/ani/05.png,images/award/ani/06.png,images/award/ani/07.png,images/award/ani/08.png,images/award/ani/09.png,images/award/ani/10.png,images/award/ani/11.png,images/award/ani/12.png,images/award/ani/13.png,images/award/ani/14.png,images/award/ani/15.png,images/award/ani/16.png,images/award/ani/17.png","pivotY":304,"pivotX":261,"interval":100,"height":608}}]},{"type":"Box","props":{"y":140,"x":35,"visible":false,"var":"awardBox","scaleY":1,"scaleX":1,"alpha":1},"compId":2,"child":[{"type":"Image","props":{"y":84,"x":0,"var":"awardImg","skin":"images/award/1.png"}},{"type":"Image","props":{"y":0,"x":535,"var":"closeBtn","skin":"images/icon/close.png"}},{"type":"Text","props":{"y":328,"x":154,"width":410,"var":"awardWord","text":"前方还有大奖等你","height":127,"fontSize":30,"font":"Microsoft YaHei","color":"#000000","align":"center"}}]}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":752,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":140,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":20}],"x":[{"value":226,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":35,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":20}],"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":20}],"scaleX":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":20}]}},{"target":3,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":20}]}}],"name":"awardAni","id":1,"frameRate":24,"action":0}]};
		return lotteryUI;
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
			
		    this.rightSide=null;
		    this.warmUpAniright=null;
		    this.jumpAniright=null;
		    this.leftSide=null;
		    this.warmUpAnileft=null;
		    this.jumpAnileft=null;

			playerUI.__super.call(this);
		}

		CLASS$(playerUI,'ui.playerUI',_super);
		var __proto__=playerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(playerUI.uiView);

		}

		playerUI.uiView={"type":"View","props":{"y":60,"x":50,"width":100,"pivotY":60,"pivotX":50,"height":135},"child":[{"type":"Sprite","props":{"width":100,"var":"rightSide","height":135},"child":[{"type":"Animation","props":{"y":0,"x":0,"var":"warmUpAniright","source":"images/player/right/01.png,images/player/right/02.png,images/player/right/03.png,images/player/right/04.png,images/player/right/05.png,images/player/right/06.png,images/player/right/07.png,images/player/right/08.png,images/player/right/09.png,images/player/right/10.png","scaleY":0.5,"scaleX":0.5,"interval":33}},{"type":"Animation","props":{"y":0,"x":0,"visible":false,"var":"jumpAniright","source":"images/player/right/11.png,images/player/right/12.png,images/player/right/13.png,images/player/right/14.png,images/player/right/15.png,images/player/right/16.png,images/player/right/17.png,images/player/right/18.png,images/player/right/19.png,images/player/right/20.png,images/player/right/21.png,images/player/right/22.png","scaleY":0.5,"scaleX":0.5,"interval":33}}]},{"type":"Sprite","props":{"y":0,"x":0,"width":100,"visible":false,"var":"leftSide","height":135},"child":[{"type":"Animation","props":{"y":0,"x":0,"var":"warmUpAnileft","source":"images/player/left/01.png,images/player/left/02.png,images/player/left/03.png,images/player/left/04.png,images/player/left/05.png,images/player/left/06.png,images/player/left/07.png,images/player/left/08.png,images/player/left/09.png,images/player/left/10.png","scaleY":0.5,"scaleX":0.5,"interval":33}},{"type":"Animation","props":{"y":0,"x":0,"visible":false,"var":"jumpAnileft","source":"images/player/left/11.png,images/player/left/12.png,images/player/left/13.png,images/player/left/14.png,images/player/left/15.png,images/player/left/16.png,images/player/left/17.png,images/player/left/18.png,images/player/left/19.png,images/player/left/20.png,images/player/left/21.png,images/player/left/22.png","scaleY":0.5,"scaleX":0.5,"interval":33}}]}]};
		return playerUI;
	})(View);
var rankUI=(function(_super){
		function rankUI(){
			
		    this.closeBtn=null;
		    this.rankScroll=null;
		    this.selfBox=null;
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

		rankUI.uiView={"type":"Dialog","props":{"width":647,"height":1120},"child":[{"type":"Image","props":{"y":971,"x":0,"width":150,"var":"closeBtn","skin":"images/icon/back.png","height":150}},{"type":"Image","props":{"y":0,"x":220,"skin":"images/rank/title.png"}},{"type":"Image","props":{"y":130,"x":0,"skin":"images/rank/kuang1.png"}},{"type":"Panel","props":{"y":175,"x":30,"width":590,"var":"rankScroll","vScrollBarSkin":"images/index/vscroll.png","renderType":"render","height":500}},{"type":"Box","props":{"y":800,"x":30,"width":560,"var":"selfBox","height":110},"child":[{"type":"Image","props":{"y":-30,"x":-30,"skin":"images/rank/kuang2.png"}},{"type":"Sprite","props":{"y":0,"width":560,"var":"self","height":110},"child":[{"type":"Text","props":{"y":2,"x":0,"width":95,"var":"rank","valign":"middle","text":"0","height":74,"fontSize":35,"font":"Microsoft YaHei","color":"#000","bold":true,"align":"center"}},{"type":"Image","props":{"y":0,"x":95,"width":74,"var":"head","skin":"images/common/blank.png","height":74}},{"type":"Text","props":{"y":0,"x":185,"width":222,"var":"nickname","valign":"middle","height":74,"fontSize":32,"font":"Microsoft YaHei","color":"#000","bold":false,"align":"left"}},{"type":"Image","props":{"y":20,"x":410,"width":37,"skin":"images/icon/coin.png","height":37}},{"type":"Sprite","props":{"y":22,"x":453,"width":104,"var":"coin","height":32}}]},{"type":"Image","props":{"y":-647,"x":-9,"skin":"images/rank/kuang3.png"}}]}]};
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

		rankRowUI.uiView={"type":"View","props":{"width":560,"height":110},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":560,"height":110},"child":[{"type":"Text","props":{"y":2,"x":0,"width":95,"var":"rank","valign":"middle","text":"0","height":74,"fontSize":35,"font":"Microsoft YaHei","color":"#000","bold":true,"align":"center"}},{"type":"Image","props":{"y":0,"x":95,"width":74,"var":"head","skin":"images/common/blank.png","height":74}},{"type":"Text","props":{"y":0,"x":185,"width":222,"var":"nickname","valign":"middle","text":"测试","height":74,"fontSize":32,"font":"Microsoft YaHei","color":"#000","bold":false,"align":"left"}},{"type":"Image","props":{"y":20,"x":410,"width":37,"skin":"images/icon/coin.png","height":37}},{"type":"Sprite","props":{"y":22,"x":453,"width":104,"var":"coin","height":32}}]}]};
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

		regUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"y":0,"x":0,"name":"bg"},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#ffcb73"}}]},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":1180},"child":[{"type":"Image","props":{"y":50,"x":215,"skin":"images/reg/title.png"}},{"type":"Image","props":{"y":151,"x":88,"skin":"images/login/b1.png"}},{"type":"Image","props":{"y":266,"x":88,"skin":"images/login/b2.png"}},{"type":"Image","props":{"y":376,"x":88,"skin":"images/login/read.png"}},{"type":"Sprite","props":{"y":381,"x":93,"visible":false,"var":"readed"},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":20,"lineWidth":1,"height":20,"fillColor":"#000000"}}]},{"type":"Sprite","props":{"y":376,"x":331,"width":321,"var":"ruleBtn","height":28}},{"type":"Image","props":{"y":541,"x":172,"var":"regBtn","skin":"images/reg/ok.png"}},{"type":"Image","props":{"y":665,"x":276,"var":"gotoLogin","skin":"images/reg/login.png"}},{"type":"Image","props":{"y":1073,"x":50,"var":"backBtn","skin":"images/icon/back.png"}},{"type":"TextInput","props":{"y":166,"x":110,"width":533,"var":"phone","type":"number","promptColor":"#9fa0a0","prompt":"手机号","maxChars":11,"height":55,"fontSize":25,"font":"Microsoft YaHei","color":"#000000"}},{"type":"TextInput","props":{"y":282,"x":110,"width":274,"var":"code","type":"number","promptColor":"#9fa0a0","prompt":"验证码","maxChars":8,"height":55,"fontSize":25,"font":"Microsoft YaHei","color":"#000000"}},{"type":"Box","props":{"y":263,"x":412,"var":"getCodeBtn"},"child":[{"type":"Image","props":{"skin":"images/login/btn1.png"}},{"type":"Text","props":{"y":0,"x":0,"width":251,"var":"codeWord","valign":"middle","text":"获取验证码","height":91,"fontSize":30,"font":"Microsoft YaHei","color":"#000","align":"center"}}]},{"type":"Sprite","props":{"y":370,"x":82,"width":243,"var":"readedBtn","height":39}}]}]};
		return regUI;
	})(View);
var resultUI=(function(_super){
		function resultUI(){
			
		    this.showAni=null;
		    this.ani2=null;
		    this.cont=null;
		    this.couponScroll=null;
		    this.couponNone=null;
		    this.coinNum=null;
		    this.pointNum=null;
		    this.couponNum=null;
		    this.awardBtn=null;
		    this.againBtn=null;
		    this.giveupBtn=null;
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

		resultUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Sprite","props":{"y":0,"x":0,"name":"bg"},"child":[{"type":"Rect","props":{"width":750,"lineWidth":1,"height":1624,"fillColor":"#ffcb73"}}]},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":1180},"child":[{"type":"Image","props":{"y":2,"x":46,"skin":"images/result/logo.png","name":"logo"},"compId":6},{"type":"Image","props":{"y":-96,"x":131,"skin":"images/result/block.png","name":"block"},"compId":7},{"type":"Box","props":{"y":640,"x":375,"width":638,"pivotY":75,"pivotX":319,"name":"couponBox","height":149},"compId":9,"child":[{"type":"Image","props":{"skin":"images/result/kuang.png"}},{"type":"Panel","props":{"y":28,"x":55,"width":555,"var":"couponScroll","vScrollBarSkin":"images/index/vscroll.png","renderType":"render","height":94}},{"type":"Image","props":{"var":"couponNone","skin":"images/poster/f.png"}}]},{"type":"Box","props":{"y":370,"x":73,"width":246,"name":"pointBox","height":184},"compId":14,"child":[{"type":"Image","props":{"y":87,"x":11,"skin":"images/result/p.png"}},{"type":"Image","props":{"y":6,"x":-3,"width":42,"skin":"images/icon/coin.png","height":42}},{"type":"Image","props":{"y":144,"x":-10,"width":50,"skin":"images/icon/coupon.png","height":25}},{"type":"Sprite","props":{"y":8,"x":45,"width":125,"var":"coinNum","height":36}},{"type":"Sprite","props":{"y":84,"x":45,"width":70,"var":"pointNum","height":29}},{"type":"Sprite","props":{"y":138,"x":45,"width":125,"var":"couponNum","height":36}}]},{"type":"Box","props":{"y":757,"x":375,"width":638,"pivotX":319,"name":"btnBox","height":90},"compId":21,"child":[{"type":"Box","props":{"y":0,"x":341,"width":299,"var":"awardBtn","height":101},"child":[{"type":"Image","props":{"x":1,"skin":"images/result/btn2.png"}},{"type":"Image","props":{"y":-13,"x":-155,"skin":"images/common/light.png"},"compId":62},{"type":"Image","props":{"y":-13,"x":-397,"skin":"images/result/mask.png"}},{"type":"Image","props":{"y":0,"x":0,"skin":"images/result/btn2w.png"}}]},{"type":"Image","props":{"y":46,"x":325,"width":406,"visible":false,"var":"againBtn","skin":"images/result/btn3.png","pivotY":46,"pivotX":203,"height":102}},{"type":"Image","props":{"y":0,"x":-1,"var":"giveupBtn","skin":"images/result/btn1.png"}}]},{"type":"Box","props":{"y":1130,"x":58,"name":"shareBox"},"compId":30,"child":[{"type":"Image","props":{"y":0,"x":0,"width":252,"var":"otherBtn","skin":"images/result/s1.png","height":45}},{"type":"Image","props":{"y":0,"x":447,"width":187,"var":"shareBtn","skin":"images/result/s2.png","height":45}}]},{"type":"Box","props":{"y":900,"x":0,"width":750,"name":"rankBox","height":217},"compId":32,"child":[{"type":"Image","props":{"x":315,"skin":"images/result/rank.png"}},{"type":"Image","props":{"y":41,"x":570,"var":"rankBtn","skin":"images/result/rankBtn.png"}},{"type":"Box","props":{"y":85,"x":218,"width":74,"visible":false,"var":"rank1","height":74},"child":[{"type":"Image","props":{"y":0,"x":0,"width":74,"skin":"images/common/blank.png","name":"head","height":74}},{"type":"Text","props":{"y":80,"x":0,"width":74,"text":"KennyS","name":"nickname","fontSize":18,"font":"Microsoft YaHei","color":"#000","align":"center"}},{"type":"Image","props":{"y":107,"x":0,"width":15,"skin":"images/icon/coin.png","height":15}},{"type":"Sprite","props":{"y":107,"x":16,"width":52,"name":"coin","height":15}}]},{"type":"Box","props":{"y":85,"x":338,"width":74,"visible":false,"var":"rank2","height":74},"child":[{"type":"Image","props":{"y":0,"x":0,"width":74,"skin":"images/common/blank.png","name":"head","height":74}},{"type":"Text","props":{"y":80,"x":0,"width":74,"text":"KennyS","name":"nickname","fontSize":18,"font":"Microsoft YaHei","color":"#000","align":"center"}},{"type":"Image","props":{"y":107,"x":0,"width":15,"skin":"images/icon/coin.png","height":15}},{"type":"Sprite","props":{"y":107,"x":16,"width":52,"name":"coin","height":15}}]},{"type":"Box","props":{"y":85,"x":458,"width":74,"visible":false,"var":"rank3","height":74},"child":[{"type":"Image","props":{"y":0,"x":0,"width":74,"skin":"images/common/blank.png","name":"head","height":74}},{"type":"Text","props":{"y":80,"x":0,"width":74,"text":"KennyS","name":"nickname","fontSize":18,"font":"Microsoft YaHei","color":"#000","align":"center"}},{"type":"Image","props":{"y":107,"x":0,"width":15,"skin":"images/icon/coin.png","height":15}},{"type":"Sprite","props":{"y":107,"x":16,"width":52,"name":"coin","height":15}}]}]}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"y":[{"value":-124,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":5}],"x":[{"value":-138,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0},{"value":46,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":5}]}},{"target":7,"keyframes":{"y":[{"value":-300,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":-96,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":5}],"x":[{"value":811,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":131,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":5}]}},{"target":32,"keyframes":{"y":[{"value":1450,"tweenMethod":"linearNone","tween":true,"target":32,"key":"y","index":0},{"value":900,"tweenMethod":"linearNone","tween":true,"target":32,"key":"y","index":5}]}},{"target":30,"keyframes":{"y":[{"value":1680,"tweenMethod":"linearNone","tween":true,"target":30,"key":"y","index":0},{"value":1130,"tweenMethod":"linearNone","tween":true,"target":30,"key":"y","index":5}]}},{"target":14,"keyframes":{"x":[{"value":-250,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":0},{"value":73,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":5}]}},{"target":9,"keyframes":{"x":[{"value":-375,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":375,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":5}]}},{"target":21,"keyframes":{"x":[{"value":1100,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":0},{"value":375,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":5}]}}],"name":"showAni","id":1,"frameRate":24,"action":0},{"nodes":[{"target":62,"keyframes":{"y":[{"value":-13,"tweenMethod":"linearNone","tween":true,"target":62,"key":"y","index":0},{"value":-13,"tweenMethod":"linearNone","tween":true,"target":62,"key":"y","index":26}],"x":[{"value":-155,"tweenMethod":"linearNone","tween":true,"target":62,"key":"x","index":0},{"value":280,"tweenMethod":"linearNone","tween":true,"target":62,"key":"x","index":26}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
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

		ruleUI.uiView={"type":"Dialog","props":{"width":640,"height":1040},"child":[{"type":"Image","props":{"skin":"images/rule/cont.png"}},{"type":"Image","props":{"y":933,"x":170,"var":"closeBtn","skin":"images/rule/close.png"}},{"type":"Text","props":{"y":48,"x":0,"width":640,"var":"title","text":"三里屯太古里用户隐私政策","height":64,"fontSize":40,"font":"Microsoft YaHei","color":"#000","bold":true,"align":"center"}},{"type":"Panel","props":{"y":130,"x":45,"width":578,"var":"ruleScroll","vScrollBarSkin":"images/rule/vscroll.png","renderType":"render","height":738},"child":[{"type":"Text","props":{"y":5,"x":0,"wordWrap":true,"width":550,"var":"ruleWord","overflow":"scroll","leading":20,"fontSize":28,"font":"Microsoft YaHei","color":"#727171","bold":false}}]}]};
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