//常量的定义
const Browser = Laya.Browser;
const WebGL = Laya.WebGL;
const Loader = Laya.Loader;
const Stat = Laya.Stat;

const STORE_NUM = 7;                            //显示的商店总数量
const STORE_DIS = 320;                          //跳到商店中心点的位置
const STORE_DIS_MIN = 280, STORE_DIS_MAX = 410; //商店间最大，最小的距离
const PRESS_TIME = 1000;                        //按压的时间
const JUMP_TIME = 500;                          //跳的时间
const PLAYER_STORE_DIS = -150;                  //玩家与商店的垂直距离
const NAV_STORE_DIS = 50;                       //导航与商店的垂直距离
const SENCE_MOVE_TIME = 500;                    //场景移动的时间
const STORE_WIDTH = 160;                        //块的可站立宽度
const PAGE_TRF_TIME = 300;                      //页面过渡时间

//变量
let iWX;

let BgPageY = 0, WindowH = 0;
let GameContH = 0;

let loadStoreFlag = false;
let channelfrom = "";

let CoinNum = 0,couponList = [], CoinVal = 0, CoinToScores = 0;
let GAME_LEVEL = 2;                             //游戏等级

let storeDatas = [];
let storeDataCount = 0;

let BgmUrl = "https://wechat.dhteam.net/osm/audio/bgm.mp3";

let PlayKey = "";                               //关键字符
let ContinuePlayGame = false;                   //是否继续游戏
let AddUpCoinGiveCoupon = [];                   //一定积分以后可获得的优惠券
let CurrentCoins = 0;                           //当前用户的金币
let CurrentScores = 0;                          //当前用户的积分
let IsMember = false;                           //当前用户是否是会员
let Mobile = "";                                //当前用户的电话

let storeData = {
    "Id": 1,
    "StoreKey": "093c39d01b3d486db526efdd7ab3e630",
    "StoreName": "太古里一号店",
    "StoreDesc": null,
    "StoreSort": 1,
    "StoreImgurl": "https://restest.bestcake.com/tgl/34aa54591c9144939653a57ebaca5c22.png",//墩子素材
    "CreateTime": "2020-05-28T20:51:51.63",
    "ActiveTitle": "太古里一号店",//活动标题
    "ActiveDate": "2020-05-28至2020-05-31",//活动时间
    "ActiveContents": "所有门店9.5折",//活动内容
    "IsImportant": 1,
    "ContainsCoupons": 0,//是否包含优惠券
    "ContainsCoin": 0,
    "CoinCount": 0,
    "State": 1
}