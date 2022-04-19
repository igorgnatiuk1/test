(() => {

    const menuBtnRef = document.querySelector("[data-menu-button]");
    const modalBackdrop = document.querySelector("[modal]");
    const hidden = document.querySelector("[hidden-menu]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    const searchBtn = document.querySelector("[btn-search]");
    const searchBackdrop = document.querySelector("[backdrop]");
    const searchMenu = document.querySelector("[search]");

    

      menuBtnRef.addEventListener("click", () => {
     const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
      mobileMenuRef.classList.toggle("is-open");
      modalBackdrop.classList.toggle("is-open");
      hidden.classList.toggle("is-open");
    });
    modalBackdrop.addEventListener("click", (e) => {
       if(e.target === modalBackdrop){
        modalBackdrop.classList.remove("is-open"); 
        menuBtnRef.classList.remove("is-open"); 
        mobileMenuRef.classList.remove("is-open");
        hidden.classList.remove("is-open");
       }  
});
searchBtn.addEventListener("click", () =>{
const expanded = searchBtn.getAttribute("aria-expanded") === "true" || false;
searchBtn.setAttribute("aria-expanded", !expanded);
searchBtn.classList.toggle("is-open");
searchBackdrop.classList.toggle("is-open");
searchMenu.classList.toggle("is-open");
hidden.classList.toggle("is-open");

});
    })();
   