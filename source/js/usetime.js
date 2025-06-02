var stimer = 0;
function time() {
    stimer += 1;
    console.log("Timer:"+stimer);
    document.getElementById("timer").innerHTML="你已经查看了："+stimer+"秒";
}
setTimeout(time,1);
setInterval(time,1000);