var rulePage = function(){
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
    _self.show = function(){
        page.popup();
    }

    /**
     * 隐藏
     */
    function hide(){
        page.close();
    }

    /**
     * 事件初始化
     */
    function eventInit(){
        page.closeBtn.on(Laya.Event.CLICK,this,hide);
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new ruleUI();
    }
}

var iRulePage = new rulePage();