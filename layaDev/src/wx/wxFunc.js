var wxFunc = function () {
    var _self = this;
    var isWX = Browser.onMiniGame ? true : false;
    var wx = Browser.window.wx;
    // var openId = "";
    var openId = "omFZq5N4I2_M1GTxAUYer4rQjRpU";
    var systemInfo, userInfo, auth;
    userInfo = {
        nickName: "测试",
        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIvaoPfI1GfVuibg0Ifr2J1XQ0IqlrZ0FZdNJyia790RRe0VGplg1SjNB4oJlFdwSUUILSXBMQDVOwg/132",
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
        }
    }

    /**
     * alert
     */
    _self.alert = function (word, callback) {
        if (isWX) {
            wx.showModal({
                title: word,
                mask: true,
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
                systemInfo = wx.getSystemInfoSync();
                _self.systemInfo = systemInfo;
                // console.log(systemInfo)
                var button = wx.createUserInfoButton({
                    type: 'image',
                    image: 'images/common/blank.png',
                    // text: 'test',
                    style: {
                        // backgroundColor:"#ffffff",
                        left: 98 / systemInfo.pixelRatio,
                        top: systemInfo.screenHeight / 2 - 180 / systemInfo.pixelRatio,
                        width: 320 / systemInfo.pixelRatio,
                        height: 360 / systemInfo.pixelRatio
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
                        callback();
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
    _self.shareGameToTimeline = function () {
        if (isWX) {
            const canvas = wx.createCanvas();
            canvas.width = 750;
            canvas.height = 1624;
            const context = canvas.getContext('2d');

            context.fillStyle = '#fff4d6';
            context.fillRect(0, 0, 750, 1624);
            // context.draw();

            canvas.toTempFilePath({
                success: (res) => {
                    wx.saveImageToPhotosAlbum({
                        filePath: res.tempFilePath,
                        success: () => {
                            console.log("保存图片到相册成功");
                        },
                        fail: (err) => {
                            console.log("保存图片到相册失败 : " + err);
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

}
