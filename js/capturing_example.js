
document.getElementById("d1").addEventListener("click", function() {
    this.style.backgroundColor = 'grey';
    alert("d1 clicked");
    this.style.backgroundColor = '';
},true);
document.getElementById("d2").addEventListener("click", function() {
    this.style.backgroundColor = 'grey'
    alert("d2 clicked");
    this.style.backgroundColor = '';
},true);
document.getElementById("d3").addEventListener("click", function(event) {
    this.style.backgroundColor = 'grey';
    alert("d3 clicked");
    this.style.backgroundColor = '';
},true);
/*document.getElementById("d3").addEventListener("click",function(event){
	event.stopPropagation();
});*/