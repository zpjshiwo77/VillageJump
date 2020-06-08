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
            iWX.showLoading("游戏加载中...");
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
                if (res.Status == "ok") {
                    dealUserInfo(res.Tag);
                    enterGamePage();
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
     * 进入游戏页面
     */
    function enterGamePage(){
        if(loadStoreFlag){
            hideIndexPage();
                    iWX.hideLoading();
        }
        else{
            setTimeout(function(){
                enterGamePage();
            },100);
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