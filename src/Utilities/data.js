




export const getProductData = async () => {

    const urlProduct = await fetch ('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
    const products = await urlProduct.json();

    return products;
      
        
}


// export {getProductData};