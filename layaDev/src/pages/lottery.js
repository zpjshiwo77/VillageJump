var lotteryPage = function () {
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
        page.visible = true;
        page.alpha = 0;
        Laya.Tween.to(page, {
            alpha: 1
        }, PAGE_TRF_TIME, Laya.Ease.linearIn);
        API.addPV({ pagepath: "/pages/lottery" });
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
     * 事件初始化
     */
    function eventInit() {
        page.closeBtn.on(Laya.Event.CLICK, this, hidePage);
    }

    /**
     * 隐藏
     */
    function hidePage() {
        _self.hide();
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new lotteryUI();
        Laya.stage.addChild(page);
        page.cont.y = (WindowH - page.cont.height) / 2 + page.cont.pivotY;
        page.visible = false;
    }
}

var iLotteryPage = new lotteryPage();