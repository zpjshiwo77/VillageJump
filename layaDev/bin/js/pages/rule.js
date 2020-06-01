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
        requestPrivacy();
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
        API.addPV({pagepath:"/pages/rule"});
    }

    /**
     * 请求隐私条款
     */
    function requestPrivacy(){
        API.getPrivacy().then(function(res){
            if(res.Status == "ok"){
                let cont = "";
                
                for (var i = 0; i < res.Tag.RegRule.list.length; i++) {
                    var item = res.Tag.RegRule.list[i];
                    cont += item.itemtitle + "\n" + item.contents + ( i == res.Tag.RegRule.list.length-1 ? "" :"\n");
                }
                page.title.text = res.Tag.RegRule.title;
                page.ruleWord.text = cont;

                page.ruleScroll.refresh();
            }
        })
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