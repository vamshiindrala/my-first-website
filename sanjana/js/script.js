// Your js goes here
function popupFunction(){
	var name = prompt("Please enter your name", "");
	if (name != null) {
        document.getElementById("alert").innerHTML =
        "Hello " + name + "!" + " Welcome to my page. Refer to the below tutorial to learn HTML" ;
    }
}

function imgFunction() {
	window.open("viewnetworktraffic.html");
}