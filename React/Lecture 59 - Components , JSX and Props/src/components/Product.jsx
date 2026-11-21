import React from 'react'

export function Product({title , price}) {
    return (
        <article>
            <p>{title}</p>
            <p>{price}</p>
        </article>
    )
}
