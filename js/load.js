window.addEventListener("load",function(){
	  alert("This message was triggered from the onload event");
});
window.addEventListener("resize", function() {
    document.getElementById("demo").innerHTML = "abcd";
});