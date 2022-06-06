import React from 'react'

const Plataformas = () => {
  return (
    <div>
        <h1>Plataformas</h1>

        <img className='fotos' src="/assets/2.jpg"/>
        <h5 className='title'>Modelo Unicornio</h5>
        <div className='producto__footer'>
        <p className='details'>descripcion: "pantufla con diseño",
            precio: $225</p>
        <p> id: 1235</p>
        </div>

        <img className='fotos' src="/assets/3.jpg"/>
        <h5 className='title'>Modelo Barbie</h5>
        <div className='producto__footer'>
        <p className='details'>descripcion: "pantufla que brilla en la oscuridad",
,
            precio: $225</p>
        <p> id: 1236</p>
        </div>
        <img className='fotos' src="/assets/6.jpg"/>
        <h5 className='title'>Modelo Lizzy</h5>
        <div className='producto__footer'>
        <p className='details'>descripcion: pantufla con brillantes
            precio: $255</p>
        <p> id: 1238</p>
        </div>
       
    </div>
  )
}

export default Plataformas;