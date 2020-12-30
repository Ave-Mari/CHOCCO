const mesureWidth = menuItem => {
    const screenWidth = $(window).width();
    const container = menuItem.closest(".products_menu")
    const titleBlocks = container.find(".product_menu_title");
    const titleWidth = titleBlocks.width() * titleBlocks.length;
    
    const isMobile = window.matchMedia("max-width: 768px").matches;

    if (isMobile) {
        return screenWidth - titleWidth;
    } else {
        return 500;
    }

    
};

const closeEveryItemContainer = (container) => {
    const menuItems = container.find(".products_menu_item");
    const content = container.find(".product_menu_content");

    menuItems.removeClass("active");
    content.width(0);
}


const openMenuItem = menuItem => {
    const hiddenContent = menuItem.find(".product_menu_content");
    const reqWidth = mesureWidth(menuItem);

    menuItem.addClass("active");
    hiddenContent.width(reqWidth);
};


$(".product_menu_title").on("click", (e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const menuItem = $this.closest(".products_menu_item");
    const menuItemOpened = menuItem.hasClass("active");
    const container = $this.closest(".products_menu");

    if (menuItemOpened) {
        closeEveryItemContainer(container);
    } else {
        closeEveryItemContainer(container),
        openMenuItem(menuItem)
    }

    
});

