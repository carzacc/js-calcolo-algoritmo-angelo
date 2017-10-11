function partite(giornata) {
  let soloquarta = 0;
  let finoquinta = 0;
  let finosesta = 0;
  if(giornata<5)
    soloquarta=1;
  if(giornata<6)
    finoquinta=1;
  if(giornata<7)
    finosesta=1;
  partita("juventus", "Cagliari", 3, 0);
  partita("Verona", "Napoli", 1, 3);
  partita("Atalanta", "Roma", 0, 1);
  partita("Bologna", "Torino", 1, 1);
  partita("Crotone", "Milan", 0, 3);
  partita("Inter", "Fiorentina", 3, 0);
  partita("Lazio", "Spal", 0, 0);
  partita("Sampdoria", "Benevento", 2, 1);
  partita("Sassuolo", "Genoa", 0, 0);
  partita("Udinese", "Chievo", 1, 2);
  partita("Benevento", "Bologna", 0, 1);
  partita("Genoa", "juventus", 2, 4);
  partita("Roma", "Inter", 1, 3);
  partita("Torino", "Sassuolo", 3, 0);
  partita("Milan", "Cagliari", 2, 1);
  partita("Napoli", "Atalanta", 3, 1);
  partita("Crotone", "Verona", 0, 0);
  partita("Spal", "Udinese", 3, 2);
  partita("Chievo", "Lazio", 1, 2);
  partita("Fiorentina", "Sampdoria", 1, 2);
  partita("juventus", "Chievo", 3, 0);
  partita("Inter", "Spal", 2, 0);
  partita("Verona", "Fiorentina", 0, 5);
  partita("Udinese", "Genoa", 1, 0);
  partita("Atalanta", "Sassuolo", 2, 1);
  partita("Cagliari", "Crotone", 1, 0);
  partita("Lazio", "Milan", 4, 1);
  partita("Benevento", "Torino", 0, 1);
  partita("Bologna", "Napoli", 0, 3);
  partita("Crotone", "Inter", 0, 2);
  partita("Fiorentina", "Bologna", 2, 1);
  partita("Roma", "Verona", 3, 0);
  partita("Sassuolo", "juventus", 1, 3);
  partita("Milan", "Udinese", 2, 1);
  partita("Napoli", "Benevento", 6, 0);
  partita("Spal", "Cagliari", 0, 2);
  partita("Torino", "Sampdoria", 2, 2);
  partita("Chievo", "Atalanta", 1, 1);
  partita("Genoa", "Lazio", 2, 3);
  if (!soloquarta) {
    partita("Bologna", "Inter", 1, 1);
    partita("Benevento", "Roma", 0, 4);
    partita("Atalanta", "Crotone", 5, 1);
    partita("Cagliari", "Sassuolo", 0, 1);
    partita("Genoa", "Chievo", 1, 1);
    partita("juventus", "Fiorentina", 1, 0);
    partita("Lazio", "Napoli", 1, 4);
    partita("Milan", "Spal", 2, 0);
    partita("Udinese", "Torino", 2, 3);
    partita("Verona", "Sampdoria", 0, 0);
    if (!finoquinta) {
      partita("Roma", "Udinese", 3, 1);
      partita("Spal", "Napoli", 2, 3);
      partita("juventus", "Torino", 4, 0);
      partita("Sampdoria", "Milan", 2, 0);
      partita("Cagliari", "Chievo", 0, 2);
      partita("Crotone", "Benevento", 2, 0);
      partita("Verona", "Lazio", 0, 3);
      partita("Inter", "Genoa", 1, 0);
      partita("Sassuolo", "Bologna", 0, 1);
      partita("Fiorentina", "Atalanta", 1, 1);
    }
  }
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

function avviaprogramma() {
  let giornata=parseInt(document.getElementById("giornata").value);
  partite(giornata)

  (function () {
    for (let value of sortedarr) {
      if (value == arr[inter]) {
        document.write("Punti Inter: ");
      }
      if (value == arr[juve]) {
        document.write("Punti Juve: ");
      }
      if (value == arr[milan]) {
        document.write("Punti Milan: ");
      }
      if (value == arr[sampdoria]) {
        document.write("Punti Sampdoria: ");
      }
      if (value == arr[torino]) {
        document.write("Punti Torino: ");
      }
      if (value == arr[roma]) {
        document.write("Punti Roma: ");
      }
      if (value == arr[benevento]) {
        document.write("Punti Benevento: ");
      }
      document.write(value);
      document.write("\n");
    }
  }).call(this);
}
