/***ZADÁNÍ 1.***/
/*
Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv. Letopočet je přestupný, pokud je dělitelný čtyřmi. Roky, které jsou dělitelné 100 jsou ovšem přestupné pouze tehdy, jsou-li zároveň dělitelné 400.
*/



/***ŘEŠENÍ 2.***/

/*
const year = Number(prompt('Zadej kalendarni rok'));

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      document.body.innerHTML += `<p>${year} je přestupný</p>`
    } else {
      document.body.innerHTML += `<p>${year} není přestupný</p>`
    }
  } else {
    document.body.innerHTML += `<p>${year} je přestupný</p>`
  }
} else {
  document.body.innerHTML += `<p>${year} není přestupný</p>`

}





/***ŘEŠENÍ 2.***/
/*
const year = Number(prompt('Zadej kalendářní rok:'));
let leap = 'není';

if (year % 100 === 0) {
  if (year % 400 === 0) {
    leap = 'je';
  }
} else if (year % 4 === 0) {
  leap = 'je';
}

document.body.innerHTML = `<p>${year} ${leap} přestupný</p>`;




/***ZADÁNÍ 2.***/
/*
Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv. Rozhodnutí v programu proveďte pouze pomocí jedné podmínky se dvěma větvemi. Nesmíte použít vnořené ani žádné další pomocné podmínky.
*/

/*
const year = Number(prompt('Zadej kalendarni rok'));

if ((year % 4 === 0 && year % 100 !== 0) ||
  (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)
) {
  document.body.innerHTML = `<p>${year} je přestupný rok</p>`;
} else {
  document.body.innerHTML = `<p>${year} není přestupný rok</p>`;
}





/***ZADÁNÍ 3.***/
/*
Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv.

Rozhodnutí v programu proveďte pouze pomocí jedné pomínky se dvěma větvemi. Nesmíte použít vnořené ani žádné další pomocné podmínky.
V celém programu smíte použít pouze dvě logické operace.
*/


/***ŘEŠENÍ 1.***/

// const year = Number(prompt('Zadej kalendářní rok:'));

// if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//   document.body.innerHTML = `<p>${year} je přestupný rok</p>`;
// } else {
//   document.body.innerHTML = `<p>${year} není přestupný rok</p>`;
// }

/***ŘEŠENÍ 2.***/
/*
const year = Number(prompt('Zadej kalendářní rok:'));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  document.body.innerHTML = `<p>${year} je přestupný rok</p>`;
} else {
  document.body.innerHTML = `<p>${year} není přestupný rok</p>`;
}
*/
/***ZADÁNÍ 4.***//* FUNKCE A OBORY PLATNOSTI*/

// Napište funkci isLeapYear, která jako svůj parametr obdrží celé číslo představující rok. Funkce vrátí true, pokud je zadaný rok přestupný. V opačném případě vrátí false.

const isLeapYear = (year) => {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    }
  } else if (year % 4 === 0) {
    return true;
  }
  return false;
}

console.log(isLeapYear(2024));