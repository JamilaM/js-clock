let sec = document.querySelector(".secHand");
let mins = document.querySelector(".minHand");
let hr = document.querySelector(".hrHand");
let digitclock = document.querySelector(".time");


//calculate degrees rotate
//add interval
//apply to hand


function secCal() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    
    const secDeg = (seconds/60) * 360;
    
    const min = now.getMinutes();
    
    const minDeg = (min/60) * 360;
    
    const hour = now.getHours();
    
    const hrDeg = (hour/12) * 360;
    
    sec.style.transform =
    `rotate(${secDeg}deg)`;
    
    mins.style.transform = `rotate(${minDeg}deg)`;
    
    hr.style.transform = `rotate(${hrDeg}deg)`;
    
    
        
    
    if(secDeg === 0){
        sec.style.transition = "all 0.0s";
        sec.style.transition = "none";
    }
    else {
        sec.style.transition = "all 0.2s cubic-bezier(0.1, 2.7, 0.58, 1)";
    }
    
    digitclock.innerHTML = now.toLocaleTimeString();
    
}

setInterval(secCal, 1000);



