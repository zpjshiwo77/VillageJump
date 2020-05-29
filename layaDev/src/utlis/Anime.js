var Anime = function () {
    var _self = this;

    /**
     * sprite下落的动画
     */
    _self.fallAnime = function (sprite, delay) {
        let h = sprite.y;
        sprite.y -= 300;

        Laya.Tween.to(sprite, {
            alpha: 1,
            y: h
        }, 1000, Laya.Ease.elasticInOut, null, delay);
    }

    /**
     * sprite右移动的动画
     */
    _self.RightMoveAnime = function (sprite, delay) {
        let x = sprite.x;
        let y = sprite.y;
        sprite.x -= 50;
        sprite.y += 30;

        Laya.Tween.to(sprite, {
            alpha: 1,
            y: y,
            x: x
        }, 500, Laya.Ease.linearIn, null, delay);
    }

    /**
     * sprite显示的动画
     */
    _self.showAnime = function (sprite, delay) {
        Laya.Tween.to(sprite, {
            alpha: 1
        }, 1000, Laya.Ease.elasticInOut, null, delay);
    }

    /**
     * 移动场景的动画
     */
    _self.moveSenceAnime = function (sprite,x,y,handler) {
        Laya.Tween.to(sprite, {
            x:x,
            y:y
        }, SENCE_MOVE_TIME, Laya.Ease.linearIn,handler);
    }
}

var iAnime = new Anime();