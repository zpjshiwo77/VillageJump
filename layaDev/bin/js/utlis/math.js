var importantMath = function(){
    var _self = this;

    /**
     * 获得范围内随机整数
     */
	_self.randomRange = function (min, max) {
		var randomNumber;
		randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		return randomNumber;
	} //end func 

    /**
     * 浮点数的加法
     */
    _self.FloatPointAdd = function(a,b,bit){
        var digit = bit || 10000;
        return (Math.floor(a * digit) + Math.floor(b * digit)) / digit;
    }//end func

	/**
     * 角度转换
     */
	_self.convertAngle = function(deg){
		return Math.PI / 180 * deg;
	}//end func

	/**
     * 两点间距离
     */
	_self.PointDistance = function(x1,y1,x2,y2){
		return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	}//end func

    /**
     * 计算右边Y轴的值
     */
    _self.countRightY = function(x,offset){
        let oft = offset || 0;
        return parseInt(-197 / 338 * x)+oft;
    }

    /**
     * 计算左边Y轴的值
     */
    _self.countLeftY = function(x,offset){
        let oft = offset || 0;
        return parseInt(197 / 338 * x)+oft;
    }
    
    /**
     * 判断是否再两个数之间
     */
    _self.judgeInTwoNums = function(val,nums){
        let min,max;
        if(nums[0] > nums[1]) {
            min = nums[1];
            max = nums[0];
        }
        else{
            min = nums[0];
            max = nums[1];
        }
        return (val >= min && val <= max);
    }
}

var imath = new importantMath();