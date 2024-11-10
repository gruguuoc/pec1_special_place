/***
 * Finds the current navigation element in navigation menu from page title and sets an underlying to the element.
 */
function setCurrentNavMenuElementBorder(){
    const pageTitle = document.title;
    const currentNavigationElement = document.getElementById('nav-menu');
    Array.from(currentNavigationElement.children[0].children).filter(x => x.outerText === pageTitle)[0].classList.add('nav-menu-border');
}

setCurrentNavMenuElementBorder();
