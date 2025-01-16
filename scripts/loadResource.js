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
