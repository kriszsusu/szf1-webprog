function emailCimetGeneral(nev, ev) {
    let output="";
    nev.split(' ').forEach(el => {
        // koszi random user stackoverflow-n
        output += el.substring(0,3).normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
    });
    output += `${ev.toString().substring(ev.length-1,ev.length)}@kacsa.hu`;
    return output;
}

function compFn(a, b) {
    return a - b;
}

function filter(arr, x) {
    arr = arr.filter(i => i !== x);
    return arr;
}

function egyszamjatek(numbers) {
    let temp = [...numbers];
    temp.sort(compFn).reverse();
    while (temp[0] === temp[1] && temp.length > 1) {
        temp = filter(temp, temp[0]);
        temp.sort(compFn).reverse();
    }
    return temp[0] ? temp[0] : -1;
}


const kacsa = document.getElementById("kacsa");
const egyszam = document.getElementById("egyszam");
kacsa.onsubmit = (e)=>{
    e.preventDefault();
    let nev = document.getElementById("name").value;
    let ev = document.getElementById("year").value;
    document.querySelector("#kacsa>.output").innerText = emailCimetGeneral(nev, ev);
}
egyszam.onsubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById("numbers").value.replace(/[\s;/]/g, ',').replace(/[\[\]]/g, ''); // xdd
    const numbers = input.split(',').map(Number).filter(num => !isNaN(num));
    const result = egyszamjatek(numbers);
    document.querySelector("#egyszam>.output").innerText = result;
};