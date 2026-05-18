import { modalData,btnModal,template,container } from "../component/ModalData.js";

/* console.log(modalData[0].description[0]) */
function showModal(index){
    container.innerHTML="";

    /* console.log(modalData[index]) */
 const datos = modalData[index];

 const clone = template.content.cloneNode(true);
 
 const classModalotro = clone.querySelector(".shadow__popup");
 const closeModal = clone.querySelector(".pupup__cancel");

 let  title = clone.querySelector(".pupup__content-subtitle");
 let  descriptionTitle = clone.querySelector("#content__description-title");
 let  descriptionCaracteristic = clone.querySelector("#content-description-characteristics");
 let  descriptionAchiviement = clone.querySelector("#content__description-achievements");
 let  descriptionsumary = clone.querySelector("#content__description-summary");
 let  modaLink= clone.querySelector(".button__visit");
 
 title.textContent = datos.title;
 descriptionTitle.textContent = datos.description[0];
 descriptionCaracteristic.textContent = datos.description[1];
 descriptionAchiviement.textContent = datos.description[2];
 descriptionsumary.textContent = datos.description[3];
 modaLink.href = datos.link;
 
 container.appendChild(clone);
 
 classModalotro.classList.remove("popup__close")

 closeModal.addEventListener("click",()=>{
   handleClose(classModalotro);
 })

 document.addEventListener('keydown',function(event){
    if(event.key === "Escape"){
    handleClose(classModalotro);
    }
})
}

function handleClose(classClose){  
if(!classClose.classList.contains("popup__close")){
    classClose.classList.add("popup__close");
}
    
}


btnModal.forEach(boton=>{
    boton.addEventListener("click",()=>{
        const index = boton.dataset.index;
        showModal(index)
    })
})