import style from "./catalog.module.css"
import search from "../../assets/img/search.svg"
import filter from "../../assets/img/filter.svg"
import { Link } from "react-router-dom"
import { useState } from "react"
import { format } from "../basket/basket"

export const tovars = [
    {
        id: 1,
        name: 'asdadsdsa',
        text: 'dsakfjabnshjkfhsakdfashdfsajkdfsajkfdjsadgfahjsdfalsdgflkasgdkdfokiawsguefoakie',
        img: 'https://3dnews.ru/assets/external/illustrations/2022/11/12/1077269/Atomic-Heart.jpg',
        price: 123123,
        sale: 0,
        category: 3
    },
    {
        id: 2,
        name: 'asdadhfdhgfdghfghsdsa',
        text: 'dsakfjabnshjkfhsakdfashdfsajkdfsajkfdjsadgfahjsdfalsdgflkasgdkdfokiawsguefoakie',
        img: 'https://3dnews.ru/assets/external/illustrations/2022/11/12/1077269/Atomic-Heart.jpg',
        price: 765567,
        sale: 0,
        category: 2
    },
    {
        id: 3,
        name: 'asdadsdsa',
        text: 'dsakfjabnshjkfhsakdfashdfsajkdfsajkfdjsadgfahjsdfalsdgflkasgdkdfokiawsguefoakie',
        img: 'https://3dnews.ru/assets/external/illustrations/2022/11/12/1077269/Atomic-Heart.jpg',
        price: 567567,
        sale: 50,
        category: 2
    },
    {
        id: 4,
        name: 'aaaaaaaaaa',
        text: 'dsakfjabnshjkfhsakdfashdfsajkdfsajkfdjsadgfahjsdfalsdgflkasgdkdfokiawsguefoakie',
        img: 'https://3dnews.ru/assets/external/illustrations/2022/11/12/1077269/Atomic-Heart.jpg',
        price: 787878,
        sale: 50,
        category: 1
    },
    {
        id: 5,
        name: 'game1',
        text: 'dsakfjabnshjkfhsakdfashdfsajkdfsajkfdjsadgfahjsdfalsdgflkasgdkdfokiawsguefoakie',
        img: 'https://webmg.ru/wp-content/uploads/2022/06/i-80-1.jpeg',
        price: 123123,
        sale: 0,
        category: 1

    },
    {
        id: 6,
        name: 'game2',
        text: 'dsakfjabnshjkfhsakdfashdfsajkdfsajkfdjsadgfahjsdfalsdgflkasgdkdfokiawsguefoakie',
        img: 'https://pic.rutubelist.ru/video/52/1d/521da12f59fc15dbdc7949f3aea68f5e.jpg',
        price: 765567,
        sale: 0,
        category: 3
    },
    {
        id: 7,
        name: 'game3',
        text: 'dsakfjabnshjkfhsakdfashdfsajkdfsajkfdjsadgfahjsdfalsdgflkasgdkdfokiawsguefoakie',
        img: 'https://cdn.ananasposter.ru/image/cache/catalog/poster/games/83/10708-1000x830.jpg',
        price: 567567,
        sale: 50,
        category: 2
    },
    {
        id: 8,
        name: 'aaaaaaaaaa',
        text: 'dsakfjabnshjkfhsakdfashdfsajkdfsajkfdjsadgfahjsdfalsdgflkasgdkdfokiawsguefoakie',
        img: 'https://i.pinimg.com/originals/4d/4d/47/4d4d473a01857cc346f747a158b851a2.jpg',
        price: 787878,
        sale: 50,
        category: 1
    }
]

const categories = [
    {
        id: 1,
        name: 'category1'
    },
    {
        id: 2,
        name: 'category2'
    },
    {
        id: 3,
        name: 'category3'
    }
]

const Catalog = () => {
    const [data, setData] = useState(tovars)  // tovars удалить
    const [searchData, setSearch] = useState('')
    const [cat, setCat] = useState(1)

    const unDataSale = data.filter((item) => item.sale === 0)

    // const fetchServices = async () => {
    //     const response = await fetch(`cсылка для всех объектов товаров`)
    //     const data = await response.json()

    //     setData(data.data)
    // }

    // useEffect(() => {
    //     fetchServices()
    // }, [])

    const categoryData = unDataSale?.filter((item) => item.category === cat)

    const searchDataMassive = categoryData?.filter((item) => item.name.toLowerCase().includes(searchData))

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className={style.catalog} id={'#catalog'}>
            <div className={style.header_catalog}>
                <h1 className={style.h1_catalog}>
                    Каталог
                </h1>
                <div className={style.input}>
                    <input type="text" placeholder="Поиcк..." onChange={(e) => handleChangeSearch(e)} value={searchData} />
                    <div className={style.ikon_search}>
                        <img src={search} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.flex}>
                <img className={style.filter} src={filter} alt="" />
                <select name="" id="" onChange={(e) => setCat(parseInt(e.target.value, 10))}>
                    {
                        categories.map((category) => {
                            return <option value={category.id}>{category.name}</option>
                        })
                    }
                </select>
            </div>
            <div className={style.catalog_wrapper}>
                {
                    searchDataMassive?.map(item => {
                        return (
                            <div className={style.tovar} key={item.id}>
                                <Link to={`/tovar/${item.id}`}>
                                    <div className={style.img_tovar}>
                                        <img src={item.img} alt="" />
                                    </div>
                                </Link>
                                <p>{item.title}</p>
                                <p className={style.price}>{format(item.price)} ₽</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Catalog