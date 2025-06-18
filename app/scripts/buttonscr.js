    function repro() {
      const audio = document.getElementById("audior1");
      const ima = document.getElementById("r1");
      audio.currentTime = 0;
      audio.play();

      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;

        ima.style.display = "none";
      }, 5000);

      ima.style.display="block";
}


const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
    const inputt = document.getElementById("textodei").value.trim();
    const inputv = parseFloat(inputt);
    const selectv = document.getElementById("seldesex").value;

    if(inputv >= 60 && selectv === "hombre" || selectv === "mujer"){
        repro();
        console.log('hola1');
    }
    else if(inputv <= 59 && selectv === "hombre" || selectv === "mujer"){
        console.log('bueno');
    }
    else if(selectv === "no definido"){
        window.open("https://www.tiktok.com/@temach.officiial", "_blank");
    }
});