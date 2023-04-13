import style from "./tovar.module.css"

import { tovars } from "../Catalog/Catalog"
import { useParams } from "react-router"
import { format } from "../basket/basket"
// import { useState } from "react"

const Tovar = ({setBasket, basket}) => {
    // const [tovar, setServicesTovar] = useState([])

    const params = useParams()
    const id = params.id
    
    const tovar = tovars.find((item) => item.id == id) // удалить строку

    // const fetchServices = async () => {
    //     const response = await fetch(`такая же ссылка как и в catalog/${id}`)
    //     const data = await response.json()

    //     setServicesTovar(data.data)
    // }

    // useEffect(() => {
    //     fetchServices()
    // }, [])

    const handleSetBasket = ({id, name, img, text, price}) => {
        setBasket(prev => [...prev, {id: id, name:name, img:img, text:text, price:price}])
    }

    const idBasket = basket.find(item => item.id == id)


    return (
        <div className={style.tovar}>
            <div className={style.img_tovar_one}>
                <img src={tovar.img} alt="" />
            </div>
            <div className={style.content_tovar}>
                <h1>{tovar.name}</h1>
                <p>{tovar.text}</p>
                <h2>{format(tovar.price)} ₽</h2>
                {
                     idBasket ? <p>товар в корзине</p> : (
                        <button onClick={() => handleSetBasket({...tovar})}>ДОБАВИТЬ В КОРЗИНУ</button>
                     )
                }
            </div>
        </div>
    )
}

export default Tovar