/*
$(document).ready(function(){

    $.ajax({
	type: "GET",
	url: "./ol2.csv",
	dataType: "text",
	success: function(data) {processData(data);}
    });
});
*/

function getCSV(csv){
    $.ajax({
	type: "GET",
	url: "./csv/" + csv,
	dataType: "text",
	success: function(data) {
	    processData(data);
	}
    });
}

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',')
    var result;
    var name;

    var headings = entries.splice(0,7);
    for (var j = 0; j < entries.length; j++){
	for (var i = 0; i<7; i++){
	    //console.log(headings[i]);
	    if (i == 0) {
		name = headings[i];
	    }
	    if (i == 1) {
		//console.log(headings[i]);
		result = headings[i];
	    } 
	};
    };
    var sek = document.querySelector('#SEK');
    var du = document.querySelector('#du');
    var value = sek.value
    du.textContent = "Du kan köpa " + Math.floor(sek.value / result) + " enheter av: " + name;  
};

var node = document.querySelector('#hej');
node.addEventListener('click', function(event){
    console.log('Clicked me!');
    getCSV(document.querySelector('#alkoholTyp').value);
});
