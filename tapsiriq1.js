const mesajInput = document.getElementById('mesaj');
const klikDuyme = document.getElementById('duyme');
const neticeP = document.getElementById('netice');

klikDuyme.onclick = function() {
    neticeP.textContent = mesajInput.value;
};