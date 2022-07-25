let sn = document.getElementById("saniye")
let fin = document.querySelector("h1")
let h = document.getElementById("saat")
let dk = document.getElementById("dakika")
let but = document.getElementById("buton")
let bitir = document.getElementById("finish")
let dur = document.getElementById("stop")
dur.addEventListener("click",wait)
but.addEventListener("click",start)
timerID = 0;
var stop = false;
function wait(){
   clearInterval(interval)
}
bitir.addEventListener("click", () => {
  clearInterval(interval)
  dakika.textContent = "00";
  saniye.textContent = "00";
  stop = true;
  if(stop == true){
  console.log("Durduruldu")
}
});

function start(){
  let dk = dakika.textContent;
  let sn = saniye.textContent;

  
   dakika.textContent = dk
   saniye.textContent = sn
   interval = setInterval(() => {
    
    sn++
     sn = sn < 10 ? "0" + sn : sn;
  
    if(sn == 60){
      dk++;
      sn = 00
      return;
    }
    if(dk == 60){
      h++;
     dk = 00;
     return;
    }
      
   dakika.textContent = dk
   saniye.textContent = sn
  },1000)
  
}
