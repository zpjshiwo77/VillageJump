var indexPage = function(){
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
    function eventInit(){
        page.startBtn.on(Laya.Event.CLICK,this,hideIndexPage)
    }

    /**
     * 隐藏开始页面
     */
    function hideIndexPage(){
        if (showFlag) {
            showFlag = false;
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
    }

    /**
     * 请求游戏规则
     */
    function requestRule(){
        page.ruleWord.text = "测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则测试规则";
        page.ruleScroll.refresh();
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
    function endAnime(){
        page.endAni.play(0,false);
    }

}

var iIndexPage = new indexPage();