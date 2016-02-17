
document.getElementById("p").addEventListener("dragstart",function(event){
event.dataTransfer.setData("Text", event.target.id);
});
document.getElementById("p").addEventListener("drag",function(event){
document.getElementById("demo").innerHTML = "The p element is being dragged";
});
document.getElementById("droptarget").addEventListener("dragover",function(event){
event.preventDefault();
});
document.getElementById("droptarget").addEventListener("drop",function(event){
event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
});


document.getElementById("droptarget1").addEventListener("dragover",function(event){
event.preventDefault();
});
document.getElementById("droptarget1").addEventListener("drop",function(event){
event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
});

