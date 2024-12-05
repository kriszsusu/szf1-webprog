const gomb = document.getElementById('szamit');

gomb.addEventListener('click', function () {
    const ao = document.getElementById('ao').value.trim();
    const bo = document.getElementById('bo').value.trim();
    const kdiv = document.getElementById('kerulet');

    if (ao === '' || bo === '') {
        kdiv.textContent = 'Hiba: Az összes oldal hosszát meg kell adni!';
        kdiv.style.color = 'red';
        return;
    }

    const a = parseFloat(ao);
    const b = parseFloat(bo);

    if (isNaN(ao) || isNaN(bo) || ao <= 0 || bo <= 0) {
        kdiv.textContent = 'Hiba: Érvényes, pozitív számokat kell megadni!';
        kdiv.style.color = 'red';
        return;
    }

    const kerulet = 2 * (a + b);

    kdiv.textContent = `A téglalap kerülete: ${kerulet}`;
    kdiv.style.color = 'black';
});