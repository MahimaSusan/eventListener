var items = document.querySelectorAll(".divs");
for (var i = 0; i < items.length; i++) {
    var el = items[i];
    //el.addEventListener("click", doSomething, true);//capturing
    el.addEventListener("click", doSomething, false); //bubbling
}

function doSomething(e) {
    this.style.backgroundColor = "yellow";
    alert(e.currentTarget.id);
    this.style.backgroundColor = '';
}
document.getElementById("d3").addEventListener("click", function(event) {
    event.stopPropagation();
});