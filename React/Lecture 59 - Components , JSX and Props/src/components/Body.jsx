import React from 'react'
import { Product } from './Product'

let books = [
    {
        title: "Belonging",
        price: 599
    }
]

function Body() {
    return (
        <div>   
            {
                books.map(({title , price}) => {
                    return <Product title={title} price={price} />
                })
            }
        </div>
    )
}

export default Body
