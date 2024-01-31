
// TOBII JS 
try {
    const tobii = new Tobii();
} catch (err) {
    console.log(err);
}

// FUNCTION CALLING
scrollMode();


// TYPED JS
// var typed = new Typed("#typed", {
//     strings: ["Business.", "Startups.", "Marketing.", "Digital Agency."],
//     typeSpeed: 70,
//     backSpeed: 70,
//     backDelay: 2000,
//     loop: true
// });


// DARK AND LIGHT MODE 
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
});
try {
    function changeTheme(e) {
        e.preventDefault();

        const htmlTag = document.getElementsByTagName("html")[0]

        if (htmlTag.className.includes("dark")) {
            htmlTag.className = 'light'
        } else {
            htmlTag.className = 'dark'
        }
        console.log("working");
    }
    const check = document.getElementById('chk');
    check.addEventListener('click', changeTheme);

} catch (err) {
    console.log("Error");
}


// HAMBURGER NAV MENU
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {

    menu.classList.toggle('hidden');
    // menu.classList.toggle('hidden');
    console.log("working");

})

// SCROLL NAV FUNCTION DEFINITION
function scrollMode() {
    const navbar = document.getElementById("navbar");
    const whiteLogo = document.getElementById("whiteLogo");
    const blackLogo = document.getElementById("blackLogo");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset >= 75) {

            navbar.classList.add("lg:bg-white");
            navbar.classList.add("dark:bg-slate-900");
            navbar.classList.remove("dark:bg-transparent");
            navbar.classList.remove("lg:text-white");
            navbar.classList.remove("lg:bg-transparent");
            blackLogo.classList.remove("lg:hidden");
            whiteLogo.classList.add("lg:hidden");


        } else {
            navbar.classList.add("dark:bg-transparent");
            navbar.classList.remove("dark:bg-slate-900");
            navbar.classList.add("lg:bg-transparent");
            navbar.classList.remove("lg:bg-white");
            navbar.classList.add("lg:text-white");
            blackLogo.classList.add("lg:hidden");
            whiteLogo.classList.remove("lg:hidden");
        }

    })
}


/*   Back To Top     */
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var mybutton = document.getElementById("backToTop");
    if(mybutton!=null){
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.classList.add("block");
            mybutton.classList.remove("hidden");
        } else {
            mybutton.classList.add("hidden");
            mybutton.classList.remove("block");
        }
    }
}

document.getElementById("backToTop").addEventListener('click', ()=>{
    // document.body.scrollTop = 0;
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
    // document.documentElement.scrollTop = 0;
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
});
