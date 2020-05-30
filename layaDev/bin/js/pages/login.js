var loginPage = function(){
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
        Laya.Tween.to(page, {
            alpha: 1
        }, PAGE_TRF_TIME, Laya.Ease.linearIn);
    }

    /**
     * 事件初始化
     */
    function eventInit(){
        page.backBtn.on(Laya.Event.CLICK,this,hide);
        page.gotoReg.on(Laya.Event.CLICK,this,showRegPage);
        page.ruleBtn.on(Laya.Event.CLICK,this,showRulePage);
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
     * 隐藏
     */
    function hide(){
        Laya.Tween.to(page, {
            alpha: 0
        }, PAGE_TRF_TIME, Laya.Ease.linearIn);

        setTimeout(function(){
            page.visible = false;
        },PAGE_TRF_TIME+20);
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