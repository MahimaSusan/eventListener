var Currentyear = 2016;
var year = document.getElementById("year");
var x = document.getElementById("myBtn");
document.getElementById("submit").addEventListener("click", function(event) {
    myFunction(Currentyear, myform.year.value);
    document.getElementById("head").innerHTML = "Name";
    document.getElementById("demo").innerHTML = myform.name.value;
    document.getElementById("head1").innerHTML = "Year of Joining";
    event.preventDefault();
    document.getElementById("demo1").innerHTML = myform.year.value;
    document.getElementById("head2").innerHTML = "Experience";
});

function myFunction(a, b) {
    var result = a - b;
    if (result < 0) {
        alert("Enter Valid Year, experience can't be negative");
    }
    document.getElementById("demo2").innerHTML = result;
}
document.getElementById("name").addEventListener("select", function() {
    alert("name selected");
});
document.getElementById("submit_form").addEventListener("click", function() {
    alert("submitted" + " : " + myform.name.value);
});
document.getElementById("namediv").addEventListener("click", function() {
    alert("name div clicked");
}, false);
document.getElementById("yeardiv").addEventListener("click", function() {
    alert("year div clicked");
}, false);
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", mouseOver);
x.addEventListener("click", clickFunction);
x.addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("demo").innerHTML = "Moused over!<br>";
}

function clickFunction() {
    alert("clicked");
}

function mouseOut() {
    document.getElementById("demo").innerHTML = "Moused out!<br>";
}