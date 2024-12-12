/***
 * Finds the current navigation element in navigation menu from page title and sets an underlying to the element.
 */
function setCurrentNavMenuElementBorder(){
    const pageTitle = document.title;
    const currentNavigationElement = document.getElementById('nav-menu');
    const firstChildren = pageTitle === 'CATEGORY' ? currentNavigationElement.children[0] : currentNavigationElement.children[2];
    Array.from(firstChildren.children).filter(x => x.outerText === pageTitle)[0].children[0].classList.add('nav-menu-border');
}

setCurrentNavMenuElementBorder();
