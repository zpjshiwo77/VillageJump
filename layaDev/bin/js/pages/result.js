var resultPage = function(){
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
        page.visible = true;
        page.alpha = 0;
        page.showAni.play(0,false);
        Laya.Tween.to(page, {
            alpha: 1
        }, PAGE_TRF_TIME, Laya.Ease.linearIn);
        API.addPV({pagepath:"/pages/result"});
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
        page.againBtn.on(Laya.Event.CLICK,this,hidePage);
        page.giveupBtn.on(Laya.Event.CLICK,this,hidePage);
        page.awardBtn.on(Laya.Event.CLICK,this,showLoginPage);
        page.rankBtn.on(Laya.Event.CLICK,this,showRankPage);
    }

    /**
     * 显示登陆页面
     */
    function showLoginPage(){
        iLoginPage.show();
    }

    /**
     * 显示排行榜页面
     */
    function showRankPage(){
        iRankPage.show();
    }

    /**
     * 隐藏页面
     */
    function hidePage(){
        iGamePage.resetGame();
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