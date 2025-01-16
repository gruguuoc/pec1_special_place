function loadYTVideo(){
    let htmlContent = `<embed
                                src="https://www.youtube.com/embed/TUd7JORZeWo?si=1kBBCjoSjHRukhT1"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                        <figcaption>
                            <h4>Shibuya Crossing</h4>
                            The Shibuya Crossing is one of Tokyo's most iconic landmarks, located right outside Shibuya Station. It's known as the busiest pedestrian crossing in the world, where thousands of people cross in all directions at once when the traffic lights turn red.
                            Around 2,500 to 3,000 people cross every time the light turns green, with the crossing seeing up to 500,000 people pass through it daily.
                            This "scramble" crossing has become a symbol of Tokyo's fast-paced, vibrant urban life.
                            <br><br>
                            Surrounded by neon signs, digital screens, and shopping centers like Shibuya 109, the crossing is at the heart of one of Tokyo's busiest districts.
                            The area is a major commercial hub and a popular destination for both locals and tourists. The Shibuya Crossing is often featured in movies and advertisements, making it instantly recognizable worldwide.
                            <br><br>
                            It's not just a functional intersection, but a cultural icon, representing the energy and modernity of Tokyo.
                            Visitors can watch the chaos from nearby cafes or observation decks, adding to the crossing’s allure as a symbol of Tokyo's dynamic urban landscape.
                            <br><br>
                            The video provided offers a live view of the iconic Shibuya Crossing, showcasing the bustling activity and vibrant energy of this famous intersection in Tokyo.
                            It's like a real-life game of "Where's Waldo?"—see if you can spot someone wearing a red jacket and carrying an umbrella!
                        </figcaption>`

    document.getElementById('yt-video-wrapper').innerHTML = htmlContent;
}

loadYTVideo();