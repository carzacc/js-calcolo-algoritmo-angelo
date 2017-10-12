'use strict';

const inter = 1;
const juve = 2;
const napoli = 3;
const milan = 4;
const lazio = 5;
const benevento = 0;
const sampdoria = 6;
const roma = 7;
const hellas = 8;
const torino = 9;
const atalanta = 10;
const spal = 11;
const crotone = 12;
const chievo = 13;
const fiorentina = 14;
const udinese = 15;
const genoa = 16;
const sassuolo = 17;
const cagliari = 18;
const bologna = 19;
const quotaCS = 2.5;
const quotaGS = 1.5;
const quotaGF = 1.3;
var arr = new Array(20);
var sortedarr = new Array(20);
let squadre = new Array(20);

var Squadra = class Squadra {
  constructor() {
    this.punti = 0;
    this.puntiTrad = 0;
  }
  aggiungipartita(GFa, GSa) {
    if (parseInt(GFa) > parseInt(GSa)) {
      this.puntiTrad = this.puntiTrad + 3;
    }
    if (parseInt(GFa) == parseInt(GSa)) {
      this.puntiTrad = this.puntiTrad + 1;
    }

    if (parseInt(GSa) == 0) {
      this.punti = this.punti + quotaCS;
    } else {
      if (parseInt(GSa) == 1) {
        this.punti = this.punti + 1.5;
      }
    }
    if (parseInt(GFa) > 0) {
      this.punti = this.punti + 1.3;
    }
  }
  getPunti() {
    return parseFloat(this.punti);
  }
  getPuntiTrad() {
    return parseInt(this.puntiTrad);
  }
  azzeraPunti() {
    this.punti=0;
  }
  azzeraPuntiTrad() {
    this.puntiTrad=0;
  }
};

var Inter = new Squadra();
var Juve = new Squadra();
var Napoli = new Squadra();
var Milan = new Squadra();
var Lazio = new Squadra();
var Benevento = new Squadra();
var Sampdoria = new Squadra();
var Roma = new Squadra();
var Hellas = new Squadra();
var Torino = new Squadra();
var Atalanta = new Squadra();
var Spal = new Squadra();
var Crotone = new Squadra();
var Chievo = new Squadra();
var Fiorentina = new Squadra();
var Udinese = new Squadra();
var Genoa = new Squadra();
var Sassuolo = new Squadra();
var Cagliari = new Squadra();
var Bologna = new Squadra();

function partita(squadra1, squadra2, goal1, goal2) {
  console.log("partita");
  console.log(squadra1);
  if (squadra1 == "Inter") {
    Inter.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Napoli") {
    Napoli.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "juventus" || squadra1 == "juve") {
    Juve.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Lazio") {
    Lazio.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Milan") {
    Milan.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Torino") {
    Torino.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Sampdoria") {
    Sampdoria.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Roma") {
    Roma.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Fiorentina") {
    Fiorentina.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Cagliari") {
    Cagliari.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Atalanta") {
    Atalanta.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "ChievoVerona" || squadra1 == "Chievo" || squadra1 == "Chievoverona") {
    Chievo.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Bologna") {
    Bologna.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Spal") {
    Spal.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Udinese") {
    Udinese.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Genoa") {
    Genoa.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Sassuolo") {
    Sassuolo.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Crotone") {
    Crotone.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Hellas Verona" || squadra1 == "Hellas" || squadra1 == "Verona") {
    Hellas.aggiungipartita(goal1, goal2);
  }
  if (squadra1 == "Benevento") {
    Benevento.aggiungipartita(goal1, goal2);
  }
  if (squadra2 == "Inter") {
    Inter.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Napoli") {
    Napoli.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "juventus" || squadra2 == "juve") {
    Juve.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Lazio") {
    Lazio.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Milan") {
    Milan.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Torino") {
    Torino.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Sampdoria") {
    Sampdoria.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Roma") {
    Roma.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Fiorentina") {
    Fiorentina.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Cagliari") {
    Cagliari.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Atalanta") {
    Atalanta.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "ChievoVerona" || squadra2 == "Chievo" || squadra2 == "Chievoverona") {
    Chievo.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Bologna") {
    Bologna.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Spal") {
    Spal.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Udinese") {
    Udinese.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Genoa") {
    Genoa.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Sassuolo") {
    Sassuolo.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Crotone") {
    Crotone.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Hellas Verona" || squadra2 == "Hellas" || squadra2 == "Verona") {
    Hellas.aggiungipartita(goal2, goal1);
  }
  if (squadra2 == "Benevento") {
    Benevento.aggiungipartita(goal2, goal1);
  }
}
