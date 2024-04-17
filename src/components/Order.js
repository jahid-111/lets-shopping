



import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getExistInDB } from '../Utilities/dataBase';


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
        <div className=' grid gap-3 justify-between items-center '>

            {previewCard.map ( card =>
                <div className=' flex bg-red-100  '>

                        <img className=' h-24 w-24' src={card.img} alt="" />

                        <div className=' flex flex-col justify-center ps-3'>
                            <h3>{card.name}</h3>    
                            <h3 className=' text-red-400'>{card.price}</h3>
                        </div>



                </div> )
            }
        
        {/* <Cart>z</Cart> */}

        </div>
    );
};

export default Order;