var utils = function () {
	var _self = this;

	/**
	 * 字符串截取
	 * @param {*} str			需要截取的字符串
	 * @param {*} len			截取长度
	 */
	_self.setString = function (str, len) {
		var strlen = 0;
		var s = "";
		for (var i = 0; i < str.length; i++) {
			if (str.charCodeAt(i) > 128) {
				strlen += 2;
			} else {
				strlen++;
			}
			s += str.charAt(i);
			if (strlen >= len) {
				return s + "...";
			}
		}
		return s;
	} //end func

	/**
     * 时间格式化
     */
	_self.dateFormat = function (date) {
		date = date.split("-");
		return parseInt(date[0]) + "年" + parseInt(date[1]) + "月" + parseInt(date[2]) + "日";
	} //end func

    /**
     * 深度复制
     */
	_self.deepClone = function (source) {
		function getClone(_source) {
			var clone = _self.dataType(_source) == "array" ? [] : {};
			for (var i in _source) {
				if (_self.dataType(_source[i]) != 'object' && _self.dataType(_source[i]) != 'array') clone[i] = _source[i];
				else clone[i] = getClone(_source[i]);
			} //end for
			return clone;
		} //edn func
		return getClone(source);
	} //end func

    /**
     * 判断是数组还是对象
     */
	_self.dataType = function (o) {
		if (typeof (o) === 'object') return Array == o.constructor ? 'array' : 'object';
		else return null;
	} //end func

	/**
	 * 生成数字
	 */
	_self.makeNum = function (box, num) {
		let nums = (num + "").split("");
		let h = box.height, w = parseInt(h * 53 / 80);
		box.removeChildren();
		for (let i = 0; i < nums.length; i++) {
			let item = new Laya.Image();
			item.source = Laya.Loader.getRes("images/nums/" + nums[i] + ".png");
			item.height = h;
			item.width = w;
			item.x = (w + 1) * i;
			item.y = 0;
			box.addChild(item);
		}
	}

	/**
	 * 常用正则
	 */
	_self.checkStr = function (str, type) {
		if (str && str != '') {
			type = type || 0;
			switch (type) {
				case 0:
					var reg = new RegExp(/^1[3-9]\d{9}$/); //手机号码验证
					break;
				case 1:
					var reg = new RegExp(/^[1-9]\d{5}$/); //邮政编码验证
					break;
				case 2:
					var reg = new RegExp(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/); //匹配EMAIL
					break;
				case 3:
					var reg = new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/); //匹配身份证
					break;
				case 4:
					var reg = new RegExp(/^\d+$/); //是否为0-9的数字
					break;
				case 5:
					var reg = new RegExp(/^[a-zA-Z\u0391-\uFFE5]*[\w\u0391-\uFFE5]*$/); //不能以数字或符号开头
					break;
				case 6:
					var reg = new RegExp(/^\w+$/); //匹配由数字、26个英文字母或者下划线组成的字符串
					break;
				case 7:
					var reg = new RegExp(/^[\u0391-\uFFE5]+$/); //匹配中文
					break;
				case 8:
					var reg = new RegExp(/^[a-zA-Z\u0391-\uFFE5]+$/); //不能包含数字和符号
					break;
				case 9:
					var reg = new RegExp(/^\d{6}$/); //6位验证码验证
					break;
				case 10:
					var reg = new RegExp(/^\d{4}$/); //4位验证码验证
					break;
			} //end switch
			if (reg.exec(str)) return true;
			else return false;
		} //end if
		else return false;
	}
}

var iUtils = new utils();