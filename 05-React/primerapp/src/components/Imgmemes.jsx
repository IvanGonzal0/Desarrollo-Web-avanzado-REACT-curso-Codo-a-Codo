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
    const seleccionarImg = (e) => {
        setImgmeme(e.target.value);
    }

    const descargar = (e) => {
      html2canvas(document.querySelector("#exportar")).then(function(canvas) {
        // document.body.appendChild(canvas);
        let img = canvas.toDataURL("memes/jpg");
        let link = document.createElement('a');
        link.download = 'meme.jpg';
        link.href = img;
        link.click();
      })
    }

  /* Por ultimo siempre vamos a tener return */
  return (
    <div className="text-center">
        <h1 className='mt-3 mb-3 text-center'>Editor de memes</h1>

        <h3>Ingresa el texto del meme</h3>        
        <input onChange={textomeme} className='form-control w-50 m-50 m-auto d-block' placeholder='Ingresa texto' name='meme' aria-label='default input' type="text" />

        <h3 className='mt-3 mb-3 text-center'>Selecciona una imagen</h3>
        <select onChange={seleccionarImg} className='form-select w-50 m-50 m-auto d-block' aria-label='Default select example'>
            <option value={1}>Futurama</option>
            <option value={2}>Bob Esponja</option>
            <option value={3}>Arenita</option>
            <option value={4}>Calamardo</option>
        </select>

        <figure className='text-center' id='exportar'>
            <p className='w-100 px-30 position-absolute top-50 start-30 h1 text-center'>{textmeme}</p>
            <img src={`./memes/${imgmeme}.jpg`} alt="imagen" className="img-fluid rounded mx-auto d-block"/>
        </figure>

        <button onClick={descargar} type='button' className='btn btn-primary mt-4 -mb4'>
            {/* <a href={`./memes/${imgmeme}.jpg`} download={`./memes/${imgmeme}.jpg`} className='btn btn-primary'>Descargar meme</a> */}
            Descargar mem
        </button>
    </div>
  )
}


export default Imgmemes;