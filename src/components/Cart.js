







import React from 'react';

const Cart = ({cart}) => {
    
    console.log(cart)  
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total =  total + product.price;
        console.log(product.quantity)
}

    if(total >= 1000){
        shipping = 3;
    } else if (total >= 600) {
        shipping = 15;
    } else if (total >= 200) {
        shipping  = 21
    } else if (total > 1) {
        shipping = 30
    }

    const tax = total *  0.1;
    const grandTotal = total + shipping + tax;



    return (
        <div className=' w-3/12 bg-yellow-300'>
            <h2 className=' text-center text-3xl font-semibold' >Cart</h2>

            <div>
                <h4> Added Item 
                    <span> {cart.length}</span>
                </h4>
                <h3>Cart Total : $  {total}</h3>
                <h3>Shipping : ${shipping}</h3>
                <h3>TAX : $ {tax}</h3>
                <h2>Grand Total {grandTotal}</h2>
            </div>
        </div>
    );
};

export default Cart;