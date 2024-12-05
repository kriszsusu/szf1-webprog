document.getElementById('ellenoriz').addEventListener('click', function () {
    const n = document.getElementById('szam').value.trim();
    const r = document.getElementById('eredmeny');

    r.textContent = '';
    r.style.color = 'black';

    if (!/^\d{6}$/.test(n)) {
        r.textContent = 'Hiba: Pontosan 6 számjegyű számot adjon meg!';
        r.style.color = 'red';
        return;
    }

    const f = n.slice(0, 5).split('').map(Number);
    const l = Number(n[5]);

    let s = f.reduce((acc, num) => acc + num, 0);
    while (s >= 10) {
        s = s.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
    }

    if (s === l) {
        r.textContent = `Az összeg (${s}) megegyezik az utolsó számjeggyel.`;
        r.style.color = 'green';
    } else {
        r.textContent = `Az összeg (${s}) nem egyezik az utolsó számjeggyel (${l}).`;
        r.style.color = 'red';
    }
});
