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
        renderRank();
    }

    /**
     * 渲染页面
     */
    function renderRank() {
        page.rankScroll.removeChildren();
        for (var i = 0; i < 20; i++) {
            var item = CreatRankRow(i);
            item.y = item.height * i;
            page.rankScroll.addChild(item);
        }
        page.rankScroll.refresh();
    }

    /**
     * 创建排行榜
     */
    function CreatRankRow(i) {
        let sp = new rankRowUI();
        sp.rank.text = i;
        let url = "https://www.seventh77.com/view/food/img/head.jpg";
        Laya.loader.load([{ url: url, type: Loader.IMAGE }], laya.utils.Handler.create(this, function () {
            sp.head.source = Laya.Loader.getRes(url);
        }));
        sp.nickname.text = "测试";
        sp.coin.text = 9999;
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