







import React from 'react';

const Cart = ({cart}) => {
    
  
    let total = 0;
    let shipping = 0;
    let quantity =  0 ;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total =  total + (product.quantity * product.price);
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

    const tax = parseFloat((total *  0.1).toFixed(3));
    const grandTotal = total + shipping + tax;



    return (
        <div className=' w-3/12 bg-yellow-300'>
            <h2 className=' text-center text-3xl font-semibold' >Cart</h2>

            <div className=' bg-indigo-300 p-3'>
                <h4 className=' text-center  text-2xl font-semibold'> 
                    <span className=' text-white'>Added Item </span>
                    <span className=' text-blue-900'> 0{cart.length}</span>
                </h4>
        <hr />  
                <h3 className=' text-xl font-semibold'>
                    <span className=' text-white'>Quantity</span>
                    <span className=' text-blue-900'> :     {quantity}</span>
                </h3>

                <h3 className=' text-xl font-semibold'>
                    <span className=' text-white'>Cart Total </span>
                    <span className=' text-blue-800'> : $ {total}</span>
                </h3>

                <h3 className=' text-xl font-semibold'>

                    <span className=' text-white'>Shipping : </span>
                    <span className=' text-blue-800'> $ {shipping}</span>
                </h3>

                <h3  className=' text-xl font-semibold'>
                    <span className=' text-white'>Tax : </span>
                    <span className=' text-blue-800'> $ {tax} </span>
                </h3>
                
                <h2 className=' text-2xl font-bold '>
                    <span className=' text-[#FF6347]'>Grand Total : </span>
                    <span className=' text-blue-900 '> $ {grandTotal}</span>
                </h2>
            </div>
        </div>
    );
};

export default Cart;