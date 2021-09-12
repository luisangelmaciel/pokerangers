var ranger = $('#yellow-ranger');
    var button = $('.morphin-time');
		var animate = $('.morph-time');
		var animateback = $('.morph-back');
		var morphed = true;

		ranger.on('click', function() {
			if (morphed) {
				animate.each(function(i, el) {
					el.beginElement();		  
				});
				morphed = false;
			} else {
				animateback.each(function(i, el) {
					el.beginElement();		  
			 	});
				morphed = true;
			}
		});

    button.on('click', function() {
			if (morphed) {
				animate.each(function(i, el) {
					el.beginElement();		  
				});
				morphed = false;
			} else {
				animateback.each(function(i, el) {
					el.beginElement();		  
			 	});
				morphed = true;
			}
		});