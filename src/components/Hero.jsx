import HeroImg from "../assets/imgs/jumbotron.jpg"
const Hero = () => {
    return (
        <>
            <section className="container-hero">
                <img src={HeroImg} alt="" />
                {/* <img src="/imgs/jumbotron.jpg" alt="" /> */}
            </section>
            <div className="container-title">
                <h3 className="title-series">CURRENT SERIES</h3>
            </div>
        </>
    )

}

export default Hero