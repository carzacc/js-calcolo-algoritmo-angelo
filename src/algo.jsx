const inter=1
const juve=2
const napoli=3
const milan=4
const lazio=5
const benevento=0
const sampdoria=6
const roma=7
const hellas=8
const torino=9
const atalanta=10
const spal=11
const crotone=12
const chievo=13
const fiorentina=14
const udinese=15
const genoa=16
const sassuolo=17
const cagliari=18
const bologna=19
const quotaCS=2.5
const quotaGS=1.5
const quotaGF=1.3
var arr = new Array(20)

string=(stringa) => {
  return stringa
}

var Squadra = class Squadra {
  constructor(punti,puntiTrad) {
    punti=0
    puntiTrad=0
  }
  aggiungipartita(GFa,GSa)  {
      if(GFa>GSa)
      {
        this.puntiTrad=this.puntiTrad+3;
      }
      if(GFa==GSa)
      {
        this.puntiTrad=this.puntiTrad+1;
      }

      if(GSa==0)
      {
        this.punti=this.punti+quotaCS;
      }
      else
      {
        if(GSa==1)
        {
          this.punti=this.punti+1.5;
        }
      }
      if(GFa>0)
      {
        this.punti=this.punti+1.3;
      }
    }
    getPunti()  {
      return this.punti
    }
    getPuntiTrad()  {
      return this.puntiTrad
    }
  }

var Inter = new Squadra
var Juve = new Squadra
var Napoli = new Squadra
var Milan = new Squadra
var Lazio = new Squadra
var Benevento = new Squadra
var Sampdoria = new Squadra
var Roma = new Squadra
var Hellas = new Squadra
var Torino = new Squadra
var Atalanta = new Squadra
var Spal = new Squadra
var Crotone = new Squadra
var Chievo = new Squadra
var Fiorentina = new Squadra
var Udinese = new Squadra
var Genoa = new Squadra
var Sassuolo = new Squadra
var Cagliari = new Squadra
var Bologna = new Squadra

partita=(squadra1,squadra2,goal1,goal2) => {
  if(squadra1==string("Inter"))  {
    Inter.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Napoli"))  {
    Napoli.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("juventus") ||
    squadra1==string("juve"))  {
    Juve.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Lazio"))  {
    Lazio.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Milan"))  {
    Milan.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Torino"))  {
    Torino.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Sampdoria"))  {
    Sampdoria.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Roma"))  {
    Roma.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Fiorentina"))  {
    Fiorentina.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Cagliari"))  {
    Cagliari.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Atalanta"))  {
    Atalanta.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("ChievoVerona") ||
    squadra1==string("Chievo") ||
    squadra1==string("Chievoverona"))  {
    Chievo.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Bologna"))  {
    Bologna.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Spal"))  {
    Spal.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Udinese"))  {
    Udinese.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Genoa"))  {
    Genoa.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Sassuolo"))  {
    Sassuolo.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Crotone"))  {
    Crotone.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Hellas Verona") || squadra1==string("Hellas")
  || squadra1==string("Verona"))  {
    Hellas.aggiungipartita(goal1,goal2);
  }
  if(squadra1==string("Benevento"))  {
    Benevento.aggiungipartita(goal1,goal2);
  }
  if(squadra2==string("Inter"))  {
    Inter.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Napoli"))  {
    Napoli.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("juventus") ||
    squadra2==string("juve"))  {
    Juve.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Lazio"))  {
    Lazio.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Milan"))  {
    Milan.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Torino"))  {
    Torino.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Sampdoria"))  {
    Sampdoria.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Roma"))  {
    Roma.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Fiorentina"))  {
    Fiorentina.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Cagliari"))  {
    Cagliari.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Atalanta"))  {
    Atalanta.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("ChievoVerona") ||
    squadra2==string("Chievo") ||
    squadra2==string("Chievoverona"))  {
    Chievo.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Bologna"))  {
    Bologna.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Spal"))  {
    Spal.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Udinese"))  {
    Udinese.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Genoa"))  {
    Genoa.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Sassuolo"))  {
    Sassuolo.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Crotone"))  {
    Crotone.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Hellas Verona") || squadra2==string("Hellas")
  || squadra2==string("Verona"))
  {
    Hellas.aggiungipartita(goal2,goal1);
  }
  if(squadra2==string("Benevento")) {
    Benevento.aggiungipartita(goal2,goal1);
  }
}
partite=numeropartite=> {
  let soloquarta=0;
  let finoquinta=0;
  if(numeropartite<5) soloquarta=1
  if(numeropartite<6) finoquinta=1
  partita("juventus","Cagliari",3,0);
  partita("Verona","Napoli",1,3);
  partita("Atalanta","Roma",0,1);
  partita("Bologna","Torino",1,1);
  partita("Crotone","Milan",0,3);
  partita("Inter","Fiorentina",3,0);
  partita("Lazio","Spal",0,0);
  partita("Sampdoria","Benevento",2,1);
  partita("Sassuolo","Genoa",0,0);
  partita("Udinese","Chievo",1,2);
  partita("Benevento","Bologna",0,1);
  partita("Genoa","juventus",2,4);
  partita("Roma","Inter",1,3);
  partita("Torino","Sassuolo",3,0);
  partita("Milan","Cagliari",2,1);
  partita("Napoli","Atalanta",3,1);
  partita("Crotone","Verona",0,0);
  partita("Spal","Udinese",3,2);
  partita("Chievo","Lazio",1,2);
  partita("Fiorentina", "Sampdoria",1,2);
  partita("juventus","Chievo",3,0);
  partita("Inter","Spal",2,0);
  partita("Verona","Fiorentina",0,5);
  partita("Udinese","Genoa",1,0);
  partita("Atalanta","Sassuolo",2,1);
  partita("Cagliari","Crotone",1,0);
  partita("Lazio","Milan",4,1);
  partita("Benevento","Torino",0,1);
  partita("Bologna","Napoli",0,3);
  partita("Crotone","Inter",0,2);
  partita("Fiorentina","Bologna",2,1);
  partita("Roma","Verona",3,0);
  partita("Sassuolo","juventus",1,3);
  partita("Milan","Udinese",2,1);
  partita("Napoli","Benevento",6,0);
  partita("Spal","Cagliari",0,2);
  partita("Torino","Sampdoria",2,2);
  partita("Chievo","Atalanta",1,1);
  partita("Genoa","Lazio",2,3);
  if(!soloquarta)
  {
    partita("Bologna","Inter",1,1);
    partita("Benevento","Roma",0,4);
    partita("Atalanta","Crotone",5,1);
    partita("Cagliari","Sassuolo",0,1);
    partita("Genoa","Chievo",1,1);
    partita("juventus", "Fiorentina",1,0);
    partita("Lazio","Napoli",1,4);
    partita("Milan","Spal",2,0);
    partita("Udinese","Torino",2,3);
    partita("Verona", "Sampdoria",0,0);
    if(!finoquinta)
    {
      partita("Roma","Udinese",3,1);
      partita("Spal","Napoli",2,3);
      partita("juventus","Torino",4,0);
      partita("Sampdoria","Milan",2,0);
      partita("Cagliari","Chievo",0,2);
      partita("Crotone", "Benevento",2,0);
      partita("Verona","Lazio",0,3);
      partita("Inter","Genoa",1,0);
      partita("Sassuolo", "Bologna",0,1);
      partita("Fiorentina","Atalanta",1,1);
    }
  }
}
generaarray=() => {
  arr[inter]=Inter.getPunti()
  arr[juve]=Juve.getPunti()
  arr[milan]=Milan.getPunti()
  arr[sampdoria]=Sampdoria.getPunti()
  arr[torino]=Torino.getPunti()
}
(function() {
  partite(5)
  generaarray()
  for(let value of arr)
  {
    console.log(value)
  }
  document.write("I punti sono");
  document.write(Inter.getPuntiTrad());
}).call(this)
