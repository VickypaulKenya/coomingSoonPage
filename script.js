const countdown = document.getElementById("countdown");
const days = document.getElementById("days");
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const countDate = new Date("Dec 31,  2023 23:59:59").getTime();

const x=setInterval(function() {
    const now = new Date().getTime();
    const distance = countDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor(distance % ((1000 * 60 * 60 * 24))/(1000*60*60));
    const m = Math.floor((distance % (1000 * 60 * 60))/(1000*60));
    const s = Math.floor(distance % (1000 * 60)) / 1000;
    
    days.innerHTML = `${d.toFixed()} d`;
    hrs.innerHTML = `${h.toFixed()} h`;
    min.innerHTML = `${m.toFixed() } m`;
    sec.innerHTML = `${s.toFixed()} s`;
  

    if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "expired";
    }


}, 1000);