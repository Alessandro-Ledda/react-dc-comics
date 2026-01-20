import HeroImg from "../assets/imgs/jumbotron.jpg"
const Hero = () => {
    return (
        <section className="container-hero">
            <img src={HeroImg} alt="" />
            {/* <img src="/imgs/jumbotron.jpg" alt="" /> */}
        </section>
    )

}

export default Hero