
// this code below let you click on the button and it will change the background grey with every other row.

$("button").click(function () {
    $("tr:even").addClass("trColor");
})