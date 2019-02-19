function interfell(){
    
    //Creating an array to demonstrate some Array Features.
    const products = [
        {name: 'Windows Notebook', price: 1200, fragile: false},
        {name: 'Macbook Pro', price: 2400, fragile: true},
        {name: 'Glass Cup', price: 7, fragile: true},
        {name: 'Shampoo', price: 11.5, fragile: false}
    ]

    //Calling a callback and filterind only not fragile items.
    console.log(products.filter(function(p) {
        return false;
    }))

    //Array function, commonly used in JavaScript projects.
    //Using to check and pass a product bigger than 500 price.
    const expansive = product => product.price >= 500;
    const fragile = product => product.fragile;

    //Using filters 
    console.log(products.filter(expansive).filter(fragile));

}