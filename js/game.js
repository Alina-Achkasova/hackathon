$( document ).ready(function() {
	var result_question = [
        ['circle','plus', 'triangle', 'equals', 'star'],
        ['circle','minus','triangle', 'equals', 'star'],
        ['triangle','plus', 'circle', 'equals', 'star']
    ];
	
	function makeUL(arrayOfShapes) {
	    var $list = $('<ul></ul>');
	    $list.addClass("questionField no-padding");

	    for (var i = 0; i < arrayOfShapes.length; i++) {
	        var $item = $('<li></li>');

	        for (var j = 0; j < arrayOfShapes[i].length; j++) {
	        	var $image = $("<img/>");
	        	$image.addClass(arrayOfShapes[i][j]);
	        	$image.attr("src", "img/" + arrayOfShapes[i][j] + ".png");
	        	$image.attr("width", 128);
	        	arrayOfShapes[i][j] = $image;
	        	$image.appendTo($item);
	        }
	  
	        $item.appendTo($list);
	    }

	    return $list;
	}

	makeUL(result_question).appendTo('#riddle');
	
	var shapes = ['circle', 'triangle', 'star'];
	var answers = [6, 5, 4];
	var i = 0; 
	shapes.forEach(function(item){ 
		var $input = $('input[name = ' + item + ']');
		function checkTheAnswer(){
			if ($input.val() == answers[i]) {
			 	$input.hide();
			 	i++;
			}
		}

		$input.on('blur', checkTheAnswer);
	});

});