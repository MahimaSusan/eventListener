document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = Math.random();
}
document.getElementById("myBtn").addEventListener("click",removeHandler);

function removeHandler() {
    document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}