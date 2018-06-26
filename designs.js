$(function(){
    var colour = $("#colorPicker").val()
    
    //event listener for colour selection
    $("#colorPicker").on("input", function(){            
	colour = $(this).val();
	console.log(`Colour: ${colour}`);
    });
    //event listener for submit action.
    $("#sizePicker").submit(function(evt){
        evt.preventDefault();
        $(".tableRow").remove(); //remove any existing grid
        var height = Number($("#inputHeight").val());
        var width = Number($("#inputWeight").val());
        makeGrid(height, width);
	    
        //event listener for each click action
	//the event listener is placed within the callback function of the submit action
	//to ensure the table is created before the event listener.
        $("tr.tableRow td").click(function(){  
            $(this).css("background-color", colour);
        });
    });
});
function makeGrid(height, width) {
    table = $("#pixelCanvas");
    for (var i = 0; i < height; i++) {
	var row = $('<tr></tr>').attr("class", "tableRow").appendTo(table);
	for (var j = 0; j < width; j++) {
	    $('<td></td>').appendTo(row); 
	}		 		 
    }
}
