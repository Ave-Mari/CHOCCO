
const fixedMenuBtn = document.querySelector('.hamburger');
const fixedMenuPlank = document.querySelector('.hamburger');
const overlayScreen = document.querySelector('#overlay');

fixedMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();    


    if (overlay.classList.contains('overlay--active')) {
        overlay.classList.remove("overlay--active");
        fixedMenuPlank.classList.remove("hamburger--active");
    } else {
        overlay.classList.add("overlay--active");
        fixedMenuPlank.classList.add("hamburger--active");
       }     
    
});

//// Scroll



const sections = $("section");
const display = $(".maincontent");

let inScroll = false; 

sections.first().addClass("active");

const performTransition = (sectionEq) => {


    if (inScroll == false) {
        inScroll = true; 
        const position = sectionEq * -100;

        display.css({
            transform: `translateY(${position}%)`
        });

        sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
        
        setTimeout(() => {
            inScroll = false; 

            const currentSection = sections.eq(sectionEq);
            const menuTheme =  currentSection.attr("data-sidemenu-theme");
            const sideMenu = $(".fixed-menu");

            if (menuTheme == "black") {
                sideMenu.addClass("fixed-menu--shadowed");
            }else {
                sideMenu.removeClass("fixed-menu--shadowed");
            }
        }, 1300);  //1300

    };     
}



const scrollViewport = direction => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();


    if (direction == "next" && nextSection.length) {
        performTransition(nextSection.index())
    }

    if (direction == "prev" && prevSection.length) {
        performTransition(prevSection.index())
    }
};

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollViewport("next");
    };

    if (deltaY < 0) {
        scrollViewport("prev");
    }
});

$(window).on("keydown", e => {
    
    const tagName = e.target.tagName.toLowerCase();

    if (tagName != "input" && tagName != "textarea") {

        switch (e.keyCode) {
            case 38:
                scrollViewport("prev");
                break;
            case 40:
                scrollViewport("prev");
                break;
        }

    }

  
});

$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());
})




// $("body").swipe({
//     swipe: function (event, direction) {
//         const scroller = viewportScroller();

//         let scrollDirection = "";

//         if (direction == "up") scrollDirection = "next";
//         if (direction == "down") scrollDirection = "prev";

//         scroller[dcrollDirection](); 
        
//     },

// });