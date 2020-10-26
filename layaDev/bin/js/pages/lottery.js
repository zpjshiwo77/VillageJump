var lotteryPage = function () {
    var _self = this;
    var page;
    var showFlag = false;
    var retx = 370,retY = 635;

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
    _self.show = function (pos,award,awardWord) {
        page.lotteryBox.x = pos.x;
        page.lotteryBox.y = pos.y + (WindowH - page.cont.height) / 2;
        page.lotteryBox.scaleX = 0.1;
        page.lotteryBox.scaleY = 0.1;

        page.awardImg.source = Laya.Loader.getRes("images/award/"+award+".png");
        if(award == 0){
            page.awardWord.visible = false;
        }
        else{
            page.awardWord.visible = true;
            page.awardWord.text = awardWord;
        }

        Laya.Tween.to(page.lotteryBox, {
            x: retx,
            y: retY,
            scaleX: 1,
            scaleY: 1
        }, PAGE_TRF_TIME, Laya.Ease.linearIn);

        page.visible = true;
        page.alpha = 0;
        Laya.Tween.to(page, {
            alpha: 1
        }, PAGE_TRF_TIME, Laya.Ease.linearIn);

        setTimeout(function(){
            lotteryAni();
        }, PAGE_TRF_TIME + 50)
        
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
            page.awardBox.visible = false;
            page.lotteryBox.alpha = 1;
            page.lotteryAni.index = 0;
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
        page.cont.y = (WindowH - page.cont.height) / 2;
        page.visible = false;
    }

    /**
     * 抽奖的动画
     */
    function lotteryAni(){
        page.lotteryAni.play(0,false);

        setTimeout(function(){
            page.awardBox.visible = true;
            page.awardAni.play(0,false);
        },105 * 17)
    }
}

var iLotteryPage = new lotteryPage();