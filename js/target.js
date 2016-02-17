document.getElementById("d1").addEventListener("click", function(e) {
    var target = e.target;
    this.style.backgroundColor = 'grey';
    alert("target = " + target.id + ",this=" + this.id);
    this.style.backgroundColor = '';
});
document.getElementById("d2").addEventListener("click", function(e) {
    var target = e.target;
    this.style.backgroundColor = 'grey';
    alert("target = " + target.id + ",this=" + this.id);
    this.style.backgroundColor = '';
});
document.getElementById("d3").addEventListener("click", function(e) {
    var target = e.target;
    this.style.backgroundColor = 'grey';
    alert("target = " + target.id + ",this=" + this.id);
    this.style.backgroundColor = '';
    /*e.stopPropagation();*/
});