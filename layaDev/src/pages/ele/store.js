var store = function(box){
    var _self = this;
    _self.sprite = {};
    _self.x = 0;
    _self.y = 0;
    _self.infoData = {};

    /**
     * 换皮肤
     */
    _self.changeSkin = function(url){
        let img = url || _self.infoData.StoreImgurl;
        Laya.loader.load([{ url: img, type: Loader.IMAGE }], laya.utils.Handler.create(this, function () {
            this.sprite.store.source = Laya.Loader.getRes(img);
        }));
    }

    /**
     * 初始化
     */
    function init(){
        _self.sprite = new storeUI();
        _self.sprite.alpha = 0;
        box.addChild(_self.sprite);
    }
    init();
}
