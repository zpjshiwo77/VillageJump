var player = function (box) {
    var _self = this;
    _self.sprite = {};
    _self.x = 0;
    _self.y = 0;

    var warmUpAni,jumpAni;

    /**
     * 准备动作
     */
    _self.warmUp = function () {
        warmUpAni.visible = true;
        jumpAni.visible = false;
        warmUpAni.play(0,false);
    }

    /**
     * 翻转图片
     * @param {*} dir 翻转方向 1右 -1左 
     */
    _self.FlipImg = function (dir) {
        if(dir == 1){
            _self.sprite.rightSide.visible = true;
            _self.sprite.leftSide.visible = false;
            warmUpAni = _self.sprite.warmUpAniright;
            jumpAni = _self.sprite.jumpAniright;
        }
        else{
            _self.sprite.rightSide.visible = false;
            _self.sprite.leftSide.visible = true;
            warmUpAni = _self.sprite.warmUpAnileft;
            jumpAni = _self.sprite.jumpAnileft;
        }
    }

    /**
     * 跳出屏幕
     */
    _self.jumpOver = function (x, y, callback) {
        warmUpAni.visible = false;
        jumpAni.visible = true;

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
        warmUpAni.visible = false;
        jumpAni.visible = true;
        jumpAni.play(0,false);

        let max = y - 200;
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
        warmUpAni = _self.sprite.warmUpAniright;
        jumpAni = _self.sprite.jumpAniright;
    }
    init();
}
