// let btn1=document.querySelector("#btn1");

// btn1.addEventListener("click",(evt)=>
// {
//     console.log("button clicked");
//     console.log(evt);
// });

// btn1.addEventListener("click",()=>
// {
//     console.log("button clicked 2nd times");
// });
let chbtn=document.querySelector(".change-mode");
currmode="light";
chbtn.addEventListener("click",()=>
{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    } else{
        currmode="light";
         document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currmode);
}
);
