var ans=prompt("Welcome to my resume page.Please type in your name");
alert("Click on Okay "+ ans.toUpperCase() +"! Have a look at my resume.")
document.querySelector(".aniw").addEventListener("click",buttonanim);
function buttonanim(){
  var s= document.querySelector(".aniw");

 s.classList.add("ani");
  setTimeout(function(){
    s.classList.remove("ani");
  })

}
document.querySelector(".inter").addEventListener("click",handleclick);
document.querySelector(".notinter").addEventListener("click",notint);
function handleclick(){
var ans1=  prompt("Glad you are interested.Give your phone number.we will contact you soon")
alert(" I got your number "+ans.toUpperCase()+" "+ans1+ " . I will soon contact you.");
}
function notint(){
  var audio=new Audio("/Users/abhishek/Downloads/public/images/Thankyou.mp3");
  audio.play();
  alert("thank you for your time "+ans.toUpperCase()+" .");
}
