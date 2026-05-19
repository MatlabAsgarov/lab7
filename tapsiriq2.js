
const eded1Input = document.getElementById('eded1');
const eded2Input = document.getElementById('eded2');
const toplaBtn = document.getElementById('toplaBtn');
const cixBtn = document.getElementById('cixBtn');
const cavabP = document.getElementById('cavab');

toplaBtn.onclick = function() {
   
    const sayi1 = Number(eded1Input.value);
    const sayi2 = Number(eded2Input.value);
    
    const netice = sayi1 + sayi2;
    cavabP.textContent = "Cavab: " + netice;
};

cixBtn.onclick = function() {
    const sayi1 = Number(eded1Input.value);
    const sayi2 = Number(eded2Input.value);
    
    const netice = sayi1 - sayi2;
    cavabP.textContent = "Cavab: " + netice;
};
