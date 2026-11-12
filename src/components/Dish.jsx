import styles from './Dish.module.css'

function Dish(props) {
    const bildeSti = `${import.meta.env.BASE_URL}bilder/${props.id}.png`
    return (
        <div className={styles.card}>
            <div className={styles.bilderamme}>
                <img className={styles.bilde} src={bildeSti} alt={props.tittel} />
                <h2 className={styles.tittel}>{props.tittel}</h2>
            </div>
            <p className={styles.ingredienser}>Ingredienser: {props.ingredienser}</p>
            <p className={styles.pris}>Pris: {props.pris}</p>
        </div>
    )
}

export default Dish