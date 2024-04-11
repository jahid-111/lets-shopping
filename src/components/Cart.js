







import React from 'react';

const Cart = ({cart}) => {

    // const { price } = cart;
    // console.log(cart[0].price)  

    let total = 0;
    for (const product of cart) {
        // console.log(product.price)
        total =  total + product.price;
        console.log(total)

}










    return (
        <div className=' w-3/12 bg-yellow-300'>
            
            <h3>CART Total {total}</h3>
        </div>
    );
};

export default Cart;