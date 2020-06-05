var rankPage = function () {
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
        page.popup();
        requestRank();
        API.addPV({ pagepath: "/pages/rank" });
    }

    /**
     * 请求排行榜
     */
    function requestRank() {
        API.getallrank({ openid: iWX.openId, top: 50 })
            .then(function (res) {
                if (res.Status == "ok") {
                    let info = res.Tag.my;
                    if(info) renderMyRnak(info);
                    else page.selfBox.visible = false;
                    renderRank(res.Tag.ranklist);
                }
            })

    }

    /**
     * 渲染我的排行榜
     */
    function renderMyRnak(info) {
        let url = info.headimg;
        Laya.loader.load([{ url: url, type: Loader.IMAGE }], laya.utils.Handler.create(this, function () {
            page.rank.text = info.rankid + 1;
            page.head.source = Laya.Loader.getRes(url);
            page.nickname.text = iUtils.setString(info.nickname, 11);
            iUtils.makeNum(page.coin,info.coins);
            page.selfBox.visible = true;
        }));
    }

    /**
     * 渲染页面
     */
    function renderRank(list) {
        page.rankScroll.removeChildren();
        for (var i = 0; i < list.length; i++) {
            if (list[i].headimg.indexOf("http") == -1) continue;
            var item = CreatRankRow(i + 1, list[i]);
            item.y = item.height * i;
            page.rankScroll.addChild(item);
        }
        page.rankScroll.refresh();
    }

    /**
     * 创建排行榜
     */
    function CreatRankRow(i, info) {
        let sp = new rankRowUI();
        sp.rank.text = i;
        let url = info.headimg;
        Laya.loader.load([{ url: url, type: Loader.IMAGE }], laya.utils.Handler.create(this, function () {
            sp.head.source = Laya.Loader.getRes(url);
        }));
        sp.nickname.text = iUtils.setString(info.nickname, 11);
        iUtils.makeNum(sp.coin,info.coins);
        return sp;
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
        page = new rankUI();
    }
}

var iRankPage = new rankPage();