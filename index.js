const extract = ()=>{
    const images = document.getElementById('image');
    const show = document.getElementById('show');

    const file = images.files[0];

    if(!file){
        show.textContent = 'Please Select an image file';
        return;
    }


    Tesseract.recognize(
        file,
        'eng'
    ).then(({data})=>{
        show.textContent = data.text;
    }).catch((error)=>{
        console.error('Error',error);
        show.textContent  = 'Error';
    })
}

