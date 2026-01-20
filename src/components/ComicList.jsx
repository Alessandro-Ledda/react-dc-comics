import comics from "../../comics"


const ComicList = () => {
    return (
        comics.map((comic) => {
            <section class="container-comics">
                <div class="wrap-content">
                    <div class="comic" key={comic.id}>
                        <img
                            src={comic.thumb}
                            alt="" />
                        <p>{comic.series}</p>
                    </div>
                </div>
            </section>
        })
    )


}

export default ComicList