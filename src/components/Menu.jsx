import Dish from "./Dish";
import styles from './Menu.module.css'

function Menu(props) {
    return (
        <div className={styles.grid}>
            {props.meny.map((rett) => (
                <Dish
                    key={rett.id}
                    tittel={rett.tittel}
                    pris={rett.pris}
                    ingredienser={rett.ingredienser}
                    kategori={rett.kategori}
                />
            ))}
        </div>
    )
}

export default Menu