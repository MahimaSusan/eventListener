document.getElementById("myform").addEventListener("submit", function() {
    alert("form" + " :  " + myform.data.value);
});
var x = document.getElementById("name");
x.addEventListener("select", function() {
    alert("this is an example of onSelect");
});
x.addEventListener("blur",function(){
    x.value = x.value.toUpperCase();
});
x.addEventListener("focus",function(){
	x.style.backgroundColor = "yellow";
});