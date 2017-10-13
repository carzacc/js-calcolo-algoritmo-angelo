
(function () {
  squadre[inter] = Inter;
  squadre[juve] = Juve;
  squadre[milan] = Milan;
  squadre[sampdoria] = Sampdoria;
  squadre[torino] = Torino;
  squadre[roma] = Roma;
  squadre[benevento] = Benevento;
  squadre[hellas] = Hellas;
  squadre[atalanta] = Atalanta;
  squadre[spal] = Spal;
  squadre[crotone] = Crotone;
  squadre[chievo] = Chievo;
  squadre[fiorentina] = Fiorentina;
  squadre[napoli] = Napoli;
  squadre[bologna] = Bologna;
  squadre[cagliari] = Cagliari;
  squadre[genoa] = Genoa;
  squadre[sassuolo] = Sassuolo;
  squadre[lazio] = Lazio;
  squadre[udinese] = Udinese;
}).call(this);
(function () {
  nomisquadre[inter] = "Inter";
  nomisquadre[juve] = "Juve";
  nomisquadre[milan] = "Milan";
  nomisquadre[sampdoria] = "Sampdoria";
  nomisquadre[torino] = "Torino";
  nomisquadre[roma] = "Roma";
  nomisquadre[benevento] = "Benevento";
  nomisquadre[hellas] = "Hellas";
  nomisquadre[atalanta] = "Atalanta";
  nomisquadre[spal] = "Spal";
  nomisquadre[crotone] = "Crotone";
  nomisquadre[chievo] = "Chievo";
  nomisquadre[fiorentina] = "Fiorentina";
  nomisquadre[napoli] = "Napoli";
  nomisquadre[bologna] = "Bologna";
  nomisquadre[cagliari] = "Cagliari";
  nomisquadre[genoa] = "Genoa";
  nomisquadre[sassuolo] = "Sassuolo";
  nomisquadre[lazio] = "Lazio";
  nomisquadre[udinese] = "Udinese";
}).call(this);
function generaarray() {
  (function () {
    arr[inter] = Inter.getPunti();
    arr[juve] = Juve.getPunti();
    arr[milan] = Milan.getPunti();
    arr[sampdoria] = Sampdoria.getPunti();
    arr[torino] = Torino.getPunti();
    arr[roma] = Roma.getPunti();
    arr[benevento] = Benevento.getPunti();
    arr[hellas] = Hellas.getPunti();
    arr[atalanta] = Atalanta.getPunti();
    arr[spal] = Spal.getPunti();
    arr[crotone] = Crotone.getPunti();
    arr[chievo] = Chievo.getPunti();
    arr[fiorentina] = Fiorentina.getPunti();
    arr[napoli] = Napoli.getPunti();
    arr[bologna] = Bologna.getPunti();
    arr[cagliari] = Cagliari.getPunti();
    arr[genoa] = Genoa.getPunti();
    arr[sassuolo] = Sassuolo.getPunti();
    arr[lazio] = Lazio.getPunti();
    arr[udinese] = Udinese.getPunti();
    sortedarr = Array.from(arr);
    sortedarr.sort();
    sortedarr.reverse();
  }).call(this);

  (function () {
    arr[inter] = Inter.getPunti();
    arr[juve] = Juve.getPunti();
    arr[milan] = Milan.getPunti();
    arr[sampdoria] = Sampdoria.getPunti();
    arr[torino] = Torino.getPunti();
    arr[roma] = Roma.getPunti();
    arr[benevento] = Benevento.getPunti();
    arr[hellas] = Hellas.getPunti();
    arr[atalanta] = Atalanta.getPunti();
    arr[spal] = Spal.getPunti();
    arr[crotone] = Crotone.getPunti();
    arr[chievo] = Chievo.getPunti();
    arr[fiorentina] = Fiorentina.getPunti();
    arr[napoli] = Napoli.getPunti();
    arr[bologna] = Bologna.getPunti();
    arr[cagliari] = Cagliari.getPunti();
    arr[genoa] = Genoa.getPunti();
    arr[sassuolo] = Sassuolo.getPunti();
    arr[lazio] = Lazio.getPunti();
    arr[udinese] = Udinese.getPunti();
    sortedarr = Array.from(arr);
    sortedarr.sort();
    sortedarr.reverse();
  }).call(this);
}

function failista() {
  console.log("dentro lista");
  let lista = document.createElement("ul");
  for (var i = 0; i <= sortedarr.length; i++) {
    let elemento = document.createElement('li');
    //da mettere nome squadra
    for (let c = 0; c <= squadre.length; c++) {
      if (arr[i] == sortedarr[i]) elemento.appendChild(document.createTextNode(nomisquadre[i]));
    }
    elemento.appendChild(document.createTextNode(": "));
    elemento.appendChild(document.createTextNode(sortedarr[i]));
    lista.appendChild(elemento);
  }
  return lista;
}
function avviaprogramma() {
  console.log("Avviata funzione avviaprogramma()");
  let giornata;
  if (document.getElementById('giornata7').checked) {
    giornata = 7;
    console.log("giornata7 checked");
  }
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
  risultati.appendChild(document.createElement('br'));
  risultati.appendChild(failista());
  console.log(Inter.getPunti());
  console.log("finita funzione");
  for (let membro of arr) {
    console.log(membro);
  }
}
