var Nav = function (box) {
    var _self = this;
    _self.sprite = {};
    _self.x = 0;
    _self.y = 0;

    /**
     * 换皮肤
     */
    _self.changeSkin = function (url) {
        let img = url || 'images/navs/' + imath.randomRange(1,8) +'.png';
        this.sprite.nav.source = Laya.Loader.getRes(img);
    }

    /**
     * 翻转图片
     * @param {*} dir 翻转方向 1右 -1左 
     */
    _self.FlipImg = function(dir){
        this.sprite.scaleX = dir;
    }

    /**
     * 初始化
     */
    function init() {
        _self.sprite = new navIconUI();
        _self.sprite.alpha = 0;
        box.addChild(_self.sprite);
    }
    init();
}
