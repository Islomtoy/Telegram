const asosiydiv = document.querySelector(".asosiy-div");
const menu = document.querySelector(".menu");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const menuback = document.querySelector("#menu-back");
const menubtn = document.querySelector("#menu-btn");
const navbarqism = document.querySelector(".navbar-qism");
const myprofile = document.querySelector(".my-profile");
const buttons = document.querySelector(".buttons");
const btncolor1 = document.querySelector(".btn-color");
const btncolor2 = document.querySelector(".btn-color2");
const btncolor3 = document.querySelector(".btn-color3");
const btncolor4 = document.querySelector(".btn-color4");
const btncolor5 = document.querySelector(".btn-color5");
const btncolor6 = document.querySelector(".btn-color6");
const btncolor7 = document.querySelector(".btn-color7");
const btncolor8 = document.querySelector(".btn-color8");
const btncolor9 = document.querySelector(".btn-color9");
const btncolor10 = document.querySelector(".btn-color10");
const border = document.querySelector("#border");
const border2 = document.querySelector(".button2");
const profilenumber = document.querySelector("#profile-number");
const storist = document.querySelector(".storist");
const storistitem = document.querySelector(".storist-item");
const storist1img = document.querySelector("#storist1-img");
const storistback = document.querySelector(".item-back");

//JILDLAR, GRUPPALAR , KANALLAR, VA CONTACTLAR ....ichidagi p//
const jild = document.querySelector(".jild");
const jildlar1 = document.querySelector("#jild-1");
const jildlar2 = document.querySelector("#jild-2");
const jildlar3 = document.querySelector("#jild-3");
const jildlar4 = document.querySelector("#jild-4");
const jildlar5 = document.querySelector("#jild-5");
const jildlar6 = document.querySelector("#jild-6");
//JILDLAR, GRUPPALAR , KANALLAR, VA CONTACTLAR//
//JILDLAR, GRUPPALAR , KANALLAR, VA CONTACTLAR ....Divlar//
const jild1 = document.querySelector(".jild1");
const jild2 = document.querySelector(".jild2");
const jild3 = document.querySelector(".jild3");
const jild4 = document.querySelector(".jild4");
const jild5 = document.querySelector(".jild5");
const jild6 = document.querySelector(".jild6");
const jild7 = document.querySelector(".jild7");
//JILDLAR, GRUPPALAR , KANALLAR, VA CONTACTLAR ....Divlar//

//NEWS CHANNELS, GROUP VA CONTACT YOZISHMALAR//
const news = document.querySelector(".news");
const channels = document.querySelector(".channels");
const groups = document.querySelector('.groups');
const contacts = document.querySelector('.contacts');
//NEWS - P .....!//
const newsP1 = document.querySelector("#news-p1");
const newsP2 = document.querySelector("#news-p2");
const newsP3 = document.querySelector("#news-p3");
const newsP4 = document.querySelector("#news-p4");
const newsP5 = document.querySelector("#news-p5");
const newsP6 = document.querySelector("#news-p6");
const newsP7 = document.querySelector("#news-p7");
const newsP8 = document.querySelector("#news-p8");
const newsP9 = document.querySelector("#news-p9");
const newsP10 = document.querySelector("#news-p10");



//Jild 1 o'zgarishlar//
jildlar1.addEventListener("click",()=>{
    jild6.style = "border:none";
    jildlar6.style = "color:rgba(232, 232, 232, 0.753)";
    jild5.style = "border:none";
    jildlar5.style = "color:rgba(232, 232, 232, 0.753)";
    jild4.style = 'border:none';
    jildlar4.style = "color:rgba(232, 232, 232, 0.753);";
    jildlar1.style = "color:white";
    jild1.style = "border-bottom: 5px solid white;border-radius: 0px 0px 5px 5px;";
    jildlar2.style = "color:rgba(232, 232, 232, 0.753);";
    jild2.style = 'border:none';
    jild3.style = "border:none";
    jildlar3.style = "color:rgba(232, 232, 232, 0.753)";
        //Channels//
        news.style.display = "block";
        channels.style.display = "none";
        groups.style.display = "none";
        contacts.style.display = "none";
    

})
//Jild 1 o'zgarishlar//

//Jild 2 o'zgarishlar//
jildlar2.addEventListener("click",()=>{
    jild6.style = "border:none";
    jildlar6.style = "color:rgba(232, 232, 232, 0.753)";
    jild5.style = "border:none";
    jildlar5.style = "color:rgba(232, 232, 232, 0.753)";
    jild4.style = 'border:none';
    jildlar4.style = "color:rgba(232, 232, 232, 0.753);";
    jildlar2.style = "color:white";
    jild2.style = "border-bottom: 5px solid white;border-radius: 0px 0px 5px 5px;";
    jildlar1.style = "color:rgba(232, 232, 232, 0.753);";
    jild1.style = 'border:none';
    jild3.style = "border:none";
    jildlar3.style = "color:rgba(232, 232, 232, 0.753)";
    //Channels//
    news.style.display = "none";
    channels.style.display = "block";
    groups.style.display = "none";
    contacts.style.display = "none";

})
//Jild 2 o'zgarishlar//

//Jild 3 o'zgarishlar//
jildlar3.addEventListener("click",()=>{
    jild6.style = "border:none";
    jildlar6.style = "color:rgba(232, 232, 232, 0.753)";
    jild5.style = "border:none";
    jildlar5.style = "color:rgba(232, 232, 232, 0.753)";
    jild4.style = 'border:none';
    jildlar4.style = "color:rgba(232, 232, 232, 0.753);";
    jildlar3.style = "color:white";
    jild1.style = 'border:none';
    jildlar1.style = "color:rgba(232, 232, 232, 0.753);";
    jild3.style = "border-bottom: 5px solid white;border-radius: 0px 0px 5px 5px;";
    jildlar2.style = "color:rgba(232, 232, 232, 0.753);";
    jild2.style = 'border:none';
    //Groups//
    news.style.display = "none";
    channels.style.display = "none";
    groups.style = "display:block";
    contacts.style.display = "none";
})
//Jild 3 o'zgarishlar//

//Jild 4 o'zgarishlar//
jildlar4.addEventListener("click",()=>{
    jild5.style = "border:none";
    jildlar5.style = "color:rgba(232, 232, 232, 0.753)";
    jildlar4.style = "color:white";
    jild1.style = 'border:none';
    jildlar1.style = "color:rgba(232, 232, 232, 0.753);";
    jild3.style = 'border:none';
    jildlar3.style = "color:rgba(232, 232, 232, 0.753);";
    jild4.style = "border-bottom: 5px solid white;border-radius: 0px 0px 0px 5px;";
    jildlar2.style = "color:rgba(232, 232, 232, 0.753);";
    jild2.style = 'border:none';
    

    //Channels//
    news.style.display = "none";
    channels.style.display = "none";
    groups.style = "display:none";
    contacts.style.display = "block";


})
//Jild 4 o'zgarishlar//

//Jild 5 o'zgarishlar//
jildlar5.addEventListener("click", ()=>{
    jild6.style = "border:none";
    jildlar6.style = "color:rgba(232, 232, 232, 0.753)";
    jildlar5.style = "color:white";
    jild5.style = "border-bottom: 5px solid white;border-radius: 0px 0px 5px 5px;";
    jild4.style = 'border:none';
    jildlar4.style = "color:rgba(232, 232, 232, 0.753);";
    jild3.style = 'border:none';
    jildlar3.style = "color:rgba(232, 232, 232, 0.753);";
    jild2.style = 'border:none';
    jildlar2.style = "color:rgba(232, 232, 232, 0.753);";
    jild1.style = 'border:none';
    jildlar1.style = "color:rgba(232, 232, 232, 0.753);";
})
//Jild 5 o'zgarishlar//
//Jild 6 o'zgarishlar//
jildlar6.addEventListener("click", ()=>{
    jild5.style = "border:none";
    jildlar5.style = "color:rgba(232, 232, 232, 0.753)";
    jildlar6.style = "color:white";
    jild6.style = "border-bottom: 5px solid white;border-radius: 0px 0px 5px 5px;";
    jild4.style = 'border:none';
    jildlar4.style = "color:rgba(232, 232, 232, 0.753);";
    jild3.style = 'border:none';
    jildlar3.style = "color:rgba(232, 232, 232, 0.753);";
    jild2.style = 'border:none';
    jildlar2.style = "color:rgba(232, 232, 232, 0.753);";
    jild1.style = 'border:none';
    jildlar1.style = "color:rgba(232, 232, 232, 0.753);";
})
//Jild 6 o'zgarishlar//




menuback.addEventListener("click", () =>{
    menu.style = "margin-left:-385px";
// asosiydiv.addEventListener("click", () =>{
//     menu.style = "margin-left:110px";
})
menubtn.addEventListener("click", () =>{
    menu.style = "margin-left:0px";
    
})
moon.addEventListener("click", ()=>{
    navbarqism.style = "background:black";
    storist.style = "background:black";
    myprofile.style = "background:black";
    moon.style.display = "none";
    sun.style.display = "block";
    buttons.style = "background: rgb(40, 40, 40);"
    btncolor1.style = "color:white";
    btncolor2.style = "color:white";
    btncolor3.style = "color:white";
    btncolor4.style = "color:white";
    btncolor5.style = "color:white";
    btncolor6.style = "color:white";
    btncolor7.style = "color:white";
    btncolor8.style = "color:white";
    btncolor9.style = "color:white";
    btncolor10.style = "color:white";
    border.style = "background:rgb(77,77,77)";
    border2.style = "border-bottom: 2px solid rgb(77,77,77);";
    profilenumber.style = "color:rgb(130, 145, 163);";
    jild.style = "background:black";
    //News//
    news.style = "background: rgba(24, 25, 25, 0.922);";
    newsP1.style = "color:white";
    newsP2.style = "color:white";
    newsP3.style = "color:white";
    newsP4.style = "color:white";
    newsP5.style = "color:white";
    newsP6.style = "color:white";
    newsP7.style = "color:white";
    newsP8.style = "color:white";
    newsP9.style = "color:white";
    newsP10.style = "color:white";


})
sun.addEventListener("click", ()=>{
    navbarqism.style = "background:#5490cd;";
    storist.style = "background:#5490cd";;
    myprofile.style = "background:#5490cd;";
    moon.style.display = "block";
    sun.style.display = "none";
    buttons.style = "background: rgb(255, 255, 255);"
    btncolor1.style = "color:rgb(77, 77, 77);";
    btncolor2.style = "color:rgb(77, 77, 77);";
    btncolor3.style = "color:rgb(77, 77, 77);";
    btncolor4.style = "color:rgb(77, 77, 77);";
    btncolor5.style = "color:rgb(77, 77, 77);";
    btncolor6.style = "color:rgb(77, 77, 77);";
    btncolor7.style = "color:rgb(77, 77, 77);";
    btncolor8.style = "color:rgb(77, 77, 77);";
    btncolor9.style = "color:rgb(77, 77, 77);";
    btncolor10.style = "color:rgb(77, 77, 77);";
    border.style = "background: rgb(77, 141, 194);";
    border2.style = "border-bottom: 2px solid rrgb(77, 141, 194);";
    profilenumber.style = "color:rgb(183, 216, 254);";
    jild.style = "background:#5490cd";
        //News//
        news.style = "background:white";
        //News - p .....//
        newsP1.style = "color:black";
        newsP2.style = "color:black";
        newsP3.style = "color:black";
        newsP4.style = "color:black";
        newsP5.style = "color:black";
        newsP6.style = "color:black";
        newsP7.style = "color:black";
        newsP8.style = "color:black";
        newsP9.style = "color:black";
        newsP10.style = "color:black";
         //News - p .....//




    
})
storist1img.addEventListener("click", ()=>{
    storistitem.style.display = "block";
})
storistback.addEventListener("click", ()=>{
    storistitem.style.display = "none";
})