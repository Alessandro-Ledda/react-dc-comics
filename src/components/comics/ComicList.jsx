import comics from "../../../comics"
import ComicsCard from "./ComicsCard"


const ComicList = () => {
    return (
        <section className="container-comics">
            <div className="wrap-comics">
                {comics.map((comics) => (
                    <ComicsCard key={comics.id}
                        thumb={comics.thumb}
                        series={comics.series}
                    />
                ))}
            </div>
            <div className="container-btn">
                <button className="btn">LOAD MORE</button>
            </div>
        </section>
    )
}

export default ComicList