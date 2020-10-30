var xhr = new XMLHttpRequest();
var data;

xhr.open("GET","https://ci-swapi.herokuapp.com/api/");
xhr.send();


/* readystate of 4 means its done and the http status of 200 means ok
once its ok we then get the xhr text 
this however goes through a loop several times so the data we need wont be accessed 
unless we do a timeout to let this function have time to run through all the states so it gets to 4*/
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200 ){
        data = JSON.parse(this.responseText);
    }
}

setTimeout(function() {
    console.log(data);
}, 500);