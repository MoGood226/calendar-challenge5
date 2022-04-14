$(document).ready(function () {
    // displaying the current date with jquery method
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
    // on click function save whatever you put into the textbox and time 
    $(".sv").on("click", function () {
        // using this function to display the variables and then save it into the local storage 
        var text = $(this).siblings(".textbby").val();

        var time = $(this).parent().attr("id");
        // sets time and text to local storage
        localStorage.setItem(time, text);
    })
    // gets the text and time from localStorage to save it and have it display when you'd refresh the page.
    $("#9 .textbby").val(localStorage.getItem("9AM"));
    $("#10 .textbby").val(localStorage.getItem("10AM"));
    $("#11 .textbby").val(localStorage.getItem("11AM"));
    $("#12 .textbby").val(localStorage.getItem("12PM"));
    $("#1 .textbby").val(localStorage.getItem("1PM"));
    $("#2 .textbby").val(localStorage.getItem("2PM"));
    $("#3 .textbby").val(localStorage.getItem("3PM"));
    $("#4 .textbby").val(localStorage.getItem("4PM"));
    $("#5 .textbby").val(localStorage.getItem("5PM"));

});