const modal=document.querySelector(".modal");
const overylay=document.querySelector(".overlay");
// open modal function
const openmodal=()=>{
    console.log('modal is open');
    modal.classList.add("active");
    overylay.classList.add("overlayactive");
};


// close modal

const closemodal=()=>{
modal.classList.remove("active");
overylay.classList.remove("overlayactive")
};