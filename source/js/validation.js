(function() {
	var me = {};
	me.isEmail = function (email) {
		var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		return re.test(email);
	}

	me.isNumber = function(number) {
		var re = /^\d+$/;
		return re.test(number);
	};

	me.isNotEmpty = function(str) {
		return Boolean(str);
	}

	window.jsvalidation = me;
}());