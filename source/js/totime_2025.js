var i = 0;
function Time(){
    var totime = 1738080000000;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var day = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timestamp = new Date().getTime() ;
    var waytime = totime-timestamp;
    var wayday = Math.round(waytime /1000 / 60 / 60 /24);
    var waysec = Math.round(waytime/1000)
    function topage(){
        if (waysec == 0) {
            var choose = confirm("恭喜！你真的在此页面等到了过年的那一刻！点击”确定“按钮前往一个视频的页面！点击“取消”刷新网页")
            if (choose == true) {
                window.location.href = "https://www.bilibili.com/video/BV1zZ4y1d7jH";
                console.log("这是真的！！！");
            }
            else {
                alert("记得访问 https://www.bilibili.com/video/BV1zZ4y1d7jH ！");
                window.location.href = ""
            }
        };
        if (waysec <= 0) {
            document.getElementById("tovideo").href="https://www.bilibili.com/video/BV1zZ4y1d7jH"
            document.getElementById("tovideo").innerHTML="现在你可以点击它了"
            document.getElementById("totimeinfo").innerHTML = "2025/01/29 00:00:00已过去"
        };
    };
    document.getElementById("nowtime").innerHTML="现在时间："+year+"年"+month+"月"+day+"日"+hours+":"+minutes+":"+seconds;
    document.getElementById("sec").innerHTML="秒数："+waysec;
    document.getElementById("day").innerHTML="天数："+wayday;
    setTimeout(topage,1000);
};
function Time_2() {
    var totime_2 = 1735660800000;
    var timestamp_2 = new Date().getTime();
    var waytime_2 = totime_2-timestamp_2;
    var wayday_2 = Math.round(waytime_2 /1000 / 60 / 60 /24);
        var waysec_2 = Math.round(waytime_2/1000);
        //waysec_2没定义，才发现整个程序在一个函数里（666）
        //整个计算程序就是一个大函数
        if (waysec_2 <= 0) {
            document.getElementById("totimeinfo_2").innerHTML = "2025/01/01 00:00:00已过去"
        };
        document.getElementById("sec_2").innerHTML="秒数："+waysec_2;
        document.getElementById("day_2").innerHTML="天数："+wayday_2;
};
setTimeout(Time,1);
setInterval(Time,1000);
setTimeout(Time_2,1);
setInterval(Time_2,1000);