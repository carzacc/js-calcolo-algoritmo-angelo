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
let prelevadati = function () {
    $.get("http://algorest.carzacc.info", function (data) {
        console.log(data);
    });
};
/*let failista = function () {
  console.log("dentro lista");
  let lista = document.createElement("ul");
  for (var i = 0; i < sortedarr.length; i++) {
    let elemento = document.createElement('li');
    //da mettere nome squadra
    for (let c = 0; c < arr.length; c++) {
      if (arr[c] == sortedarr[i]) elemento.appendChild(document.createTextNode(nomisquadre[c]));
    }
    elemento.appendChild(document.createTextNode(": "));
    elemento.appendChild(document.createTextNode(sortedarr[i].toFixed(1)));
    lista.appendChild(elemento);
  }
  return lista;
};*/
let avviaprogramma = function () {
    prelevadati();
    /*  let indicatorezona = document.getElementById('indicatorezona');
      indicatorezona.style.display = 'none';
      let divrisultati = document.getElementById('Risultati');
      let divtasti = document.getElementById('tasti');
      console.log("Avviata funzione avviaprogramma()");
      let giornata;
      if (document.getElementById('giornata7').checked) {
        giornata = 7;
        console.log("giornata7 checked");
      }
      if (document.getElementById('giornata11').checked) giornata = 11;
      if (document.getElementById('giornata10').checked) giornata = 10;
      if (document.getElementById('giornata9').checked) giornata = 9;
      if (document.getElementById('giornata8').checked) giornata = 8;
      if (document.getElementById('giornata7').checked) giornata = 7;
      if (document.getElementById('giornata6').checked) giornata = 6;
      if (document.getElementById('giornata5').checked) giornata = 5;
      if (document.getElementById('giornata4').checked) giornata = 4;
      console.log("if finiti");
      partite(giornata);
      generaarray();
      let risultati = document.getElementById("Risultati");
      console.log("dopogetelement");
      let titolorisultati = risultati.appendChild(document.createElement('h1'));
      titolorisultati.appendChild(document.createTextNode("RISULTATI:"));
      let accapo = risultati.appendChild(document.createElement('br'));
      var lista = risultati.appendChild(failista());
      let tastoreset;
      (function creatastoreset() {
        tastoreset = document.createElement('button');
        divtasti.appendChild(tastoreset);
        let testotasto = document.createTextNode("Resetta tutto");
        tastoreset.appendChild(testotasto);
      }).call(this);
      console.log(Inter.getPunti());
      console.log("finita funzione");
      let membro
      for (let i = 0;i < arr.length;i++ ) { // equivalente a for (let membro of arr)
        membro = arr[i];
        console.log(membro);
      }
      tastoreset.onclick = function () {
        let parent = document.getElementById("Risultati");
        parent.removeChild(lista);
        parent.removeChild(titolorisultati);
        divtasti.removeChild(tastoreset);
        parent.removeChild(accapo);
        indicatorezona.style.display = 'visible';
      };*/
};
