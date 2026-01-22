const MainFooter = () => {

    const linkFooter = [
        {
            title: "DC COMICS",
            link: [
                { id: 1, label: "Characters", url: "#", },
                { id: 2, label: "Comics", url: "#", },
                { id: 3, label: "Movies", url: "#", },
                { id: 4, label: "Tv", url: "#", },
                { id: 5, label: "Games", url: "#", },
                { id: 6, label: "Videos", url: "#", },
                { id: 7, label: "News", url: "#", },
            ],
        },
        {
            title: "SHOP",
            link: [
                { id: 8, label: "Shop DC", url: "#", },
                { id: 9, label: "Shop DC Collectible", url: "#", },

            ],
        },

        {
            title: "DC",
            link: [
                { id: 10, label: "Terms Of Use", url: "#", },
                { id: 11, label: "Privacy Policy (new)", url: "#", },
                { id: 12, label: "Ad Choices", url: "#", },
                { id: 13, label: "Advertising", url: "#", },
                { id: 14, label: "Jobs", url: "#", },
                { id: 15, label: "Subscription", url: "#", },
                { id: 16, label: "Talent Worckshop", url: "#", },
                { id: 17, label: "CPSC Certificates", url: "#", },
                { id: 18, label: "Ratings", url: "#", },
                { id: 19, label: "Shop Help", url: "#", },
                { id: 20, label: "Contact Us", url: "#", },
            ],
        },
        {
            title: "SITES",
            link: [
                { id: 21, label: "DC", url: "#", },
                { id: 22, label: "MAD Magazine", url: "#", },
                { id: 23, label: "DC Kids", url: "#", },
                { id: 24, label: "DC Universe", url: "#", },
                { id: 25, label: "DC Power Visa", url: "#", },
            ],
        }

    ]

    // funzione che renderezza i link con le rispettive informazioni
    function renderLinks(arrayLink) {
        return arrayLink.map((elArr) => {
            return (
                <li key={elArr.id}>
                    <a href={elArr.url}>{elArr.label}</a>
                </li>
            )
        })
    }



    return (
        <footer>
            <section className="container-footer">
                <div className="content-link-img">
                    <div className="wrap first-footer">
                        <div className="link-footer">

                            {linkFooter.map((footerLk) => (
                                <div className="col-one" ky={footerLk.id}>
                                    <h4>{footerLk.title}</h4>
                                    <ul>
                                        {/* richiamo la funzione render */}
                                        {renderLinks(footerLk.link)}
                                    </ul>
                                </div>
                            ))}


                        </div>
                        <div className="img-footer">
                            <img src="./src/assets/imgs/dc-logo-bg.png" alt="" />
                        </div>
                    </div>
                    <div className="content-sign-follow">
                        <div className="wrap">
                            <div className="sign-up">
                                <button className="btn"><a href="">SIGN-UP NOW!</a></button>
                            </div>
                            <div className="follow-us">
                                <h3>FOLLOWS US</h3>
                                <img src="./src/assets/imgs/footer-facebook.png" alt="" />
                                <img src="./src/assets/imgs/footer-twitter.png" alt="" />
                                <img src="./src/assets/imgs/footer-youtube.png" alt="" />
                                <img src="./src/assets/imgs/footer-pinterest.png" alt="" />
                                <img src="./src/assets/imgs/footer-periscope.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default MainFooter