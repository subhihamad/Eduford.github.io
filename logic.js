//burger icon
let burgerIcon=document.querySelector(".burger");
let links=document.querySelector(".linkes");
burgerIcon.addEventListener("click",e=>{
    links.classList.add("active");
})

//close icon
let closeIcon=document.querySelector(".close");
closeIcon.addEventListener("click",e=>{
    links.classList.remove("active");

})


