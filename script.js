/*let parolaInserita = (prompt ("Inserisci una parola"));
console.log(parolaInserita)
let message

let parolaReverse = parolaInserita.split("").reverse().join("")

if (parolaReverse === parolaInserita){
    message = "La tua parola è palindroma";
} else{
    message = "La tua parola non è palindroma";
}
console.log(message);*/



let parolaInserita = (prompt ("Inserisci una parola"));
let message;
let parolaReverse = parolaInserita.split("").reverse().join("");


console.log('La parola scelta'+parolaInserita+'è'+isPali);

function isPali(parolaInserita){
    if (parolaReverse === parolaInserita){
        return true;
    }else{
        return false;
    }
}
