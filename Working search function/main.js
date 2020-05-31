"use strict"

var search = document.getElementById("search");
var area = document.getElementsByClassName("myul");
var all = document.getElementById("all");
var zet = document.getElementsByClassName("zet");

function searching() {
    var searchValue = search.value;
    console.log (searchValue);
    alert (searchValue);
    return searchValue;
}

search.addEventListener("change", modify);

function modify() {

    var toShow = [];

    for (var i = 0; i< area.length; i++)
        {   
        
          
            console.log ( String(zet[i]));
            if (String(zet[i].textContent).includes(search.value))
            


                {
                    toShow.push(area[i]);
                    alert();
                }
        }

        all.innerHTML = toShow[0].textContent;
        debugger;


}



