let longitud
let latitud
let url
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(posicion=>{
        longitud= posicion.coords.longitude
        latitud=posicion.coords.latitude
        //copio del api y pongo mis valores, mi ubicación
        url=`http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=ee3dc4f05e3eb01904cbe1629c493a51`

        console.log(url);
        const getData=async()=>{

            const cogerDatos=await fetch(url) 
            const data=await cogerDatos.json() 
            console.log(data) 

          document.body.innerHTML+=`
           
             <div id="contenedor">
                <ul> 
                    <li>Porcentaje de nubes : ${data.clouds.all} </li>
                    <li>Población : ${data.name}</li>
                    <li>Humedad : ${data.main.humidity}</li>
                    <li>Visibilidad : ${data.visibility}</li>
                </ul>
                <style> 
                    #contenedor{border:1px solid white;display:flex;justify-content:center;}
                    li{font-size:20px;color:white;}
                <style>
             </div>
          
          
          `
        }
        getData()
    })
}   

window.addEventListener('load',()=>{
    const cuerpo=document.querySelector('body')
    const marco=document.querySelector('.marco') 
    const titulo=document.querySelector('h1') 
    const img=document.querySelector('img') 

    titulo.style.textAlign="center" 
    titulo.style.color='white'
    titulo.style.marginTop='100px' 

    img.style.width='200px' 
    img.style.height='200px' 
    
    cuerpo.style.width=window.innerWidth 
    cuerpo.style.height='500px'
    cuerpo.style.border="4px solid white" 
    cuerpo.style.background="linear-gradient(to right,lightblue,blue)"; 

    marco.style.width="100px" 
    marco.style.height='200px' 
    marco.style.border="2px solid black"
    marco.style.width="100%" 
    marco.style.display='flex' 
    marco.style.justifyContent='center' 
    marco.style.alignItems='center'
    marco.style.boxShadow="9px 9px 19px black" 
    marco.style.backgroundColor="green"
    })
