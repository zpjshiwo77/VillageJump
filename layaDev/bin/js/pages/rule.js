var rulePage = function () {
    var _self = this;
    var page;
    var showFlag = false;
    var ruleCont = {
        title: "游戏规则",
        cont: ""
    };
    var privacyCont = {
        title: "",
        cont: ""
    };

    /**
     * 初始化
     */
    _self.init = function () {
        showFlag = true;
        uiInit();
        eventInit();
        requestPrivacy();
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
     * 显示
     */
    _self.show = function (type) {
        let info = type == "rule" ? ruleCont : privacyCont;
        page.title.text = info.title;
        page.ruleWord.text = info.cont;
        page.ruleScroll.refresh();
        page.ruleScroll.scrollTo();

        page.popup();
        API.addPV({ pagepath: "/pages/rule" });
    }

    /**
     * 请求游戏规则
     */
    function requestRule() {
        API.getRule().then(function (res) {
            if (res.Status == "ok") {
                ruleCont.cont = res.Tag.contents
            }
        })
    }

    /**
     * 请求隐私条款
     */
    function requestPrivacy() {
        API.getPrivacy().then(function (res) {
            if (res.Status == "ok") {
                let cont = "";

                for (var i = 0; i < res.Tag.RegRule.list.length; i++) {
                    var item = res.Tag.RegRule.list[i];
                    cont += item.itemtitle + "\n" + item.contents + (i == res.Tag.RegRule.list.length - 1 ? "" : "\n");
                }
                privacyCont.title = res.Tag.RegRule.title;
                privacyCont.cont = cont;
            }
        })
    }

    /**
     * 隐藏
     */
    function hide() {
        page.close();
    }

    /**
     * 事件初始化
     */
    function eventInit() {
        page.closeBtn.on(Laya.Event.CLICK, this, hide);
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new ruleUI();
    }
}

var iRulePage = new rulePage();