// Active Navbar
       let nav = document.querySelector(".navigation-wrap");
       window.onscroll = function () {
            if(document.documentElement.scrollTop > 1){
                nav.classList.add("scroll-on");
            }
            else{
                nav.classList.remove("scroll-on");
            }
       }
       
// Nav Hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Counter Design
// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration){
//         let obj = document.getElementById(id),
//         current = start,
//         range = end - start,
//         increament = end > start ? 1 : -1,
//         step = Math.abs(Math.floor(duration / range)),
//         timer = setInterval(() => {
//             current += increament;
//             obj.textContent = current;
//             if(current == end){
//                 clearInterval(timer);
//             }
//         },  step);
//     }
//     counter("count1", 0, 1240, 3500);
//     counter("count2", 100, 850, 3500);
//     counter("count3", 0, 15, 500);
//     counter("count4", 0, 7, 500);
// });