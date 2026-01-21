import Navbar from "./navbar"

const MainHeader = () => {
    return (
        <header>
            <section className="container-header">
                <div className="logo">
                    <img src="./src/assets/imgs/dc-logo.png" alt="" />
                </div>
                <Navbar />
            </section>
        </header>
    )

}

export default MainHeader