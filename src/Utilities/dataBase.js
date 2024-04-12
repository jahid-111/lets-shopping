



const addToDb = (id) => {
    const getData = getExistInDB();
    const quantity = getData[id];
        if( !quantity){
            getData[id] = 1;
        } else {
            const newQty = quantity + 1;
            getData[id] =  newQty;
        }
    localStorage.setItem("cart", JSON.stringify(getData));


}


const getExistInDB = () => {
    let shoppigCart = {};
    const getDB = localStorage.getItem('cart');
        if (getDB) {
            shoppigCart =  JSON.parse(getDB)
        }
    return shoppigCart
}




export { addToDb,
        getExistInDB
        }