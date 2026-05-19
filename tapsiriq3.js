
const sayGosterici = document.getElementById('sayGosterici');
const artirBtn = document.getElementById('artirBtn');
const azaltBtn = document.getElementById('azaltBtn');

let say = 0;

artirBtn.onclick = function() {
    say = say + 1; 
    sayGosterici.textContent = say; 
};

azaltBtn.onclick = function() {
    say = say - 1;
    sayGosterici.textContent = say; 
};
