//function leadingZero (number) {
//
//   if (number < 10) {
//        return '0'+number;
//    } else {
//        return number;
//    }
//}

//var today = new Date();

//var formatTime = today.getHours() + ":" + today.getMinutes() + ":" + leadingZero(today.getSeconds());

//document.getElementById('clock').innerHTML = formatTime; !-->




var today = new Date();

var maanden = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'decemer'];

var formatDate = today.getDate() + "/" + maanden[today.getMonth()] + "/" + today.getFullYear();

document.getElementById('datum').innerHTML = formatDate;



//document.getElementById('clock').innerHTML = today.toString();

//document.getElementById('clock').innerHTML = today.getMonth() + 1;

//document.getElementById('clock').innerHTML = today.getYear(); // - 1900
//document.getElementById('clock').innerHTML = today.getFullYear();
// document.getElementById('clock').innerHTML = today.getDate();
// document.getElementById('clock').innerHTML = today.getDay();
//document.getElementById('clock').innerHTML = today.getHours();


//document.getElementById('clock').innerHTML = today.getMinutes();
//document.getElementById('clock').innerHTML = today.getSeconds();
//document.getElementById('clock').innerHTML = today.getMilliseconds();
//document.getElementById('clock').innerHTML = today.getTime();
