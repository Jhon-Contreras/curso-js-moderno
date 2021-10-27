

// Cloudinary 
const cloudPreset = 'wgxta5am';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dehjs27fw/upload';

// archivoSubir :: File 
const subirImagen = async(archivoSubir) =>{
    const formData = new FormData(); //crea un resultado de un formulario
    formData.append('upload_preset', cloudPreset); //upload_preset viene del backend de cloudinary
    formData.append('file', archivoSubir);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url; //secure_url es una propiedad de las imagenes de cloudinary
        } else{
            throw await resp.json();
        }

    } catch (err) {
        throw err
    }
}

export {
    subirImagen
}