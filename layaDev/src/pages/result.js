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