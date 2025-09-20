import { useState } from "react"
export default function App(){
  const products = [
    {id: 1, title: 'rtx 4060', price: 40000},
    {id: 2, title: 'Iphone 15 pro', price: 70000},
    {id: 3, title: 'Ajazz 159 apex', price: 6000},
  ]
 return(
  <div>
    <div>
      <h1>to do лист</h1>
      {
        products.map(product =>(
          <div>
            <h4>{product.title}</h4>
            <p>{product.price}</p>
          </div>
        ))
      }
      </div>





  </div>
  
 )
}
