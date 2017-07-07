for(let i = 1; i <= 55; i++) {
  setTimeout(function() {
 var time= new Date;
currentHour=time.getHours();
currentMinute=time.getMinutes();
currentSec=time.getSeconds();


console.log(currentMinute);
document.getElementById('place').innerHTML='<br>'+currentSec; 
 }, i*5000);
}