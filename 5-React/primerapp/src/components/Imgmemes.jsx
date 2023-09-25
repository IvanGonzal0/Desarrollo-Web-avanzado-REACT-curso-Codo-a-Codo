import html2canvas from 'html2canvas';
import React, {useState, useEffect} from 'react'; /* useState es un HOOK */

export const Imgmemes = () => {
    /* Siempre primero vamos a tener la logica/funcionabilididad */
    /* Ahora vamos a guardar el estado de lo ultimo que el usuario escribio, para eso lo vamos a guardar en variables */

    const [imgmeme, setImgmeme] = useState(''); /* El primer valor es el estado inicial, el segundo es la funcion que va a modificar el estado */
    const [textmeme, setTextmeme] = useState(''); 

    const textomeme = (e) => {
        setTextmeme(e.target.value);
    }

    /* Por ultimo siempre vamos a tener return */
  return (
    <div className="text-center">
        <h1 className='mt-3 mb-3 text-center'>Editor de memes</h1>

        <h3>Ingresa el texto del meme</h3>
        
        <input onChange={textomeme} className='form-control w-50 m-50 m-auto d-block' placeholder='Ingresa texto' name='meme' aria-label='default input' type="text" />
        <figure className='text-center'>
            <p>{textmeme}</p>
            <img src="" alt="" />

        </figure>
    </div>
  )
}


export default Imgmemes;