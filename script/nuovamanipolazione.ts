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
var eseguito: Boolean = false;
var controllaradio: Boolean = true;
var giornata: number;

var impostaGiornata = function(g): void {
  giornata=g;
  controllaradio=false;
}

var avviaprogramma = function () : void {
  if(controllaradio)  {
    if ((<HTMLInputElement>document.getElementById('giornata15')).checked) giornata = 15;
    if ((<HTMLInputElement>document.getElementById('giornata14')).checked) giornata = 14;
    if ((<HTMLInputElement>document.getElementById('giornata13')).checked) giornata = 13;
    if ((<HTMLInputElement>document.getElementById('giornata12')).checked) giornata = 12;
    if ((<HTMLInputElement>document.getElementById('giornata11')).checked) giornata = 11;
    if ((<HTMLInputElement>document.getElementById('giornata10')).checked) giornata = 10;
    /*if ((<HTMLInputElement>document.getElementById('giornata9')).checked) giornata = 9;
    if ((<HTMLInputElement>document.getElementById('giornata8')).checked) giornata = 8;
    if ((<HTMLInputElement>document.getElementById('giornata7')).checked) giornata = 7;
    if ((<HTMLInputElement>document.getElementById('giornata6')).checked) giornata = 6;
    if ((<HTMLInputElement>document.getElementById('giornata5')).checked) giornata = 5;
    if ((<HTMLInputElement>document.getElementById('giornata4')).checked) giornata = 4;*/
  }

  failista(giornata);
  console.log("finita funzione");
}
var sveglia = function () : void  {
  $.get("http://algorest.carzacc.info/?g=", function(a)  {
    console.log("Svegliato sito");
  });
}


var failista = function (g): void {
    if (!eseguito)  {
    $.getJSON( "http://algorest.carzacc.info/?g="+g, function( squadre ) {
      console.log(squadre);
      console.log("dentro lista");

      var tabella = document.getElementById("classifica");
        for (var i = 0; i < squadre.length; i++) {
            let posizionecorrente = i+1;
            var fila: HTMLTableRowElement = document.createElement('tr');
            var cellapos: HTMLTableDataCellElement = document.createElement('td');
            var cellanome: HTMLTableDataCellElement = document.createElement('td');
            var cellaalt: HTMLTableDataCellElement = document.createElement('td');
            var cellatrad: HTMLTableDataCellElement = document.createElement('td');
            var cellasomma: HTMLTableDataCellElement = document.createElement('td');
            cellapos.appendChild(document.createTextNode(posizionecorrente.toString()));
            cellanome.appendChild(document.createTextNode(squadre[i].Squadra));
            cellaalt.appendChild(document.createTextNode(squadre[i].Alternativa));
            cellatrad.appendChild(document.createTextNode(squadre[i].Tradizionale));
            cellasomma.appendChild(document.createTextNode(squadre[i].Somma) );
            fila.appendChild(cellapos);
            fila.appendChild(cellanome);
            fila.appendChild(cellaalt);
            fila.appendChild(cellatrad);
            fila.appendChild(cellasomma);
            tabella.appendChild(fila);
          }
        });
        eseguito=true;
      } else {
        let autoreset: HTMLInputElement = <HTMLInputElement> document.getElementById("autoreset");
        resetta()
        avviaprogramma()
      }
}
function resetta()  {
  var parent = document.getElementById("classifica");
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
  eseguito=false;
}
