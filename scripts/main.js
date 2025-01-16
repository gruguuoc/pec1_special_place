/***
 * Finds the current navigation element in navigation menu from page title and sets an underlying to the element.
 */
function setCurrentNavMenuElementBorder(){
    const pageTitle = document.title;
    const currentNavigationElement = document.getElementById('nav-menu');
    const firstChildren = pageTitle === 'CATEGORY' ? currentNavigationElement.children[0] : currentNavigationElement.children[2];
    Array.from(firstChildren.children).filter(x => x.outerText === pageTitle)[0].children[0].classList.add('nav-menu-border');
}

function loadYTVideo(){
    let htmlContent = `<iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/TUd7JORZeWo?si=PAs6s9dZSZH7TlVW"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="no-referrer"
                        loading="lazy"
                        allowfullscreen></iframe>`

    document.getElementById('iframe-wrapper').innerHTML = htmlContent;
}

//Main execution
if(document.title === 'PRESENTATION')
    document.getElementById('fake-youtube-img').addEventListener('click', loadYTVideo);

setCurrentNavMenuElementBorder();
