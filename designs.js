$(function(){
    //event listener for submit action.
    $("#sizePicker").submit(function(evt){
        evt.preventDefault();
        $(".tableRow").remove(); //remove any existing grid
        var height = Number($("#inputHeight").val());
        var width = Number($("#inputWeight").val());
        makeGrid(height, width);
        var colour = "#000000";
        //event listener for colour selection
        $("#colorPicker").on("input", function(){            
            colour = $(this).val();
            console.log(`Colour: ${colour}`);
        });
        //event listener for each click action
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
