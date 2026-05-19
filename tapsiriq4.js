
const eded = 8;
let faktorial = 1;

for (let i = 1; i <= eded; i++) {
    faktorial = faktorial * i;
}


const neticeParaqrafi = document.getElementById('faktorialNetice');

neticeParaqrafi.textContent = "8 ədədinin faktorialı: " + faktorial;
