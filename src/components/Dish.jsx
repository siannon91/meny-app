function Dish(props) {
    return (
        <div>
            <h2>{props.tittel}</h2>
            <p>Kategori: {props.kategori}</p>
            <p>Ingredienser: {props.ingredienser}</p>
            <p>Pris: {props.pris}</p>
        </div>
    )
}

export default Dish