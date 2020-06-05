var resultPage = function () {
    var _self = this;
    var page;
    var showFlag = false;
    var step = 0;
    var headImg;
    var nickname;

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
        API.getallrank({ openid: iWX.openId, top: 50 })
            .then(function (res) {
                if (res.Status == "ok") {
                    if (res.Tag.my) {
                        headImg = res.Tag.my.headimg;
                        nickname = res.Tag.my.nickname;
                    }
                    if (res.Tag.ranklist.length == 1) {
                        renderRank([page.rank2], res.Tag.ranklist)
                    }
                    else if (res.Tag.ranklist.length == 2) {
                        renderRank([page.rank1, page.rank3], res.Tag.ranklist)
                    }
                    else {
                        renderRank([page.rank1, page.rank2, page.rank3], res.Tag.ranklist)
                    }
                }
            })
    }

    /**
     * 渲染排行榜
     */
    function renderRank(boxs, list) {
        for (let i = 0; i < boxs.length; i++) {
            let box = boxs[i];
            let info = list[i]
            let url = info.headimg;
            if (url.indexOf("http") == -1) continue;
            renderRankItem(box, info, url);
        }
    }

    /**
     * 渲染排行榜列表
     */
    function renderRankItem(box, info, url) {
        Laya.loader.load([{ url: url, type: Loader.IMAGE }], laya.utils.Handler.create(this, function () {
            box.getChildByName("head").source = Laya.Loader.getRes(url);
            box.getChildByName("nickname").text = iUtils.setString(info.nickname, 6);
            iUtils.makeNum(box.getChildByName("coin"), info.coins)
            box.visible = true;
        }));
    }

    /**
     * 生成海报的数字
     */
    function makePosterNum(canvas, ctx, size, x, y, num) {
        let arr = [];
        let nums = (num + "").split("");
        let h = size, w = parseInt(h * 53 / 80);
        for (let i = 0; i < nums.length; i++) {
            let item = iWX.addImgToCanvas(canvas, ctx, {
                url: "images/nums/" + nums[i] + ".png",
                x: x + (w + 1) * i,
                y: y,
                width: w,
                height: h
            });
            arr.push(item);
        }
        return arr;
    }

    /**
     * 制作海报
     */
    function makePoster() {
        let canvas = iWX.makeCanvas(750, 1333);
        let ctx = canvas.getContext('2d');
        iWX.showLoading("生成中...");
        iWX.addImgToCanvas(canvas, ctx, {
            url: "images/poster/bg.jpg",
            x: 0,
            y: 0,
            width: 750,
            height: 1334
        })
            .then(() => {
                let arr = [];

                let w1 = makePosterNum(canvas, ctx, 34, 137, 495, CoinNum * CoinVal);
                let w2 = makePosterNum(canvas, ctx, 23, 137, 565, parseInt(CoinNum * CoinVal * CoinToScores));
                let w3 = makePosterNum(canvas, ctx, 34, 137, 637, couponList.length);

                arr.push(...w1, ...w2, ...w3);

                if (couponList.length > 0) {
                    let item = iWX.addImgToCanvas(canvas, ctx, {
                        url: "images/poster/s.png",
                        x: 56,
                        y: 695,
                        width: 638,
                        height: 149
                    });
                    arr.push(item);
                    item.then(() => {
                        var len = couponList.length > 2 ? 2 : couponList.length;
                        for (var i = 0; i < len; i++) {
                            iWX.addWordToCanvas(ctx, {
                                size: 25,
                                word: couponList[i].CouponName,
                                x: 105,
                                y: 757 + 47 * i
                            })

                            iWX.addWordToCanvas(ctx, {
                                size: 25,
                                word: "x 1",
                                x: 619,
                                y: 757 + 47 * i
                            })
                        }
                    })
                }
                else {
                    let item = iWX.addImgToCanvas(canvas, ctx, {
                        url: "images/poster/f.png",
                        x: 56,
                        y: 695,
                        width: 638,
                        height: 149
                    });
                    arr.push(item);
                }

                if (headImg && nickname) {
                    let item = iWX.addImgToCanvas(canvas, ctx, {
                        url: headImg,
                        x: 100,
                        y: 890,
                        width: 120,
                        height: 120
                    });
                    arr.push(item);

                    iWX.addWordToCanvas(ctx, {
                        size: 25,
                        word: nickname,
                        x: 100,
                        y: 1050
                    })
                }

                Promise.all(arr)
                    .then(() => {
                        iWX.hideLoading();
                        iWX.savePost(canvas);
                    })
            })
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
        iUtils.makeNum(page.coinNum, coinNum * CoinVal);
        iUtils.makeNum(page.pointNum, parseInt(coinNum * CoinVal * CoinToScores));
        iUtils.makeNum(page.couponNum, couponList.length);

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
        else requestRank();
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
            totalcoins: CoinNum * CoinVal,
            steps: CoinNum,
            couponid: couponid
        }
        API.EndGame(data)
            .then(function (res) {
                if (res.Status == "ok") {
                    if (couponList.length > 0) iTipsPage.show();
                    requestRank();
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