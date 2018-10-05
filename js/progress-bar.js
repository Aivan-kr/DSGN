$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
        a();
        b();
        c();
      }
    });
  }); 
   
var flaga = true;
var flagb = true;
var flagc = true;
function a(){
var canvas = document.getElementById("projects");
var context = canvas.getContext("2d");
var al = 0;
var desc = "Big projects";
var barColor = "red";
var np = 50;

  function progressBar() {
    var start = 1;
    var diff;
    var cw = context.canvas.width / 2;
    var ch = context.canvas.height / 2;
    diff = al / 100 * Math.PI * 2;
    context.clearRect(0, 0, 220, 220);
    context.beginPath();
    context.arc(cw, ch, cw - 5, 0, 2 * Math.PI, false);
    context.fillStyle = "#FFF";
    context.fill();
    context.strokeStyle = "#e5e5e5";
    context.stroke();
    context.fillStyle = barColor;
    context.strokeStyle = barColor;
    context.textAlign = "center";
    context.lineWidth = 5;
    context.font = "bold 72px Quicksand";
    context.beginPath();
    context.arc(cw, ch, cw - 5, start, diff + start, false);
    context.stroke();
    context.fillText(al, cw + 2, ch);
    context.font = "bold 18px Quicksand";
    context.fillStyle = "grey";
    context.fillText(desc.toUpperCase(), cw + 2, ch + 40);
    if (al >= np) {
      clearTimeout(bar);
    }
    al++;
}
if (flaga) {
var bar = setInterval(progressBar, 10);
flaga = false;
}
};



function b(){
var canvas = document.getElementById("clients");
var context = canvas.getContext("2d");
var al = 0;
var desc = "Clients";
var barColor = "#009989";
var np = 35;

  function progressBar() {
    var start = 1;
    var diff;
    var cw = context.canvas.width / 2;
    var ch = context.canvas.height / 2;
    diff = al / 100 * Math.PI * 2;
    context.clearRect(0, 0, 220, 220);
    context.beginPath();
    context.arc(cw, ch, cw - 5, 0, 2 * Math.PI, false);
    context.fillStyle = "#FFF";
    context.fill();
    context.strokeStyle = "#e5e5e5";
    context.stroke();
    context.fillStyle = barColor;
    context.strokeStyle = barColor;
    context.textAlign = "center";
    context.lineWidth = 5;
    context.font = "bold 72px Quicksand";
    context.beginPath();
    context.arc(cw, ch, cw - 5, start, diff + start, false);
    context.stroke();
    context.fillText(al, cw + 2, ch);
    context.font = "bold 18px Quicksand";
    context.fillStyle = "grey";
    context.fillText(desc.toUpperCase(), cw + 2, ch + 40);
    if (al >= np) {
      clearTimeout(bar);
    }
    al++;
}
if (flagb) {
var bar = setInterval(progressBar, 10);
flagb = false;
}
};

function c(){
var canvas = document.getElementById("months");
var context = canvas.getContext("2d");
var al = 0;
var desc = "Months";
var barColor = "#152b3c";
var np = 80;

  function progressBar() {
    var start = 1;
    var diff;
    var cw = context.canvas.width / 2;
    var ch = context.canvas.height / 2;
    diff = al / 100 * Math.PI * 2;
    context.clearRect(0, 0, 220, 220);
    context.beginPath();
    context.arc(cw, ch, cw - 5, 0, 2 * Math.PI, false);
    context.fillStyle = "#FFF";
    context.fill();
    context.strokeStyle = "#e5e5e5";
    context.stroke();
    context.fillStyle = barColor;
    context.strokeStyle = barColor;
    context.textAlign = "center";
    context.lineWidth = 5;
    context.font = "bold 72px Quicksand";
    context.beginPath();
    context.arc(cw, ch, cw - 5, start, diff + start, false);
    context.stroke();
    context.fillText(al, cw + 2, ch);
    context.font = "bold 18px Quicksand";
    context.fillStyle = "grey";
    context.fillText(desc.toUpperCase(), cw + 2, ch + 40);
    if (al >= np) {
      clearTimeout(bar);
    }
    al++;
}
if(flagc){
var bar = setInterval(progressBar, 10);
flagc = false;
}
};
