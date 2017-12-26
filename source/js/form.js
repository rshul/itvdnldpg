(function(){
	var me = {};
	var form = document.querySelector('.form-container');
	var closeButton = null;

	function onClose(e) {
		
		me.close();
		closeButton.removeEventListener('click', onClose);
	}

	me.open = function() {
		form.classList.remove('is-hidden');
		closeButton = document.querySelector('.form__close-button');
		closeButton.addEventListener('click', onClose);
	};

	me.close = function() {
		form.classList.add('is-hidden');
	};

	me.isValid = function() {

		if (!me.isAllCompleted(document.querySelectorAll('[data-valid="required"]'))){
			console.log("fields required");
			return false;
		} else if (!jsvalidation.isEmail(document.querySelector('[data-email]').value)) {
			console.log('wrong email');
			return false;
		} else if (!jsvalidation.isNumber(document.querySelector('[data-number]').value)) {
			console.log('wrong number');
			return false;
		}

		return true;
	}

	me.isAllCompleted = function(data) {
		var result = true;

		for(var i = 0; i < data.length; i++) {
			if(!jsvalidation.isNotEmpty(data[i].value)) {
				result = false;
				break;
			}
		}

		return result;
	}

	window.jsform = me;

}());