


import React, { createContext, useEffect, useState } from 'react';
import Products from '../components/Products';
import Cart from '../components/Cart';
import  { useLoaderData } from "react-router-dom"
import { addToDb, getExistInDB } from '../Utilities/dataBase';
import Order from '../components/Order';













const Main = () => {    
const data = JSON.parse(useLoaderData());
const [carts, setCarts] = useState([]);         

    useEffect(() => {
        const existCart = getExistInDB();
        const savedCart = [];   
        for (const id in existCart){
            const products = data.find(product => product.id === id);
            if (products){  
                const quantity = existCart[id];
                products.quantity = quantity;
                savedCart.push(products);
            }
        }
        if (JSON.stringify(savedCart) !== JSON.stringify(carts)) {
            setCarts(savedCart);
        }
    }, [data, carts]);


    // const hi = "hi";

    // const cardProduct = () => {
    //    return <Order hi={carts}></Order>
    // }   

    const addProduct = (products) => {
        const newCart = [...carts, products];
        setCarts(newCart);
        addToDb(products.id);
    }

    return (
        <div className='  md:flex justify-center'>
            <Products
                     products={data}
                     addProduct = {addProduct}
            ></Products>
            
            
            <Cart
                cart = {carts}
            ></Cart>

        </div>
    );
};

export default Main;