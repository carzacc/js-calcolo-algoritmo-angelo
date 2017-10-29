// <script src="./script/new/index.js"></script>

query = function(giornata)  {
  $.get("http://algorest.carzacc.info/?g="+giornata, function(squadre) {
    let risultati = document.getElementById("Risultati");
    let listasquadre = JSON.parse(squadre)
    let titolorisultati = risultati.appendChild(document.createElement('h1'));
    titolorisultati.appendChild(document.createTextNode("RISULTATI:"));
    let accapo = risultati.appendChild(document.createElement('br'));
    console.log("dentro lista");
    let lista = document.createElement("ul");
    for (var i = 0; i < listasquadre.length; i++) {
      let elemento = document.createElement('li');
      //da mettere nome squadra
      elemento.appendChild(document.createTextNode(listasquadre[i].nome))
      elemento.appendChild(document.createTextNode(": "));
      elemento.appendChild(document.createTextNode(listasquadre[i].puntiAlt));
      lista.appendChild(elemento);
    }
    risultati.appendChild(lista);
    let tastoreset;
    (function creatastoreset() {
      tastoreset = document.createElement('button');
      divtasti.appendChild(tastoreset);
      let testotasto = document.createTextNode("Resetta tutto");
      tastoreset.appendChild(testotasto);
    }).call(this);
    console.log(Inter.getPunti());
    console.log("finita funzione");
    for (let membro of arr) {
      console.log(membro);
    }
    tastoreset.onclick = function () {
      let parent = document.getElementById("Risultati");
      parent.removeChild(lista);
      parent.removeChild(titolorisultati);
      divtasti.removeChild(tastoreset);
      parent.removeChild(accapo);
      indicatorezona.style.display = 'visible';
    };




  });
}
avviaprogramma = function () {
  let indicatorezona = document.getElementById('indicatorezona');
  indicatorezona.style.display = 'none';
  let divrisultati = document.getElementById('Risultati');
  let divtasti = document.getElementById('tasti');
  console.log("Avviata funzione avviaprogramma()");
  let giornata;
  if (document.getElementById('giornata7').checked) {
    giornata = 7;
    console.log("giornata7 checked");
  }
  if (document.getElementById('giornata10').checked) giornata = 10;
  if (document.getElementById('giornata9').checked) giornata = 9;
  if (document.getElementById('giornata8').checked) giornata = 8;
  if (document.getElementById('giornata7').checked) giornata = 7;
  if (document.getElementById('giornata6').checked) giornata = 6;
  if (document.getElementById('giornata5').checked) giornata = 5;
  if (document.getElementById('giornata4').checked) giornata = 4;
  console.log("if finiti");
  query(giornata);
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
tipoclassifica = () => {
  let Alt = document.getElementById("alt").checked;
  let Trad = document.getElementById("trad").checked;
  let Somma = document.getElementById("somma").checked;
  if (Alt) return "Alt";
  if (Trad) return "Trad";
  if (Somma) return "Somma";
};
