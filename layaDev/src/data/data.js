//常量的定义
const Browser = Laya.Browser;
const WebGL = Laya.WebGL;
const Loader = Laya.Loader;
const Stat = Laya.Stat;

const STORE_NUM = 7;                            //显示的商店总数量
const STORE_DIS = 320;                          //跳到商店中心点的位置
const STORE_DIS_MIN = 280,STORE_DIS_MAX = 400;  //商店间最大，最小的距离
const PRESS_TIME = 1000;                        //按压的时间
const JUMP_TIME = 500;                          //跳的时间
const PLAYER_STORE_DIS = -150;                  //玩家与商店的垂直距离
const NAV_STORE_DIS = 50;                       //导航与商店的垂直距离
const SENCE_MOVE_TIME = 500;                    //场景移动的时间
const STORE_WIDTH = 160;                        //块的可站立宽度
const COIN_UNIT = 1;                            //成功一次的金币数量

//变量
let BgPageY = 0, WindowH = 0;
let GameContH = 0;

let coinNums = 0,couponList = [];

let storeDatas = [];
let storeDataCount = 0;

let storeData = {
    id:0,
    src:'images/stores/1.png',
    couponName:"星巴克券",
    info:{
        title:"测试活动",
        date:"2020.05.20",
        cont:"测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容测试活动内容"
    }
}