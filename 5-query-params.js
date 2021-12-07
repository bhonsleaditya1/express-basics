const express = require('express')
const app = express()
const {products}= require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">products</a>')
})
app.get('/api/products/',(req,res)=>{
    const nProducts = products.map((product)=>{
        const {name,id,image} = product;
        return {id,name,image}
    })
    res.json(nProducts)
})

app.get('/api/products/:productID',(req,res)=>{
    console.log(req.params);
    const {productID} = req.params;
    const singleProduct = products.find((product)=>product.id===Number(productID))
    if(!singleProduct){
        return res.status(404).send("Product does not Exsist")
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send('Hello')
})

app.get('/api/v1/query',(req,res)=>{
    const {search,limit} = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    }
    if(sortedProducts.length<1){
        ///res.status(200).send("No products match your seach criteria")
        return res.status(200).json({success:true,data:[]})
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    return res.json(sortedProducts)
    //res.send('hello world')
})


app.listen(5000, ()=>{
    console.log("Server is listening on port 5000....");
})