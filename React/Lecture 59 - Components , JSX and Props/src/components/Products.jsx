import { Product } from "./Product"

export function Products({products = [] , children}) {
    return( 
        <div style={{backgroundColor: "white" , color : "black"}}>
            {
                products.map(({title , price} , i) => {
                    return <Product key={i} title={title}  price={price} />
                })
            }

            {children}
        </div>
    )
}
