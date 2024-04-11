



import React from 'react';

const ProductCard = ( props ) => {

    const { id, name, img, price, ratingsCount} =  props.product
    const addedProduct = props.addProduct;
    
    
    return (
        <div className=' relative  bg-red-100 w-full h-[500px]'>
            <img className=" h-80 px-3  w-full" src={img} alt="" />

            <h3 className=' text-2xl h-14'>Name : {name}</h3>
            <h3 className=' h-7 w-full text-3xl font-semibold'>Price : {price}</h3>
            <h5 className=' h-7 my-2 font-medium'>Ratings : {ratingsCount}</h5>
            <button onClick={()=> addedProduct(props.product)} className=' absolute bottom-0 py-3 font-bold text-white bg-red-600 w-full'>Add Cart</button>
        </div>
    );
};

export default ProductCard;