function layaInit() {
    //初始化微信小游戏
    Laya.MiniAdpter.init();
    //初始化引擎
    Laya.init(750, 1624, true);

    //适配模式
    Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
    Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
    Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;

    //开启统计信息
    // Laya.Stat.show();

    //关闭弹窗掉外框关闭
    UIConfig.closeDialogOnSide = false;
    UIConfig.popupBgAlpha = 0.8;

    for (var i = 0; i < unpackImg.length; i++) {
        var item = { url: unpackImg[i], type: Loader.IMAGE };
        PreResources.push(item);
    }

    Laya.loader.load(PreResources, laya.utils.Handler.create(this, preLoadComplate), null);

    CountPageSize();

    
    iWX = new wxFunc();
    iWX.checkUpdateGame();
    iWX.shareInit("快来一起玩吧~");
    iWX.login();
}
layaInit();

/**
 * 预加载素材加载完成
 */
function preLoadComplate() {
    iIndexPage.init();
    // RequestStoreInfoTest();
    // DevelopTest();

    // Laya.URL.basePath = "https://beatsAdgame.beats-digital.com/";

    // Laya.loader.load(Resources, laya.utils.Handler.create(this, loadUIComplate));
}

/**
 * 开发测试用
 */
function DevelopTest() {
    iGamePage.init();
}

/**
 * 请求商店的信息
 */
function RequestStoreInfoTest() {
    for (var i = 1; i <= 25; i++) {
        let item = {
            id: i,
            src: 'images/stores/' + i + '.png',
            couponName: "",
            info: null
        };
        if (imath.randomRange(0, 5) == 1 || i == 3) item.couponName = "星巴克券";
        if (imath.randomRange(0, 5) == 1 || i == 2) {
            item.info = {
                title: "测试活动",
                date: "2020.05.20",
                cont: "测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容"
            };
        }
        storeDatas.push(item)
    }
}

/**
 * 素材加载完成
 */
function loadUIComplate() {
    ResourcesLoadComplete = true;
}

/**
 * 计算页面size
 */
function CountPageSize() {
    WindowH = (750 / Browser.clientWidth) * Browser.clientHeight;
    BgPageY = (WindowH - 1624) / 2;
    GameContH = WindowH - 440;
}