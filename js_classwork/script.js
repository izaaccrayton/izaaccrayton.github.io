function countAll() {
    var nodelist =  document.querySelectorAll("p");
    alert('There are ' + nodelist.length + ' paragraph tags on the page');
}

function countSectionOne() {
    var div = document.getElementById("section-1");
    var nodelist = div.getElementsByTagName("P");
    alert('There are ' + nodelist.length + ' Elements');
}

function countSectionTwo() {
    var div = document.getElementById("section-2");
    var nodelist = div.getElementsByTagName("P");
    alert('There are ' + nodelist.length + ' Elements');
}