import React, { useState, useEffect } from 'react'
import "./ProductosCard.css"

const ProductosCards = () => {

    const [productos, setProductos] = useState([])

    const url = '/api/productos'

    const fetchProductos = (url) => {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setProductos(data))
        .catch((error) => console.log(error))
    }
    
    useEffect(() => {
      fetchProductos(url);
    }, [])
    
  return (
    <>
    <div className='row'>
        <h1 className='text-center mb-5'>Productos</h1>
        {
            productos.map((item, index) => (

                <div key={item.id} className='col'>
                    <div className='card mb-2'>
                        <h3 className='text-center'>{item.nombre}</h3>
                        <img src={item.foto} alt="foto"/>
                    </div>
                </div>
            ))
        }
    </div>
    
    </>
  )
}

export default ProductosCards