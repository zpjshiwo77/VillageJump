var API = new importAPI();

function importAPI() {
    var _self = this;

    _self.SessionKey = "";

    var requestDomain = "https://happycs.bestcake.com/api/";

    function _Ajax(opts) {
        if (iWX.isWX) {
            return WxAjax(opts.API, opts.data, opts.method);
        }
        else {
            return new Promise((resolve, reject) => {
                normalAjax(opts.API, opts.data, opts.method)
                    .then((res) => {
                        res = eval('(' + res + ')');
                        if (res.errcode == 0) resolve(res);
                        else reject(res);
                    })
            })
        }
    }

    /**
     * wx的ajax方法
     * @param method 
     * @param data 
     */
    function WxAjax(Api, data, method) {
        return new Promise((resolve, reject) => {
            let header = {
                'content-type': "application/x-www-form-urlencoded"
            };
            if (_self.SessionKey) data.SessionKey = _self.SessionKey;

            if (method == "POST") {
                let signature = iEncryption.getMD5Staff(data);
                header = {
                    'content-type': "application/json",
                    'timestamp': iEncryption.timestamp,
                    'nonce': iEncryption.nonce,
                    'signature': signature
                }
            }

            iWX.wx.request({
                url: requestDomain + Api,
                data: data,
                method: method,
                header: header,
                dataType: 'json',
                success: (res) => {
                    resolve(res.data);
                },
                fail: (err) => {
                    reject(err);
                }
            });
        })
    }

    /**
     * 普通的ajax方法
     * @param method 
     * @param data 
     */
    function normalAjax(Api, data, method) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('post', requestDomain + Api);
            xhr.setRequestHeader("Content-type", method == "POST" ? "application/json": "application/x-www-form-urlencoded");
            let idata = "";
            for (let key in data) {
                idata += key + "=" + data[key] + "&";
            }
            idata = idata.substring(0, idata.length - 1);
            xhr.send(idata);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(xhr.responseText)
                }
                else reject();
            };
        })
    }

	/**
     * 登录的方法
     * @param {*} data 参数
     */
    _self.wxLogin = function (data) {
        return _Ajax({
            API: "Authorize/Getweixinopenid",
            data: data,
            method: "GET"
        });
    }//end func

    /**
     * 获取活动规则
     */
    _self.getRule = function () {
        return _Ajax({
            API: "game/GetGameRules",
            data: {},
            method: "GET"
        });
    }//end func

    /**
     * 获取隐私条款
     */
    _self.getPrivacy = function () {
        return _Ajax({
            API: "game/GetRules",
            data: {},
            method: "GET"
        });
    }//end func

    /**
     * 获取店铺优惠券
     */
    _self.GetCouponsInfoByStore = function (data) {
        return _Ajax({
            API: "game/GetCouponsInfoByStore",
            data: data,
            method: "GET"
        });
    }//end func

    /**
     * 监测，pv
     * @param {*} data 参数
     */
    _self.addPV = function (data) {
        data.openid = iWX.openId;
        return _Ajax({
            API: "view/AddPV",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 监测，uv
     * @param {*} data 参数
     */
    _self.addUV = function (data) {
        data.openid = iWX.openId;
        return _Ajax({
            API: "view/adduv",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 添加用户
     * @param {*} data 参数
     */
    _self.addUser = function (data) {
        return _Ajax({
            API: "game/StartGame",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 继续游戏
     * @param {*} data 参数
     */
    _self.ContinuePlayGame = function (data) {
        return _Ajax({
            API: "game/ContinuePlayGame",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 扣除会员积分
     * @param {*} data 参数
     */
    _self.ReduceScores = function (data) {
        return _Ajax({
            API: "game/ReduceScores",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 获取验证码
     * @param {*} data 参数
     */
    _self.SendPhoneCode = function (data) {
        return _Ajax({
            API: "game/SendPhoneCode",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 登录注册
     * @param {*} data 参数
     */
    _self.login = function (data) {
        return _Ajax({
            API: "game/Login",
            data: data,
            method: "POST"
        });
    }//end func

    /**
     * 游戏结束记录
     * @param {*} data 参数
     */
    _self.EndGame = function (data) {
        return _Ajax({
            API: "game/EndGame",
            data: data,
            method: "POST"
        });
    }//end func

}//end import