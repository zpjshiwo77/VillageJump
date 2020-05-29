var gamePage = function () {
    var _self = this;
    var page;
    var showFlag = false;

    var Player;
    var Stores = [];
    var Sence_Stores = [];
    var Navs = [];
    var Sence_Navs = [];

    var wordBox, storeInfo;
    var coinNumText, couponNumText;
    var couponBox, couponAni;
    var coinNum = 0, couponNum = 0;


    var Store_dis = STORE_DIS;          //商店间的距离
    var Move_dir = 0;                   //移动的方向   0右，1左
    var Change_dir = false;             //是否改变方向
    var pressFlag = false;              //是否能按压
    var recordFlag = false;             //是否开始记录时间
    var pressTime = 0;                  //按压时间
    var nowStoreIndex = 0;              //当前店铺的下标

    var centerX = 0, centerY = 0;

    /**
     * 初始化
     */
    _self.init = function () {
        showFlag = true;
        uiInit();
        eventInit();
        _self.gameStart();
    }

    /**
     * 开始游戏
     */
    _self.gameStart = function () {
        AddNavToSence(0, imath.countRightY(0, NAV_STORE_DIS));

        AddStoreToSence(-Store_dis / 2, imath.countRightY(-Store_dis / 2));
        AddStoreToSence(Store_dis / 2, imath.countRightY(Store_dis / 2));

        setItemXY(Player, -STORE_DIS / 2, imath.countRightY(-STORE_DIS / 2, PLAYER_STORE_DIS));

        enterAnime();
    }

    /**
     * 重置游戏
     */
    _self.resetGame = function() {
        Store_dis = STORE_DIS;
        Move_dir = 0;
        Change_dir = false;
        pressFlag = false;
        recordFlag = false;
        pressTime = 0;
        nowStoreIndex = 0;
        coinNum = 0;
        couponNum = 0;

        updateCoinNum(0);
        updateCouponNum(0);

        wordBox.alpha = 0;

        Player.FlipImg(1);
        Player.sprite.alpha = 0;

        let len1 = Sence_Stores.length;
        let len2 = Sence_Navs.length;
        for (let i = 0; i < len1; i++) {
            let item = Sence_Stores.pop();
            item.sprite.alpha = 0;
            Stores.push(item);
        }

        for (let i = 0; i < len2; i++) {
            let item = Sence_Navs.pop();
            item.sprite.alpha = 0;
            Navs.push(item);
        }
    }

    /**
     * 游戏结束
     */
    function gameOver() {
        console.log("gameOver");
        iResultPage.show();
    }

    /**
     * 事件初始化
     */
    function eventInit() {
        // page.controlBtn.on(Laya.Event.MOUSE_DOWN, this, testEvent);

        page.controlBtn.on(Laya.Event.MOUSE_DOWN, this, pressEvent);
        page.controlBtn.on(Laya.Event.MOUSE_UP, this, releaseEvent);
    }

    /**
     * 测试的事件
     */
    function testEvent() {
        if (pressFlag) {
            pressFlag = false;
            countNextData();
        }
    }

    /**
     * 按压动作
     */
    function pressEvent() {
        if (pressFlag) {
            recordFlag = true;
            pressTime = 0;
            recordTime();
            Player.warmUp();
            hideInfoBox();
        }
    }

    /**
     * 记录时间
     */
    function recordTime() {
        pressTime += 17;
        if (recordFlag) {
            requestAnimationFrame(() => {
                recordTime();
            });
        }
    }

    /**
     * 释放动作
     */
    function releaseEvent() {
        if (recordFlag && pressFlag) {
            recordFlag = false;
            pressFlag = false;
            CountJumpDis(pressTime);
        }
    }

    /**
     * 计算跳跃的距离
     */
    function CountJumpDis(time) {
        let nowStore = Sence_Stores[nowStoreIndex];
        let nextStore = Sence_Stores[nowStoreIndex + 1];
        let CanStandW = STORE_WIDTH / 2;

        //跳出屏幕
        if (time > PRESS_TIME) {
            let x = nowStore.sprite.x + (Move_dir ? -1 : 1) * 1500;
            let y = nowStore.sprite.x - 1000;
            Player.jumpOver(x, y, gameOver);
            return;
        }

        let Max = parseInt(nextStore.x + (Move_dir ? -1 : 1) * (nextStore.sprite.width / 2 - CanStandW));
        let Min = parseInt(nextStore.x + (Move_dir ? 1 : -1) * (nextStore.sprite.width / 2 - CanStandW));
        let x = Max * time / PRESS_TIME;
        if (!Move_dir) {
            let minDis = parseInt(nowStore.x + nowStore.sprite.width / 2 - 30);
            x = x < minDis ? minDis : x;
        }
        else {
            let maxDis = parseInt(nowStore.x - nowStore.sprite.width / 2 + 30);
            x = x > maxDis ? maxDis : x;
        }
        let y = Move_dir ? imath.countLeftY(x, PLAYER_STORE_DIS) : imath.countRightY(x, PLAYER_STORE_DIS);

        Player.jumping(x + centerX, y + centerY, function () {
            setItemXY(Player, x, y);
            if (imath.judgeInTwoNums(x, [Min, Max])) {
                countNextData();
                Player.FlipImg(Move_dir ? -1 : 1);
            }
            else {
                Player.overAni();
                setTimeout(function () {
                    gameOver();
                }, 210)
            }
        });
        // console.log(Min,Max)
        // setItemXY(Player,x,y);

        // countNextData();
    }

    /**
     * 计算下个一个位置的数据
     */
    function countNextData() {
        let move_dir = imath.randomRange(0, 1);
        Store_dis = imath.randomRange(STORE_DIS_MIN, STORE_DIS_MAX);
        Change_dir = !(move_dir == Move_dir);
        Move_dir = move_dir;

        let len = Sence_Stores.length;
        let last_store = Sence_Stores[len - 1];
        let upDis = Change_dir ? last_store.y * 2 : 0;
        let x = last_store.x + (Move_dir ? -1 : 1) * Store_dis;
        let y = Move_dir ? imath.countLeftY(x, upDis) : imath.countRightY(x, upDis);
        let senceMoveX = last_store.x + (Move_dir ? -1 : 1) * Store_dis / 2;
        let senceMoveY = (Move_dir ? imath.countLeftY(senceMoveX, upDis) : imath.countRightY(senceMoveX, upDis));

        AddStoreToSence(x, y);
        AddNavToSence(0 + senceMoveX, NAV_STORE_DIS + senceMoveY);
        SenceMoving(senceMoveX, senceMoveY);
    }

    /**
     * 场景移动
     */
    function SenceMoving(offsetX, offsetY) {
        let x = page.cont.x - offsetX;
        let y = page.cont.y - offsetY;

        iAnime.moveSenceAnime(page.cont, x, y, Laya.Handler.create(this, function () {
            page.cont.x += offsetX;
            page.cont.y += offsetY;
            let len1 = Sence_Stores.length, len2 = Sence_Navs.length;

            for (let i = 0; i < len1; i++) {
                let ele = Sence_Stores[i];
                setItemXY(ele, ele.x - offsetX, ele.y - offsetY);
            }
            for (let i = 0; i < len2; i++) {
                let ele = Sence_Navs[i];
                setItemXY(ele, ele.x - offsetX, ele.y - offsetY);
            }
            setItemXY(Player, Player.x - offsetX, Player.y - offsetY);

            let lastStore = Sence_Stores[len1 - 1];
            let lastNav = Sence_Navs[len2 - 1];

            iAnime.fallAnime(lastStore.sprite, 0);
            iAnime.showAnime(lastNav.sprite, 400);

            updateCoinNum(COIN_UNIT);
            let nowStore = Sence_Stores[nowStoreIndex];
            if (nowStore.infoData.couponName) couponAnime(Player.sprite.x, Player.sprite.y);
            if (nowStore.infoData.info) showInfoBox(nowStore.infoData.info);

            setTimeout(function () {
                pressFlag = true;
            }, 1500);
        }));
    }

    /**
     * 显示商店信息
     */
    function showInfoBox(info) {
        let word = "";
        word += info.title + "\n";
        word += info.date + "\n";
        word += info.cont;
        updateStoreInfo(word);

        Laya.Tween.to(wordBox, {
            alpha: 1
        }, 300, Laya.Ease.linearIn);
    }

    /**
     * 隐藏商店信息
     */
    function hideInfoBox() {
        Laya.Tween.to(wordBox, {
            alpha: 0
        }, 300, Laya.Ease.linearIn);
    }

    /**
     * 入场的动画
     */
    function enterAnime(test) {
        if (test) {
            pressFlag = true;
            for (var i = 0; i < Sence_Stores.length; i++) {
                var ele = Sence_Stores[i];
                ele.sprite.alpha = 1;
            }
            Sence_Navs[0].sprite.alpha = 1;
            return;
        }


        for (var i = 0; i < Sence_Stores.length; i++) {
            var ele = Sence_Stores[i];
            iAnime.fallAnime(ele.sprite, 400 * i)
        }

        for (var i = 0; i < Sence_Navs.length; i++) {
            var ele = Sence_Navs[i];
            iAnime.showAnime(ele.sprite, 800 * (i + 1))
        }

        iAnime.RightMoveAnime(Player.sprite, 1200, PLAYER_STORE_DIS);
        setTimeout(function () {
            pressFlag = true;
        }, 1800);
    }

    /**
     * 更新金币数量
     * @param {*} num 
     */
    function updateCoinNum(num) {
        coinNum += num;
        coinNumText.text = coinNum;
    }

    /**
     * 更新优惠券数量
     * @param {*} num 
     */
    function updateCouponNum(num) {
        couponNum += num;
        couponNumText.text = couponNum;
    }

    /**
     * 更新商店信息
     */
    function updateStoreInfo(word) {
        storeInfo.text = word;
        page.infoScroll.refresh();
        page.infoScroll.scrollTo();
    }

    /**
     * 获得优惠券的动画
     */
    function couponAnime(x, y) {
        couponBox.alpha = 1;
        couponBox.x = x;
        couponBox.y = y - 100;

        couponAni.play(0, false);

        Laya.Tween.to(couponBox, {
            alpha: 0
        }, 500, Laya.Ease.linearIn, null, 1000);

        updateCouponNum(1);
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new gameUI();
        Laya.stage.addChild(page);
        page.cont.height = GameContH;
        page.cont.y = WindowH - page.cont.height;
        centerX = page.cont.width / 2;
        centerY = page.cont.height / 2;

        wordBox = page.wordBox;
        storeInfo = page.infoWord;
        coinNumText = page.coinNum;
        couponNumText = page.couponNum;
        couponBox = page.coupon;
        couponBox.zOrder = 100;
        couponAni = page.couponAni;

        creatNav();
        creatStore();
        creatPlayer();
    }

    /**
     * 创建玩家
     */
    function creatPlayer() {
        Player = new player(page.cont);
    }

    /**
     * 创建店铺
     */
    function creatStore() {
        let first = new store(page.cont);
        Stores.push(first);

        for (var i = 0; i < STORE_NUM - 1; i++) {
            let item = new store(page.cont);
            Stores.push(item);
        }
    }

    /**
     * 创建导航标签
     */
    function creatNav() {
        let first = new Nav(page.cont);
        Navs.push(first);

        for (var i = 0; i < STORE_NUM - 2; i++) {
            let item = new Nav(page.cont);
            Navs.push(item);
        }
    }

    /**
     * 添加标签去场景里面
     * @param {*} x 
     * @param {*} y 
     */
    function AddNavToSence(x, y) {
        let item = Navs.pop();

        setItemXY(item, x, y);
        item.changeSkin();

        item.FlipImg(Move_dir ? -1 : 1);

        Sence_Navs.push(item);

        for (var i = 0; i < Sence_Navs.length; i++) {
            var ele = Sence_Navs[i];
            ele.sprite.zOrder = (STORE_NUM - i) * 2 - 1;
        }

        if (Navs.length < 1) {
            let item = Sence_Navs.shift();
            item.sprite.alpha = 0;
            Navs.push(item);
        }
    }

    /**
     * 添加商店去场景里面
     * @param {*} x 
     * @param {*} y 
     */
    function AddStoreToSence(x, y) {
        let item = Stores.pop();

        setItemXY(item, x, y);
        if (storeDataCount < storeDatas.length) {
            item.infoData = storeDatas[storeDataCount];
            storeDataCount++;
        }
        else {
            item.infoData = storeDatas[imath.randomRange(0, storeDatas.length - 1)];
        }
        item.changeSkin();

        Sence_Stores.push(item);

        for (var i = 0; i < Sence_Stores.length; i++) {
            var ele = Sence_Stores[i];
            ele.sprite.zOrder = (STORE_NUM - i) * 2;
        }

        if (Stores.length < 1) {
            let item = Sence_Stores.shift();
            item.sprite.alpha = 0;
            Stores.push(item);
        }

        nowStoreIndex = Sence_Stores.length - 2;
    }

    /**
     * 设置对象的虚拟位置
     */
    function setItemXY(item, x, y) {
        item.x = x;
        item.y = y;

        setSpriteXY(item.sprite, x, y);
    }

    /**
     * 设置对象的位置
     */
    function setSpriteXY(sp, x, y) {
        sp.x = x + centerX;
        sp.y = y + centerY;
    }
}

var iGamePage = new gamePage();
