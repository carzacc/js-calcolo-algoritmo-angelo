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
var elemento: HTMLLIElement;
var lista: Node;
var divtasti : HTMLInputElement = (<HTMLInputElement>document.getElementById('tasti'));
var indicatorezona: HTMLElement = document.getElementById('indicatorezona');
var risultati : HTMLInputElement = (<HTMLInputElement>document.getElementById("Risultati"));
var titolorisultati: Node;
var tastoreset: HTMLButtonElement;
var accapo: Node;

var avviaprogramma = function () : void {
  let giornata: number;
  if ((<HTMLInputElement>document.getElementById('giornata15')).checked) giornata = 15;
  if ((<HTMLInputElement>document.getElementById('giornata14')).checked) giornata = 14;
  if ((<HTMLInputElement>document.getElementById('giornata13')).checked) giornata = 13;
  if ((<HTMLInputElement>document.getElementById('giornata13')).checked) giornata = 12;
  if ((<HTMLInputElement>document.getElementById('giornata11')).checked) giornata = 11;
  if ((<HTMLInputElement>document.getElementById('giornata10')).checked) giornata = 10;
  if ((<HTMLInputElement>document.getElementById('giornata9')).checked) giornata = 9;
  if ((<HTMLInputElement>document.getElementById('giornata8')).checked) giornata = 8;
  if ((<HTMLInputElement>document.getElementById('giornata7')).checked) giornata = 7;
  if ((<HTMLInputElement>document.getElementById('giornata6')).checked) giornata = 6;
  if ((<HTMLInputElement>document.getElementById('giornata5')).checked) giornata = 5;
  if ((<HTMLInputElement>document.getElementById('giornata4')).checked) giornata = 4;
  indicatorezona.style.display = 'none';
  console.log("Avviata funzione avviaprogramma()");
  console.log("if finiti");
  console.log("dopogetelement");
  titolorisultati = risultati.appendChild(document.createElement('h1'));
  titolorisultati.appendChild(document.createTextNode("RISULTATI:"));
  accapo = risultati.appendChild(document.createElement('br'));


  failista(giornata,tipoclassifica());
  console.log("finita funzione");
}
var sveglia = function () : void  {
  $.get("http://algorest.carzacc.info", function(a)  {
    console.log("Svegliato sito");
  });
}

var tipoclassifica = function(): string {
  let Alt = (<HTMLInputElement>document.getElementById("alt")).checked;
  let Trad = (<HTMLInputElement>document.getElementById("trad")).checked;
  let Somma = (<HTMLInputElement>document.getElementById("somma")).checked;
  if(Alt) return "Alt";
  if(Trad) return "Trad";
  if(Somma) return "Somma";
}

var failista = function (g, tipo): void {
    $.getJSON( "http://algorest.carzacc.info/?g="+g, function( squadre ) {
      console.log(squadre);
      let punti : string[] = Array(20);
      console.log("dentro lista");
      for (let i=0; i<punti.length; i++)  {
        if (tipo == "Alt") punti[i] = squadre[i].Alternativa;
        if (tipo == "Trad") punti[i] = squadre[i].Tradizionale;
        if (tipo == "Somma") punti[i] = squadre[i].Somma;
      }

      let listatemp: HTMLUListElement = document.createElement("ul");
      for (var i = 0; i < punti.length; i++) {
        elemento = document.createElement('li');
        elemento.appendChild( document.createTextNode( squadre[i].Squadra ) );
        elemento.appendChild(document.createTextNode(": "));
        elemento.appendChild(document.createTextNode( punti[i] ) );
        listatemp.appendChild(elemento);
      }
      lista = risultati.appendChild(listatemp);
    });
    (function creatastoreset() {
      tastoreset = document.createElement('button');
      divtasti.appendChild(tastoreset);
      let testotasto : Text = document.createTextNode("Resetta tutto");
      tastoreset.appendChild(testotasto);
      tastoreset.onclick = function () {
        let parent: HTMLInputElement = (<HTMLInputElement>document.getElementById("Risultati"));
        parent.removeChild(titolorisultati);
        divtasti.removeChild(tastoreset);
        parent.removeChild(accapo);
        risultati.removeChild(lista);
        indicatorezona.style.display = 'visible';
      }
    }).call(this);

};
