import { useEffect, useState } from "react"
import "./styles.css"

export default function LoadMoreData() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)

    const [disabledBtn, setDisableBtn] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const data = await response.json()

            if (data && data.products && data.products.length) {
                setProducts((prevData) => [...prevData, ...data.products])
                setLoading(false)
            }


        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(() => {
        if (products && products.length === 100) setDisableBtn(true)
    }, [products])

    if (loading) {
        return <div>Loading data ! Please wait</div>
    }
    return <div className="load-more-container">
        <div className="product-container">
            {
                products && products.length ?
                    products.map(item => (
                        <div className="products" key={item.id}>
                            <img
                                src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null
            }
        </div>
        <div className="button-container">
            <button disable={disabledBtn} onClick={() => setCount(count + 1)}>Load More Products</button>
            {
            disabledBtn?<p>The length of products are filled 100!</p>:null
            }
        </div>
    </div>
}