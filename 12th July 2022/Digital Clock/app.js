var hourValue= document.getElementById("hour");
var minuteValue= document.getElementById("minute");
var secondsValue = document.getElementById("seconds");
var am_pm= document.getElementById("ampm");

function updateClock(){
    const date= new Date();
    var h = date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var ampm= 'AM';
    if (h>12){
        h=h-12;
    if(h<10)
    {
        h='0'+ h;
    }
        ampm='PM'
    }
    if(m<10)
    {
        m='0'+ m;
    }
    if(s<10)
    {
        s='0'+ s;
    }
    hourValue.innerText=h;
    minuteValue.innerText=m;
    secondsValue.innerText=s;
    am_pm.innerText=ampm;
}


setInterval(updateClock,1000);





