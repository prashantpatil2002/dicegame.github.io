 
var random1 = Math.floor(Math.random()*6)+1;
var image = "/images/dice" + random1 +".png";
var select = document.querySelectorAll("img")[0].setAttribute("src",image);
var random2 = Math.floor(Math.random()*6)+1;
var image1 = "/images/dice"+ random2 + ".png";
var select1 = document.querySelectorAll("img")[1].setAttribute("src",image1);
if(random1>random2){
    document.getElementById("h").textContent = "PLAYER   1   WINS!!";
}
else if(random1<random2){
     document.getElementById("h").innerHTML = "PLAYER   2   WINS!!";
}
else{
    document.getElementById("h").innerHTML =  "IT'S   A   DRAW!! LET'S PLAY AGAIN";

}
document.getElementById("chnc").innerHTML = i;
 
 