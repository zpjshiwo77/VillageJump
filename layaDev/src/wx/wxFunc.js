var wxFunc = function () {
    var _self = this;
    var isWX = Browser.onMiniGame ? true : false;
    var wx = Browser.window.wx;
    var openId = "";
    var systemInfo,userInfo,auth;

    _self.isWX = isWX;
    _self.wx = wx;
    _self.openId = openId;
    _self.systemInfo = systemInfo;
    _self.userInfo = userInfo;
    _self.auth = auth;

    /**
     * 登录
     */
    _self.login = function () {
        if (isWX) {
            wx.login({
                success(res) {
                    if (res.code) {
                        API.wxLogin({ code: res.code }).then((res) => {
                            if (res.errcode == 0) {
                                API.SessionKey = res.result.SessionKey;
                                openId = res.result.OpenID;
                                _self.openId = openId;
                            }
                        })
                    } else {
                        console.log('登录失败！' + res.errMsg)
                    }
                }
            })
        }
    }

    /**
     * 设置微信存储
     * @param name key
     * @param val 值
     */
    _self.SetWxStorage = function(name,data){
        if(isWX){
            wx.setStorage({key:name,data:val});
        }
    }

    /**
     * 读取微信存储
     * @param name key
     * @param success 成功的回调 返回参数res
     * @param fail 失败的回调 返回参数res
     */
    _self.GetWxStorage = function(name,success,fail){
        if(isWX){
            wx.getStorage({
                key:name,
                success:function(res){
                    if(success) success(res);
                },
                fail:function(res){
                    if(fail) fail(res);
                }
            })
        }
    }

    /**
     * 初始化wx的授权按钮 暂时全屏显示 点一下就会授权成功
     */
    _self.wxCreateUserInfo = function () {
        if (isWX) {
            if (wx.createUserInfoButton) {
                systemInfo = wx.getSystemInfoSync();
                _self.systemInfo = systemInfo;
                var button = wx.createUserInfoButton({
                    type: 'image',
                    image: 'common/blank.png',
                    // text: 'test',
                    style: {
                        // backgroundColor:"#ffffff",
                        left: 0,
                        top: 0,
                        width: systemInfo.screenWidth,
                        height: systemInfo.screenHeight
                    }
                })
                button.onTap((res) => {
                    if (res.errMsg == 'getUserInfo:fail auth deny') {
                        this.wx.showModal({
                            title: '提示',
                            content: '请同意授权才能继续游戏哦',
                            showCancel: false
                        });
                    } else {
                        userInfo = res.userInfo
                        auth = true;
                        _self.userInfo = userInfo;
                        _self.auth = auth;
                        button.destroy();
                    }
                })
            }
        }
    }

    /**
     * 检查小游戏更新
     */
    _self.checkUpdateGame = function () {
        if (isWX) {
            if (wx.getUpdateManager) {
                let updateManager = wx.getUpdateManager();
                updateManager.onCheckForUpdate(function (res) {
                    if (res.hasUpdate) {
                        wx.showLoading({
                            title: '升级中',
                            mask: true
                        })
                        updateManager.onUpdateReady(function (res) {
                            wx.hideLoading();
                            wx.showModal({
                                title: '升级提示',
                                content: '新版本已经准备好，是否重启应用？',
                                success: function (res) {
                                    if (res.confirm) {
                                        updateManager.applyUpdate()
                                    }
                                }
                            });
                        });
                        updateManager.onUpdateFailed(function () {
                            wx.hideLoading();
                            wx.showModal({
                                title: '升级失败',
                                content: '新版本下载失败，请检查网络！',
                                showCancel: false
                            });
                        })
                    }
                })
            }
        }
    }

    /**
     * 分享初始化
     * @param word 分享文案
     */
    _self.shareInit = function(word){
        if(isWX){
            wx.onShareAppMessage(function(){
                return {title:word, imageUrl:"share.jpg"};
            });
            wx.showShareMenu();
        }
    }

    /**
     * 分享游戏
     */
    _self.shareTheGame = function (word) {
        if (isWX) {
            wx.shareAppMessage({
                title: word,
                imageUrl: "share.jpg"
            });
        }
    }
}

var iWX = new wxFunc();