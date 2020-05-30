var API = new importAPI();

function importAPI() {
    var _self = this;

    _self.SessionKey = "";

    var requestDomain = "https://wechat.dhteam.net/mazda/ajax/getdata.ashx";

    function _Ajax(opts) {
        if (iWX.isWX) {
            return WxAjax(opts.API, opts.data);
        }
        else {
            return new Promise((resolve, reject) => {
                normalAjax(opts.API, opts.data)
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
    function WxAjax(method, data) {
        return new Promise((resolve, reject) => {
            if (_self.SessionKey) data.SessionKey = _self.SessionKey;

            iWX.wx.request({
                url: requestDomain + method,
                data: data,
                method: "POST",
                header: {
                    'content-type': "application/x-www-form-urlencoded"
                },
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
    function normalAjax(method, data) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('post', requestDomain + method);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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
            API: "Login",
            data: data
        });
    }//end func

}//end import