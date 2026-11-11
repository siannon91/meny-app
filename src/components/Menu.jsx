import Dish from "./Dish";

function Menu(props) {
    return (
        <div>
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