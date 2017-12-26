(function() {
	var selectorform = document.querySelector('.form');
	var openFormButton = document.querySelector('.arrow-down');
	var nav = document.querySelector('.nav');

	if(openFormButton){
		openFormButton.addEventListener('click', function() {
			jsform.open();
		});
	}

	if(selectorform) {
		selectorform.addEventListener('submit', function(e){
			e.preventDefault();
			if(jsform.isValid()) {
				console.log("good");
			} else {
				console.log("not good");
			}
		});
	}

	if(nav) {
		nav.addEventListener('click', function(e) {
			e.preventDefault();
			var target = e.target;
			if (target.tagName.toLowerCase() !== 'a') {
				return;
			}
			jsnavigation.toggleToActiveLink(target);
		})
	}

		
}());