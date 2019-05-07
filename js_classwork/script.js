function countAll() {
    var nodelist =  document.querySelectorAll("p");
    alert('There are ' + nodelist.length + ' paragraph tags on the page');
}

function countSectionOne() {
    var div = document.getElementById("section-1");
    div.style.backgroundColor = "red"
    var nodelist = div.getElementsByTagName("P");
    
    document.getElementById("state").innerHTML = nodelist.length;
}

function countSectionTwo() {
    var div = document.getElementById("section-2");
    div.style.backgroundColor = "blue"
    var nodelist = div.getElementsByTagName("P");
    
    document.getElementById("state").innerHTML = nodelist.length;
}

function whiteOut(obj) {
    obj.style.backgroundColor = "white";
}