$(document).ready(function(){

$('#append, #prepend, #replace').on('click', function(e) {
var el = $(e.currentTarget); 
var action = el.attr('id');
var content = $('#text').val();    

    if(action == "append") {
        $('#main').append(content);
        console.log("Appended", content);
    }

    else if (action == "prepend") {
        $('#main').prepend(content);
        console.log("Prepended", content);

    }

    else if (action == "replace") {
        $('#main').replace(content);
        console.log("Sucessfullt replaced", content);
    }
    
    





})












})