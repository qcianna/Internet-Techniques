var xmlHttp;

function getRequestObject() {
    if (window.ActiveXObject) {
        return (new ActiveXObject("Microsoft.XMLHTTP"));
    } else if (window.XMLHttpRequest) {
        return (new XMLHttpRequest());
    } else {
        return (null);
    }
}

function addData() {
    myDiv = document.getElementById("myBlock");
    myDiv.innerHTML = `<form action="#" method="get" id="myAdd">
    <div class="prettyDisplay">
    <div>
        <p>Tytul:</p>
        <p>Autor:</p>
    </div>
    <div>
        <p><input type="text" name="data1" id="data1"/></p>
        <p><input type="text" name="data2" id="data2"/></p>
    </div>
    </div>
    <div id="submit">
        <button type='button' onclick='sendData()'> Wyslij </button>
    </div>
    </form>`
}

function sendData() {
    xmlHttp = getRequestObject() ;
    if (xmlHttp) {
        try {
            var autor = document.getElementById('data1').value ;
            var tytul = document.getElementById('data2').value ;
            var url = "../../cgi-bin/ajax_zad3_post.py" ;
	    url += "?data1=" + autor + "&" + "data2=" + tytul;
            xmlHttp.open("GET", url, true);
            xmlHttp.send(null);
        }
        catch (e) {
            alert ("Nie mozna polaczyc sie z serwerem: " + e.toString()) ;
        }
    }
    else {
        alert ("Blad") ;
    }
}

function showDataRequest() {
    xmlHttp = getRequestObject();
    if (xmlHttp) {
        try {
            var url = "../../cgi-bin/ajax_zad3.py";
            xmlHttp.onreadystatechange = showDataResponse;
            xmlHttp.open("GET", url, true);
            xmlHttp.send(null);
        }
        catch (e) {
            alert ("Nie mozna polaczyc sie z serwerem: " + e.toString());
        }
    } else {
        alert ("Blad");
    }
}

function showDataResponse() {
    myDiv = document.getElementById("myBlock");
    if (xmlHttp.readyState == 4) {
        if ( xmlHttp.status == 200 )  {
            myDiv.innerHTML = xmlHttp.responseText;
        }
    }
}