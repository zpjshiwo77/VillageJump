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
        page.startBtn.on(Laya.Event.CLICK, this, addUserInfo);
        page.ruleBtn.on(Laya.Event.CLICK, this, showRule);
    }

    /**
     * 显示游戏规则
     */
    function showRule() {
        iRulePage.show("rule");
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
                        setTimeout(function () {
                            hideIndexPage();
                            iWX.hideLoading();
                        }, 500);
                    });
                }
                else {
                    iWX.hideLoading();
                    iWX.alert("今天玩得太多了，休息一会吧~")
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
            storeDatas[i].TouchPoints = JSON.parse(storeDatas[i].TouchPoints);
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
        CoinToScores = data.CoinToScores;
        CoinVal = data.NEXTSTEP;
        GAME_LEVEL = data.GameLevel;
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