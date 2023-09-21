const menuBtn  = document.querySelector('#menu-btn');
const slideMenu= document.querySelector('aside');
const closeBtn = document.querySelector('#closeBtn');
const themeSwitcher = document.querySelector(".switch-theme");
const sidelink = document.querySelectorAll(".sidebar ul li");
const windowPathName = window.location.pathname;

// show sidebar
menuBtn.addEventListener("click",()=>{
    slideMenu.style.display = "block";
})

// close sidebar
closeBtn.addEventListener("click",()=>{
    slideMenu.style.display = "none";
})

// switch theme dashboard
themeSwitcher.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme-details");

    themeSwitcher.querySelector("span:nth-child(1)").classList.toggle("active");
    themeSwitcher.querySelector("span:nth-child(2)").classList.toggle("active");
})

sidelink.forEach(sidelink =>{
    sidelink.addEventListener("click",()=>{
        document.querySelector(".active")?.classList.remove("active")
        sidelink.classList.add("active");
    })
})

// sidelink.forEach(sidelink => {
//     const navLinkPathname = new URL(sidelink.href).pathname;

//     if((windowPathName === navLinkPathname) || (windowPathName ==='/index.html') && navLinkPathname === '/'){
//         sidelink.classList.add('active');
//     }
// })



