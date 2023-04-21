const dane = require('./dane')

function wyswietlLiczby(...argumenty) {
  console.log(argumenty);
}
wyswietlLiczby(4, 6, 7, 9, 0, 2); // [4, 6, 7, 9, 0, 2]

function sumator(...args){
    suma = 0;
    args.forEach(element => {
       suma+=element; 
    });
    console.log("Suma liczb: " + args + " wynosi: " + suma);
}

sumator(1,2,3)


console.log("------------------------")
function zad2_2(args){
    args.forEach(element => {
        console.log(element.tekst);
    });

    const newArray = args.map(x=>x.tekst)
    console.log("Nowa tablica: " + newArray)


    const zrealizowane = args.filter(x=>x.zrealizowano===true).map(x=>x.tekst)
    console.log("Zrealizowane zadania: " + zrealizowane)

}

zad2_2(dane.listaZadan)

console.log("--------------------------")
function zad2_3(){
    const czynnosc = dane.poniedzialek.concat(dane.wtorek)
    .map(x=>x.czas/60)
    .filter(x=>x>2)
    .map(x=>x*35)
    .reduce((acc,v)=>[(+acc)+(+v)])
    .map(x=>x+",00 PLN")
    .reduce((acc,x)=>x)

    console.log(czynnosc)
}
zad2_3()