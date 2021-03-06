var wxFunc = function () {
    var _self = this;
    var isWX = Browser.onMiniGame ? true : false;
    var wx = Browser.window.wx;
    // var openId = "";
    var openId = "";
    var systemInfo, userInfo, auth;
    userInfo = {
        nickName: "",
        avatarUrl: "",
        gender: 1
    };

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
                            if (res.Status == "ok") {
                                API.SessionKey = res.Tag.seesionKey;
                                openId = res.Tag.openid;
                                _self.openId = openId;
                            }
                        })
                    } else {
                        console.log('登录失败！' + res.Msg)
                    }
                }
            })
            systemInfo = wx.getSystemInfoSync();
            _self.systemInfo = systemInfo;
        }
    }

    /**
     * 获取参数
     */
    _self.getLaunchOptionsSync = function () {
        if (isWX) return wx.getLaunchOptionsSync();
    }

    /**
     * alert
     */
    _self.alert = function (word, text, callback) {
        let confirmText = text || "确定";
        if (isWX) {
            wx.showModal({
                title: word,
                mask: true,
                confirmText: confirmText,
                success(res) {
                    if (res.confirm) {
                        if (callback) callback(true);
                    } else if (res.cancel) {
                        if (callback) callback(false);
                    }
                }
            })
        }
    }

    /**
     * 显示loading
     */
    _self.showLoading = function (word) {
        if (isWX) {
            wx.showLoading({
                title: word,
                mask: true
            })
        }
    }

    /**
     * 隐藏loading
     */
    _self.hideLoading = function () {
        if (isWX) {
            wx.hideLoading();
        }
    }

    /**
     * 设置微信存储
     * @param name key
     * @param val 值
     */
    _self.SetWxStorage = function (name, data) {
        if (isWX) {
            wx.setStorage({ key: name, data: val });
        }
    }

    /**
     * 读取微信存储
     * @param name key
     * @param success 成功的回调 返回参数res
     * @param fail 失败的回调 返回参数res
     */
    _self.GetWxStorage = function (name, success, fail) {
        if (isWX) {
            wx.getStorage({
                key: name,
                success: function (res) {
                    if (success) success(res);
                },
                fail: function (res) {
                    if (fail) fail(res);
                }
            })
        }
    }

    /**
     * 初始化wx的授权按钮 暂时全屏显示 点一下就会授权成功
     */
    _self.wxCreateUserInfo = function (callback) {
        if (isWX) {
            if (wx.createUserInfoButton) {
                // console.log(systemInfo)
                var button = wx.createUserInfoButton({
                    type: 'image',
                    image: 'images/common/blank.png',
                    // text: 'test',
                    style: {
                        // backgroundColor:"#ffffff",
                        left: 174 / 2,
                        top: systemInfo.screenHeight / 2 + 325 / 2,
                        width: 450 / 2,
                        height: 120 / 2
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
                        if(openId){
                            button.destroy();
                            callback();
                        }
                        else {
                            wx.showToast({
                                title:"游戏载入中...",
                                icon:"none",
                                duration:1000
                            })
                        }
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
    _self.shareInit = function (word) {
        if (isWX) {
            wx.onShareAppMessage(function () {
                return { title: word, imageUrl: "images/common/share.jpg" };
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
                imageUrl: "images/common/share.jpg"
            });
        }
    }

    /**
     * 生成分享到朋友圈的图片
     */
    _self.makeCanvas = function (w, h) {
        if (isWX) {
            const canvas = wx.createCanvas();
            canvas.width = w;
            canvas.height = h;
            // const context = canvas.getContext('2d');
            return canvas;
        }
    }

    /**
     * 添加图片
     */
    _self.addImgToCanvas = function (canvas, context, info) {
        if (isWX) {
            return new Promise((resolve, reject) => {
                const img = wx.createImage();
                img.src = info.url;
                img.onload = () => {
                    context.drawImage(img, info.x, info.y, info.width, info.height);
                    resolve();
                }
            })
        }
    }

    /**
     * 添加文字
     */
    _self.addWordToCanvas = function (context, info) {
        context.font = info.size + "px 微软雅黑";
        context.fillText(info.word, info.x, info.y);
    }

    /**
     * 保存海报
     */
    _self.savePost = function (canvas) {
        if (isWX) {
            canvas.toTempFilePath({
                success: (res) => {
                    wx.saveImageToPhotosAlbum({
                        filePath: res.tempFilePath,
                        success: () => {
                            _self.alert("保存图片到相册成功，赶紧去分享吧");
                        },
                        fail: (err) => {
                            _self.alert("保存图片到相册失败");
                        }
                    })
                }
            })
        }
    }


    /**
     * 显示微信的键盘
     */
    _self.showKeyboard = function () {
        if (isWX) {
            wx.showKeyboard({
                defaultValue: "",
                maxLength: 16,
                multiple: false,
                confirmHold: true,
                confirmType: "完成"
            })
        }
    }

    _self.gotoOtherApp = function(appid){
        if(isWX){
            wx.navigateToMiniProgram({
                appId:appid
            });
        }
    }

}
