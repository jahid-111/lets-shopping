



import React from 'react';

const Products = ( { products } ) => {
    console.log(products)
    return (
        <div className=' w-9/12'>
           {products.map (product => {

            console.log(product)


            })
           }
        </div>
    );
};




















export default Products;