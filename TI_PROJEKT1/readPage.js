function showInfoSierp(id) {
        if(document.getElementById(id).innerHTML === "Trójkąt Sierpińskiego") {
            document.getElementById(id).style.width = '500px';
            document.getElementById(id).style.transform = "rotate(0deg)";
            document.getElementById(id).innerHTML = `Rysujemy trójkąt równoboczny o ustalonej długości boku (np. 1). Środki boków 
        trójkąta łączymy odcinkami otrzymując cztery trójkąty równoboczne,
        każdy o długości boku 1/2 . Usuwamy środkowy trójkąt. Każdy z pozostałych
        trzech mniejszych trójkątów dzielimy analogicznie na cztery równe trójkąty.
        Ich wierzchołkami są środki boków trójkątów otrzymanych w pierwszym kroku. 
        Usuwamy środkowe trójkąty. Postępowanie powtarzamy (IFS) uzyskując
        w nieskończonym kroku trójkąt Sierpińskiego.
        <img src="zdj/trojkaty.jpg" style="margin-top: 15px; margin-bottom: 0"alt="zdj">`;
        } else {
            document.getElementById(id).style.width = '200px';
            document.getElementById(id).style.transform = "rotate(10deg)";
            document.getElementById(id).innerHTML = "Trójkąt Sierpińskiego";
        }
}

function showInfoJul(id) {
    if(document.getElementById(id).innerHTML === "Zbiory Julii") {
        document.getElementById(id).style.width = '500px';
        document.getElementById(id).style.transform = "rotate(0deg)";
        document.getElementById(id).innerHTML = `Zbiory Julii są fraktalami określonymi przez zależność rekurencyjną punktów
        płaszczyzny zespolonej. Równanie startuje od dowolnego punktu z0 i stałej
        c. <br> Poniżej zależność rekurencyjna dla zbiorów Julii typu „Quadratic”:
        <br>z<sub>n+1</sub> := z<sup>2</sup><sub>n</sub> + c
        <img src="zdj/julia.png" style="margin-top: 15px; margin-bottom: 0"alt="zdj">`;
    } else {
        document.getElementById(id).style.width = '200px';
        document.getElementById(id).style.transform = "rotate(-5deg)";
        document.getElementById(id).innerHTML = "Zbiory Julii";
    }
}

function showInfoMan(id) {
    if(document.getElementById(id).innerHTML === "Zbiór Mandelbrota") {
        document.getElementById(id).style.width = '500px';
        document.getElementById(id).style.transform = "rotate(0deg)";
        document.getElementById(id).innerHTML = `Zbiór mandelbrota uzyskuje się w sposób bardzo podobny do zbiorów Julii:
        <br>z<sub>n+1</sub> := z<sup>2</sup><sub>n</sub> + c <br> z<sub>0</sub> = 0
        <img src="zdj/mandel.jpg" style="margin-top: 15px; margin-bottom: 0"alt="zdj">`;
    } else {
        document.getElementById(id).style.width = '200px';
        document.getElementById(id).style.transform = "rotate(15deg)";
        document.getElementById(id).innerHTML = "Zbiór Mandelbrota";
    }
}