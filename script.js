document.addEventListener("DOMContentLoaded", function() {
    const tombolSapa = document.getElementById("hellooo");
    if (tombolSapa) {
        tombolSapa.addEventListener("click", function() {
            alert("Endless riddles, but the answer is nothing but a void.");
        });
    } else {
        console.error("Elemen dengan ID 'hellooo' tidak ditemukan.");
    }
});
