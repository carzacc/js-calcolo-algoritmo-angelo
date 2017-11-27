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
var punti = Array(20);
var squadre = Array(20);
var avviaprogramma = function () {
  let giornata: number;
  if ((<HTMLInputElement>document.getElementById('giornata11')).checked) giornata = 11;
  if ((<HTMLInputElement>document.getElementById('giornata10')).checked) giornata = 10;
  if ((<HTMLInputElement>document.getElementById('giornata9')).checked) giornata = 9;
  if ((<HTMLInputElement>document.getElementById('giornata8')).checked) giornata = 8;
  if ((<HTMLInputElement>document.getElementById('giornata7')).checked) giornata = 7;
  if ((<HTMLInputElement>document.getElementById('giornata6')).checked) giornata = 6;
  if ((<HTMLInputElement>document.getElementById('giornata5')).checked) giornata = 5;
  if ((<HTMLInputElement>document.getElementById('giornata4')).checked) giornata = 4;
  prelevadati(giornata);
};

var prelevadati = function(g)  {
  $.getJSON( "http://algorest.carzacc.info/?g="+g, function( data ) {
    let indicatorezona = document.getElementById('indicatorezona');
    indicatorezona.style.display = 'none';
    let divrisultati = document.getElementById('Risultati');
    let divtasti = document.getElementById('tasti');
    console.log("Avviata funzione avviaprogramma()");
    console.log("if finiti");
    let risultati = (<HTMLInputElement>document.getElementById("Risultati"));
    console.log("dopogetelement");
    let titolorisultati = risultati.appendChild(document.createElement('h1'));
    titolorisultati.appendChild(document.createTextNode("RISULTATI:"));
    let accapo = risultati.appendChild(document.createElement('br'));
   console.log(data);
   squadre = data;
   var lista = risultati.appendChild(failista());
   let tastoreset;
   (function creatastoreset() {
     tastoreset = document.createElement('button');
     divtasti.appendChild(tastoreset);
     let testotasto = document.createTextNode("Resetta tutto");
     tastoreset.appendChild(testotasto);
   }).call(this);
   console.log("finita funzione");
   tastoreset.onclick = function () {
     let parent = (<HTMLInputElement>document.getElementById("Risultati"));
     parent.removeChild(lista);
     parent.removeChild(titolorisultati);
     divtasti.removeChild(tastoreset);
     parent.removeChild(accapo);
     indicatorezona.style.display = 'visible';
   };
});
}
var failista = function () {
  console.log("dentro lista");
  let Alt = (<HTMLInputElement>document.getElementById("alt")).checked;
  let Trad = (<HTMLInputElement>document.getElementById("trad")).checked;
  let Somma = (<HTMLInputElement>document.getElementById("somma")).checked;
  for (let i=0; i<punti.length; i++)  {
    if (Alt) punti[i] = squadre[i].Alternativa;
    if (Trad) punti[i] = squadre[i].Tradizionale;
    if (Somma) punti[i] = squadre[i].Somma;
  }
  let lista = document.createElement("ul");
  for (var i = 0; i < punti.length; i++) {
    let elemento = document.createElement('li');
    elemento.appendChild(document.createTextNode(squadre[i].Squadra));
    elemento.appendChild(document.createTextNode(": "));
    elemento.appendChild(document.createTextNode(punti[i].toFixed(1)));
    lista.appendChild(elemento);
  }
  return lista;
};
