var arabic=document.getElementById("arabic");
var english=document.getElementById("english");
var title=document.getElementById("title");
var welcome=document.getElementById("welcome");
var about=document.getElementById("about");
var contact=document.getElementById("contact");
var text=document.getElementById("text");

arabic.onclick=()=>{
   getlang("arabic");
   localStorage.setItem("lang","arabic");
}
english.onclick=()=>{
getlang("english");
localStorage.setItem("lang","english");
}
onload=()=>{
    getlang(localStorage.getItem("lang"));
}
function getlang(language){
if(language==="arabic"){
 title.innerHTML="ياسمينا البحري";
 welcome.innerHTML="اهلا بكم في مطبخ ياسمينا";
 about.innerHTML="من نحن";
 contact.innerHTML="تواصل معنا";
 text.innerHTML="مطبخ ياسمينا";
}else if(language==="english"){
    title.innerHTML="yasmina elbahri";
    welcome.innerHTML=" Welcome to Yasmina Kitchen";
    about.innerHTML=" About us";
 contact.innerHTML="Contact us";
 text.innerHTML="Yasmina Kitchen";
}
}