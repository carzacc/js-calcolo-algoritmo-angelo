'use strict';
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
var eseguito = false;
var controllaradio = true;
var giornata = 40;
var impostaGiornata = function (g) {
    giornata = g;
    controllaradio = false;
};
var avviaprogramma = function () {
    if (controllaradio) {
        if (document.getElementById('giornata20').checked)
            giornata = 20;
        if (document.getElementById('giornata19').checked)
            giornata = 19;
        if (document.getElementById('giornata18').checked)
            giornata = 18;
        if (document.getElementById('giornata17').checked)
            giornata = 17;
        if (document.getElementById('giornata16').checked)
            giornata = 16;
        if (document.getElementById('giornata15').checked)
            giornata = 15;
    }
    failista(giornata);
    console.log("finita funzione");
};
var sveglia = function () {
    $.get("http://algorest.carzacc.info/?g=", function (a) {
        console.log("Svegliato sito");
    });
};
var failista = function (g) {
    if (!eseguito) {
        $.getJSON("http://algorest.carzacc.info/?g=" + g, function (squadre) {
            console.log(squadre);
            console.log("dentro lista");
            var tabella = document.getElementById("classifica");
            for (var i = 0; i < squadre.length; i++) {
                let posizionecorrente = i + 1;
                var fila = document.createElement('tr');
                var cellapos = document.createElement('td');
                var cellanome = document.createElement('td');
                var cellaalt = document.createElement('td');
                var cellatrad = document.createElement('td');
                var cellasomma = document.createElement('td');
                cellapos.appendChild(document.createTextNode(posizionecorrente.toString()));
                cellanome.appendChild(document.createTextNode(squadre[i].Squadra));
                cellaalt.appendChild(document.createTextNode(squadre[i].Alternativa));
                cellatrad.appendChild(document.createTextNode(squadre[i].Tradizionale));
                cellasomma.appendChild(document.createTextNode(squadre[i].Somma));
                fila.appendChild(cellapos);
                fila.appendChild(cellanome);
                fila.appendChild(cellaalt);
                fila.appendChild(cellatrad);
                fila.appendChild(cellasomma);
                tabella.appendChild(fila);
            }
        });
        eseguito = true;
    }
    else {
        let autoreset = document.getElementById("autoreset");
        resetta();
        avviaprogramma();
    }
};
function resetta() {
    var parent = document.getElementById("classifica");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    eseguito = false;
}
