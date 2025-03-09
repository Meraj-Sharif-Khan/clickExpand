const images = document.querySelectorAll(".pizza--img")

console.log(images);

images.forEach(image =>{
    image.addEventListener("click", ()=>{
        removeActive()
        image.classList.toggle("img__active")
    })
})

function removeActive(){
    images.forEach(image =>{
        image.classList.remove("img__active")
})

}