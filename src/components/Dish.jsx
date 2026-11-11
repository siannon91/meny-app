import styles from './Dish.module.css'

function Dish(props) {
    return (
        <div className={styles.card}>
            <h2>{props.tittel}</h2>
            <p>Kategori: {props.kategori}</p>
            <p>Ingredienser: {props.ingredienser}</p>
            <p>Pris: {props.pris}</p>
        </div>
    )
}

export default Dish