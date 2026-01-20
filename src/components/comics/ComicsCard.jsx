const ComicsCard = (props) => {

    // destrutturazione oggetto
    const { thumb, series } = props;

    return (
        <div className="comic">
            <img
                src={thumb}
                alt={series} />
            <p>{series}</p>
        </div>
    )
}

export default ComicsCard