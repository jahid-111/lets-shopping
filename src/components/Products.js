



import React from 'react';
import ProductCard from './ProductCard';

const Products = ( { products, addProduct } ) => {
    return (
        <div className=' grid md:grid-cols-2 gap-3 sm:w-9/12'>
           {
            products.map (product =>  <ProductCard
                key={product.id}
                product = { product }
                addProduct = {addProduct}
            ></ProductCard>)
           }
        </div>
    );
};




















export default Products;