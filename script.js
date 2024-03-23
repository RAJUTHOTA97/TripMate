
// let scrollcontainer=document.querySelector("gallery")
// let backbtn=document.getElementsByClassName("backbtn")[0]
// // let frontbtn=document.getElementsById("frontbtn")
// let frontbtn=document.getElementsByClassName("frontbtn")[0]
//  console.log(backbtn)
//  console.log(frontbtn)


 
 

 
 
// scrollcontainer.addEventListener("wheel",(evt)=>{

// evt.preventDefault()

// scrollcontainer.scrollLeft+=evt.deltaY;

// });

// backbtn.addEventListener("click",()=>{
//     console.log("clicked")
//     scrollcontainer.style.scrollBehavior="soomth"
//     scrollcontainer.scrollLeft-=300;
// });
// frontbtn.addEventListener("click",()=>{
//     console.log("clicked")
//     scrollcontainer.style.scrollBehavior="soomth"
//     scrollcontainer.scrollLeft+=300;
// });

// searchbar.addEventListener("change",(e)=>{
//     e.preventDefault()
      
//     console.log(e)
      


// });
 
  
    


// Assuming "gallery" is a class
let scrollcontainer = document.querySelector(".gallery");
let backbtn = document.querySelector(".backbtn");
let frontbtn = document.querySelector(".frontbtn");

console.log(backbtn);
console.log(frontbtn);

scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
});

backbtn.addEventListener("click", () => {
    console.log("Back button clicked");
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= 300;
});

frontbtn.addEventListener("click", () => {
    console.log("Front button clicked");
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += 300;
});

 
