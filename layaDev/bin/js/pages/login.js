var loginPage = function () {
    var _self = this;
    var page;
    var showFlag = false;
    var readFlag = false;

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
        API.addPV({ pagepath: "/pages/login" });
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
        page.backBtn.on(Laya.Event.CLICK, this, hidePage);
        page.gotoReg.on(Laya.Event.CLICK, this, showRegPage);
        page.ruleBtn.on(Laya.Event.CLICK, this, showRulePage);

        page.readedBtn.on(Laya.Event.CLICK, this, readPrivacy);
        page.getCodeBtn.on(Laya.Event.CLICK, this, getCode);
        page.loginBtn.on(Laya.Event.CLICK, this, login);

        // page.phone.on(Laya.Event.INPUT,this,updatePhone);
    }

    /**
     * 更新电话
     */
    function updatePhone() {

    }


    /**
     * 登录
     */
    function login() {
        let phone = page.phone.text;
        let code = page.code.text;

        if (!readFlag) iWX.alert("请先阅读三里屯太古里用户隐私政策");
        else if (!iUtils.checkStr(phone)) iWX.alert("请输入正确的手机号");
        else if (code == "") iWX.alert("请输入验证码");
        else {
            let couponid = "";
            for (var i = 0; i < couponList.length; i++) {
                couponid += (i == 0 ? "" : ",") + couponList[i].id
            }
            let param = {
                openid: iWX.openId,
                mobile: phone,
                code: code,
                type: "LOGIN",// LOGIN 或 REG
                playkey: PlayKey
            };
            let gift =
                {
                    openid: iWX.openId,
                    playkey: PlayKey,
                    mobile: phone,
                    totalcoins: CoinValue,
                    steps: CoinNum,
                    couponid: couponid
                };
            iWX.showLoading("登陆中...");
            API.login({ logininfo: JSON.stringify(param), giftinfo: JSON.stringify(gift) })
                .then(function (res) {
                    iWX.hideLoading();
                    if (res.Status == "ok") {
                        hidePage();
                        if (couponList.length > 0 ||  parseInt(CoinValue * CoinToScores) > 0) iTipsPage.show();
                        iResultPage.updateIsMember();
                        Mobile = phone;
                    }
                    else {
                        iWX.alert(res.Msg, "去注册",function (bool) {
                            if(bool) showRegPage();
                        });
                    }
                })
        }
    }

    /**
     * 获取验证码
     */
    function getCode() {
        let phone = page.phone.text;
        if (page.codeWord.text != "获取验证码") return;
        if (!iUtils.checkStr(phone)) iWX.alert("请输入正确的手机号");
        else {
            page.codeWord.text = "60s";
            API.SendPhoneCode({ mobile: phone, sendtype: "login" })
                .then(function (res) {
                    if (res.Status == "ok") {
                        codeCount();
                    }
                    else {
                        iWX.alert(res.Msg);
                        page.codeWord.text = "获取验证码";
                    }
                })
        }
    }

    /**
     * 获取验证码倒计时
     */
    function codeCount() {
        var time = 60;
        var timer = setInterval(function () {
            time--;
            if (time > 0) page.codeWord.text = time + "s";
            else {
                page.codeWord.text = "获取验证码";
                clearInterval(timer);
            }
        }, 1000);
    }

    /**
     * 隐藏
     */
    function hidePage() {
        _self.hide();
    }

    /**
     * 阅读隐私政策
     */
    function readPrivacy() {
        readFlag = !readFlag;
        page.readed.visible = readFlag;
    }

    /**
     * 显示规则页面
     */
    function showRulePage() {
        iRulePage.show("privacy");
    }

    /**
     * 显示注册页面
     */
    function showRegPage() {
        iRegPage.show();
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