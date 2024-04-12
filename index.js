let hm = document.querySelector(".hm");
let menu = document.querySelector(".hm-menu");
let menuLoading = false;

hm.addEventListener("click", () => {
    if(menuLoading) return;

   if(menu.classList.contains("slide-left")) {
    menu.classList.remove("slide-left");
    menu.classList.add("menu-hidden");
    hm.classList.remove("crossed");
    hm.classList.add("stacked");
    document.querySelector(".sign-up").style.visibility = "visible";
    menuLoading = true;
   }
   else if (menu.classList.contains("menu-hidden")) {
    menu.classList.remove("menu-hidden");
    menu.classList.add("slide-left");
    hm.classList.remove("stacked");
    hm.classList.add("crossed");
    document.querySelector(".sign-up").style.visibility = "hidden";
    menuLoading = true;
   }
   setTimeout(() => {
    menuLoading = false;
}, 350);
});
