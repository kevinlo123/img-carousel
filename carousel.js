/*when the user clicks skip the image carousel will go through different image sources*/

var myPictures = ["pictures/liukang.png","pictures/Raiden.png",
"pictures/Scorpion.png","pictures/Shangtsung.png","pictures/Smoke.png"]

var indexCount = 0;

  $("#back").on("click",function(){
    if(indexCount == 0){
      indexCount = myPictures.length-1;
    }
    else{
      indexCount = indexCount -1;
    }
  $("img").attr("src", myPictures[indexCount]);
  var audio = document.getElementById("audio");
  audio.play();
});

$("#skip").on("click",function(){
  if(indexCount == 4){
    indexCount = myPictures.length - 5;
  }
  else{
    indexCount = indexCount +1;
  }
$("img").attr("src", myPictures[indexCount]);
var audio = document.getElementById("audio");
audio.play();
});

window.onload = function() {
    document.getElementById("#audio").play();
}
