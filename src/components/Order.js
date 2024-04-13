



import React from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { getExistInDB } from '../Utilities/dataBase';
import Cart from './Cart';


const Order = () => {

    const getAllData =  JSON.parse(useLoaderData())
    // console.log(getAllData)
    const stored_Data = getExistInDB();
    // console.log(data)

        let previewCard = []
        for (const id in stored_Data){
            const matchData = getAllData.find( data => data.id === id)

            // console.log(matchData)
            // console.log(id)
            previewCard.push(matchData)
        }

        // console.log(previewCard)
    return (
        <div className=' flex justify-between items-center '>

            {previewCard.map ( card =>
                <div className=' flex '>

                        <img src={card.img} alt="" />
                        <h3>{card.name}</h3>
                        <h3>{card.price}</h3>



                </div> )
            }
        
        {/* <Cart>z</Cart> */}

        </div>
    );
};

export default Order;