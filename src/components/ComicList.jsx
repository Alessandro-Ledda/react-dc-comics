import comics from "../../comics"


const ComicList = () => {
    return (
        <section className="container-comics">
            <div className="wrap-comics">
                {comics.map((comic) => (
                    <div className="comic" key={comic.id}>
                        <img
                            src={comic.thumb}
                            alt={comic.series} />
                        <p>{comic.series}</p>
                    </div>
                ))}
            </div>
            <div className="btn-comics">
                <button>LOAD MORE</button>
            </div>
        </section>
    )
}

export default ComicList