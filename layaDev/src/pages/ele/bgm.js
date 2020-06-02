var bgm = function () {
    var _self = this;
    var bgmFlag = true;
    var sprite;
    var bgm;

    _self.play = function () {
        playBgm();
    }

    _self.pause = function () {
        pauseBgm();
    }

    /**
     * 初始化
     */
    _self.init = function() {
        sprite = new bgmBtnUI();
        sprite.zOrder = 9999;
        Laya.stage.addChild(sprite);
        bgm = Laya.SoundManager.playMusic(BgmUrl);
        changeTipsPos();
        eventInit();
    }

    /**
     * 事件初始化
     */
    function eventInit() {
        sprite.bgmBtn.on(Laya.Event.CLICK, this, controlBgm);

        if (iWX.isWX) {
            iWX.wx.onHide(() => {
                if(bgmFlag) pauseBgm();
            });
            iWX.wx.onShow(() => {
                if(!bgmFlag) playBgm();
            });
        }
    }

    /**
     * 控制音乐
     */
    function controlBgm() {
        if(bgmFlag) pauseBgm();
        else playBgm();
    }

    /**
     * 播放音乐
     */
    function playBgm() {
        bgmFlag = true;
        sprite.bgmBtn.source = Laya.Loader.getRes('images/common/play.png');
        bgm.resume();
    }

    /**
     * 暂停音乐
     */
    function pauseBgm() {
        bgmFlag = false;
        sprite.bgmBtn.source = Laya.Loader.getRes('images/common/off.png');
        bgm.pause();
    }

    /**
     * 修改位置
     */
    function changeTipsPos(){
        sprite.visible = false;
        setTimeout(() => {
            if (iWX.isWX) {
                let res = iWX.wx.getMenuButtonBoundingClientRect();
                let top = res.top * 2 + 6;
                sprite.y = top + 5;
                sprite.x = 28;
                sprite.visible = true;
            }
            else {
                sprite.y = 100;
                sprite.x = 680;
            }
        }, 500);
    }
}

var iBgm = new bgm();