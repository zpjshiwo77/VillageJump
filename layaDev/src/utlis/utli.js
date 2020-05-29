var utils = function(){
    var _self = this;

	/**
	 * 字符串截取
	 * @param {*} str			需要截取的字符串
	 * @param {*} len			截取长度
	 */
	_self.setString = function(str, len) {
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
	_self.deepClone = function(source) {
		function getClone(_source) {
			var clone = _self.dataType(_source) == "array" ? [] : {};
			for(var i in _source) {
				if(_self.dataType(_source[i]) != 'object' && _self.dataType(_source[i]) != 'array') clone[i] = _source[i];
				else clone[i] = getClone(_source[i]);
			} //end for
			return clone;
		} //edn func
		return getClone(source);
	} //end func

    /**
     * 判断是数组还是对象
     */
	_self.dataType = function(o) {
		if(typeof(o) === 'object') return Array == o.constructor ? 'array' : 'object';
		else return null;
	} //end func
}

var iUtils = new utils();