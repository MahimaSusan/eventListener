document.getElementById("d1").addEventListener("click",function(){
	this.style.backgroundColor='yellow';
	alert("d1 clicked");
    this.style.backgroundColor='';
});
document.getElementById("d2").addEventListener("click",function(){
	this.style.backgroundColor='yellow'
	alert("d2 clicked");
	this.style.backgroundColor='';
});
document.getElementById("d3").addEventListener("click",function(event){
	this.style.backgroundColor='yellow';
	alert("d3 clicked");
	this.style.backgroundColor='';

});
/*document.getElementById("d3").addEventListener("click",function(event){
	event.stopPropagation();
});*/