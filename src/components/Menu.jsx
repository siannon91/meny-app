import Dish from "./Dish";
import styles from './Menu.module.css'

const kategorier = ['Forrett', 'Hovedrett', 'Dessert']

function Menu(props) {
    return (
        <div>
            {kategorier.map((kategori) => (
                <section key={kategori}>
                    <h2 className={styles.kategoriTittel}>{kategori}</h2>
                    <div className={styles.grid}>
                        {props.meny
                            .filter((rett) => rett.kategori === kategori)
                            .map((rett) => (
                                <Dish
                                    key={rett.id}
                                    id={rett.id}
                                    tittel={rett.tittel}
                                    pris={rett.pris}
                                    ingredienser={rett.ingredienser}
                                    /*kategori={rett.kategori}*/
                                />
                            ))}
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Menu