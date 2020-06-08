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

        let nowStore = Sence_Stores[nowStoreIndex];
        if (nowStore.infoData.ActiveTitle) showInfoBox(nowStore.infoData);
        API.addPV({ pagepath: "/pages/game" });
    }

    /**
     * 重置游戏
     */
    _self.resetGame = function (continueGame) {
        Store_dis = STORE_DIS;
        Move_dir = 0;
        Change_dir = false;
        pressFlag = false;
        recordFlag = false;
        pressTime = 0;
        nowStoreIndex = 0;
        Player.sprite.zOrder = 99;

        if (!continueGame) {
            coinNum = 0;
            CoinNum = 0;
            couponNum = 0;
            storeDataCount = 0;
            couponList = [];
        }

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
        // console.log("gameOver");
        iResultPage.show(coinNum);
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
        if (pressTime < PRESS_TIME / 3) pressTime += 17;
        else if (pressTime < PRESS_TIME / 2) pressTime += 17 * GAME_LEVEL * GAME_LEVEL;
        else pressTime += 17 * GAME_LEVEL * GAME_LEVEL * GAME_LEVEL;
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
        let CanStandW = Move_dir ? nextStore.infoData.TouchPoints.y : nextStore.infoData.TouchPoints.x;

        let Max = parseInt(nextStore.x + (Move_dir ? -1 : 1) * (nextStore.sprite.width / 2 - CanStandW));
        let Min = parseInt(nextStore.x + (Move_dir ? 1 : -1) * (nextStore.sprite.width / 2 - CanStandW));
        let x = (Move_dir ? -1 : 1) * 200 * time / (PRESS_TIME * GAME_LEVEL);

        //跳出屏幕
        // if ((!Move_dir && x > Max) || (Move_dir && x < Max)) {
        //     let x = nowStore.sprite.x + (Move_dir ? -1 : 1) * 1500;
        //     let y = nowStore.sprite.x - 1000;
        //     Player.jumpOver(x, y, gameOver);
        //     return;
        // }

        // x = 0;
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
            if ((!Move_dir && x > Max) || (Move_dir && x < Max)) Player.sprite.zOrder = nextStore.sprite.zOrder - 1;
            else if ((!Move_dir && x < Min) || (Move_dir && x > Min)) Player.sprite.zOrder = nowStore.sprite.zOrder - 1;
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
            if(imath.randomRange(0,1) == 1) iAnime.showAnime(lastNav.sprite, 400);

            updateCoinNum(1);
            let nowStore = Sence_Stores[nowStoreIndex];
            judgeCoinNumsCoupon(Player.sprite.x, Player.sprite.y);
            if (nowStore.infoData.ContainsCoupons > 0) requestStoreCoupon(nowStore.infoData, Player.sprite.x, Player.sprite.y);
            if (nowStore.infoData.ActiveTitle) showInfoBox(nowStore.infoData);

            setTimeout(function () {
                pressFlag = true;
            }, 1000);
        }));
    }

    /**
     * 判断一定数量的金币获取优惠券
     */
    function judgeCoinNumsCoupon(x, y) {
        for (var i = 0; i < AddUpCoinGiveCoupon.length; i++) {
            if (coinNum * CoinVal >= AddUpCoinGiveCoupon[i].needcoins) {
                let item = AddUpCoinGiveCoupon.shift();
                API.GetCouponsInfo({ ids: item.couponid,mobile:Mobile })
                    .then(function (res) {
                        if (res.Status == "ok") {
                            couponList.push(...res.Tag);
                            couponAnime(x, y, 1);
                        }
                    })
                return;
            }
        }
    }

    /**
     * 请求优惠券
     */
    function requestStoreCoupon(info, x, y) {
        API.GetCouponsInfoByStore({ storekey: info.StoreKey,mobile:Mobile })
            .then(function (res) {
                if (res.Status == "ok" && res.Tag.length > 0) {
                    couponList.push(...res.Tag);
                    couponAnime(x, y, res.Tag.length);
                }
            })
    }

    /**
     * 显示商店信息
     */
    function showInfoBox(info) {
        let word = "";
        word += info.ActiveTitle + "\n";
        word += info.ActiveDate + "\n";
        word += info.ActiveContents;
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
        iUtils.makeNum(coinNumText,coinNum * CoinVal)
        CoinNum = coinNum;
    }

    /**
     * 更新优惠券数量
     * @param {*} num 
     */
    function updateCouponNum(num) {
        couponNum += num;
        iUtils.makeNum(couponNumText,couponNum)
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
    function couponAnime(x, y, num) {
        couponBox.alpha = 1;
        couponBox.x = x;
        couponBox.y = y - 100;

        couponAni.play(0, false);

        Laya.Tween.to(couponBox, {
            alpha: 0
        }, 500, Laya.Ease.linearIn, null, 1000);

        updateCouponNum(num);
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

        if(iWX.systemInfo.windowWidth / iWX.systemInfo.windowHeight < 0.54) {
            page.coinBox.y = 180;
            page.wordBox.y = 180;
        }

        wordBox = page.wordBox;
        storeInfo = page.infoWord;
        coinNumText = page.coinNum;
        couponNumText = page.couponNum;
        couponBox = page.coupon;
        couponBox.zOrder = 100;
        couponAni = page.couponAni;

        updateCoinNum(0);
        updateCouponNum(0);

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
