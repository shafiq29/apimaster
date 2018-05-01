var request = new XMLHttpRequest();
var url     = "http://api.openweathermap.org/data/2.5/weather?q=Dhaka,bd&units=metric&mode=html&appid=1cd2c042cb1028b6b747445f74f3e7da";
request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status === 200) {
            document.body.className = 'ok';
            console.log(request.responseText);
            document.getElementsByClassName("we")[0].innerHTML = request.responseText;
        } else if (!isValid(this.response) && this.status == 0) {
            document.body.className = 'error offline';
            console.log("The computer appears to be offline.");                
        } else {
            document.body.className = 'error';
        }
    }
};
request.open("GET", url , true);
request.send(null);