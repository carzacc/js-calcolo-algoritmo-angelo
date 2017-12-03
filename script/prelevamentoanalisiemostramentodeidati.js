/*
    Copyright (C) 2017 carzacc
    This file is part of classifica-serie-a-alternativa.
    classifica-serie-a-alternativa is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    classifica-serie-a-alternativa is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with classifica-serie-a-alternativa.  If not, see <http://www.gnu.org/licenses/>.
*/
var lista;
var divtasti = document.getElementById('tasti');
var indicatorezona = document.getElementById('indicatorezona');
var risultati = document.getElementById("Risultati");
var titolorisultati;
var tastoreset;
var accapo;
var avviaprogramma = function () {
    let giornata;
    if (document.getElementById('giornata15').checked)
        giornata = 15;
    if (document.getElementById('giornata14').checked)
        giornata = 14;
    if (document.getElementById('giornata13').checked)
        giornata = 13;
    if (document.getElementById('giornata13').checked)
        giornata = 12;
    if (document.getElementById('giornata11').checked)
        giornata = 11;
    if (document.getElementById('giornata10').checked)
        giornata = 10;
    if (document.getElementById('giornata9').checked)
        giornata = 9;
    if (document.getElementById('giornata8').checked)
        giornata = 8;
    if (document.getElementById('giornata7').checked)
        giornata = 7;
    if (document.getElementById('giornata6').checked)
        giornata = 6;
    if (document.getElementById('giornata5').checked)
        giornata = 5;
    if (document.getElementById('giornata4').checked)
        giornata = 4;
    indicatorezona.style.display = 'none';
    console.log("Avviata funzione avviaprogramma()");
    console.log("if finiti");
    console.log("dopogetelement");
    titolorisultati = risultati.appendChild(document.createElement('h1'));
    titolorisultati.appendChild(document.createTextNode("RISULTATI:"));
    accapo = risultati.appendChild(document.createElement('br'));
    failista(giornata, tipoclassifica());
    console.log("finita funzione");
};
var sveglia = function () {
    $.get("http://algorest.carzacc.info", function (a) {
        console.log("Svegliato sito");
    });
};
var tipoclassifica = function () {
    let Alt = document.getElementById("alt").checked;
    let Trad = document.getElementById("trad").checked;
    let Somma = document.getElementById("somma").checked;
    if (Alt)
        return "Alt";
    if (Trad)
        return "Trad";
    if (Somma)
        return "Somma";
};
var failista = function (g, tipo) {
    $.getJSON("http://algorest.carzacc.info/?g=" + g, function (squadre) {
        console.log(squadre);
        let punti = Array(20);
        console.log("dentro lista");
        for (let i = 0; i < punti.length; i++) {
            if (tipo == "Alt")
                punti[i] = squadre[i].Alternativa;
            if (tipo == "Trad")
                punti[i] = squadre[i].Tradizionale;
            if (tipo == "Somma")
                punti[i] = squadre[i].Somma;
        }
        lista = document.createElement("ul");
        for (var i = 0; i < punti.length; i++) {
            let elemento = document.createElement('li');
            elemento.appendChild(document.createTextNode(squadre[i].Squadra));
            elemento.appendChild(document.createTextNode(": "));
            elemento.appendChild(document.createTextNode(punti[i]));
            lista = risultati.appendChild(elemento);
        }
    });
    (function creatastoreset() {
        tastoreset = document.createElement('button');
        divtasti.appendChild(tastoreset);
        let testotasto = document.createTextNode("Resetta tutto");
        tastoreset.appendChild(testotasto);
    }).call(this);
};
tastoreset.onclick = function () {
    let parent = document.getElementById("Risultati");
    parent.removeChild(lista);
    parent.removeChild(titolorisultati);
    divtasti.removeChild(tastoreset);
    parent.removeChild(accapo);
    indicatorezona.style.display = 'visible';
};
