
function movieListener() {
    var APIData = JSON.parse(this.responseText);
    var moviesList = APIData.data;
    var output="";
    for (var i = 0; i < moviesList.length; i ++) {
        var currentMovie = moviesList[i];
        if(currentMovie[10] == "Golden Gate Bridge"){

            output+= "<br>"+currentMovie[8];//Movie Title
            output+= "<br>"+currentMovie[9];//Movie Release Year
            output+= "<br>"+currentMovie[13]+"<br>";//Movie Production Company

        }

    }
    document.getElementById('result').innerHTML += output;


}

var movieRequest = new XMLHttpRequest();
movieRequest.addEventListener("load", movieListener);
movieRequest.open("GET", "https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD");
movieRequest.send();
