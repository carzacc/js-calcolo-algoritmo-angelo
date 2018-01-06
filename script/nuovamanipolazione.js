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
    /*if ((<HTMLInputElement>document.getElementById('giornata9')).checked) giornata = 9;
    if ((<HTMLInputElement>document.getElementById('giornata8')).checked) giornata = 8;
    if ((<HTMLInputElement>document.getElementById('giornata7')).checked) giornata = 7;
    if ((<HTMLInputElement>document.getElementById('giornata6')).checked) giornata = 6;
    if ((<HTMLInputElement>document.getElementById('giornata5')).checked) giornata = 5;
    if ((<HTMLInputElement>document.getElementById('giornata4')).checked) giornata = 4;*/
    failista(giornata);
    console.log("finita funzione");
};
var sveglia = function () {
    $.get("http://algorest.carzacc.info/?g=", function (a) {
        console.log("Svegliato sito");
    });
};
var failista = function (g) {
    $.getJSON("http://algorest.carzacc.info/?g=" + g, function (squadre) {
        console.log(squadre);
        console.log("dentro lista");
        var tabella = document.getElementById("classifica");
        for (var i = 0; i < squadre.length; i++) {
            var fila = document.createElement('tr');
            var cellanome = document.createElement('td');
            var cellaalt = document.createElement('td');
            var cellatrad = document.createElement('td');
            var cellasomma = document.createElement('td');
            cellanome.appendChild(document.createTextNode(squadre[i].nomesquadra));
            cellaalt.appendChild(document.createTextNode(squadre[i].punti));
            cellatrad.appendChild(document.createTextNode(squadre[i].puntiTrad));
            cellasomma.appendChild(document.createTextNode(squadre[i].puntiTrad + squadre[i].punti));
            fila.appendChild(cellanome);
            fila.appendChild(cellaalt);
            fila.appendChild(cellatrad);
            fila.appendChild(cellasomma);
            tabella.appendChild(fila);
        }
    });
};
