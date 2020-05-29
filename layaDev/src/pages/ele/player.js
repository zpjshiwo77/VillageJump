var player = function (box) {
    var _self = this;
    _self.sprite = {};
    _self.x = 0;
    _self.y = 0;

    var warmUpAni;

    /**
     * 准备动作
     */
    _self.warmUp = function () {
        warmUpAni = Laya.Tween.to(_self.sprite.img, {
            height: 100
        }, PRESS_TIME, Laya.Ease.linearIn);
    }

    /**
     * 翻转图片
     * @param {*} dir 翻转方向 1右 -1左 
     */
    _self.FlipImg = function (dir) {
        this.sprite.scaleX = dir;
    }

    /**
     * 跳出屏幕
     */
    _self.jumpOver = function (x, y, callback) {
        warmUpAni.complete();
        _self.sprite.img.height = 181;

        Laya.Tween.to(_self.sprite, {
            x: x,
            y: y
        }, JUMP_TIME, Laya.Ease.linearIn, Laya.Handler.create(this, function () {
            if (callback) callback();
        }));
    }

    /**
     * 失败动画
     */
    _self.overAni = function () {
        Laya.Tween.to(_self.sprite, {
            y: _self.sprite.y - PLAYER_STORE_DIS
        }, 200, Laya.Ease.linearIn);
    }

    /**
     * 跳跃动画
     */
    _self.jumping = function (x, y, callback) {
        warmUpAni.complete();
        _self.sprite.img.height = 181;

        let max = y - 200;

        _self.sprite.somersaultAni.play(0, false);

        Laya.Tween.to(_self.sprite, {
            y: max
        }, JUMP_TIME / 2, Laya.Ease.sineOut);

        Laya.Tween.to(_self.sprite, {
            y: y
        }, JUMP_TIME / 2, Laya.Ease.sineIn, null, JUMP_TIME / 2);

        Laya.Tween.to(_self.sprite, {
            x: x
        }, JUMP_TIME, Laya.Ease.linearIn, Laya.Handler.create(this, function () {
            if (callback) callback();
        }));
    }

    /**
     * 初始化
     */
    function init() {
        _self.sprite = new playerUI();
        _self.sprite.alpha = 0;
        _self.sprite.zOrder = 99;
        box.addChild(_self.sprite);
    }
    init();
}
