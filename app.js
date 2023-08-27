
function modal_tar() {
    Swal.fire({
        html: '<div class="virtual">' +
            '<img class="img-v" src="https://img.freepik.com/vector-premium/metaverse-realidad-virtual-digital-tecnologia-realidad-aumentada-mujer-realidad-virtual_36358-131.jpg" alt="">' +
            '<a href="https://mywebar.com/p/Project_0_xdfolc5qbv"  target="_blank"><button class="bt-v">Ver Tarjeta Virtual</button></a>' +
            '</div>',
        //tamaño
        imageWidth: 400,
        imageHeight: 200,
        //cerrar
        padding: '1px',
        showCloseButton: true,
        showConfirmButton: false,
        //ajustes
        showCloseButton: true,
        timer: '10000',
        background: '#0e0e0e',
        backdrop: `
  rgba(73, 73, 73, 0.5)
    left top
    no-repeat
  `,
        timerProgressBar: true,
        customClass: {
            actions: 'content',
        }
    })


}

function modal_app() {
    Swal.fire({
        html:
            '<div class="video-apk">' +
            ' <video class="v-apk" width="285px" height="auto"  autoplay muted loop>' +
            '<source src="https://res.cloudinary.com/lhuis/video/upload/v1675652072/videos/kkismnocvltefw6qyx7s.mp4" type="video/mp4">' +
            '</video>' +
            '</div>' +
            '<div class="pasaword">' +
            '<a  href="https://bit.ly/3JQZJ06"  target="_blank">' +
            '<button  class="bt-msj-descargar" >Descargar App</button></a>' +
            '<img class="qr-apk" src="img/qr-apk.png" alt="">'+
            '</div>'+
            '<h3 class="bm-4">Black Filter</h3>',
        //tamaño
        willOpen: '4',
        Button: '5',
        imageWidth: 300,
        imageHeight: 400,
        //cerrar,
        showCloseButton: true,
        showConfirmButton: false,
        background: '#0e0e0e',
        backdrop: `
        rgba(73, 73, 73, 0.5)
          left top
          no-repeat
        `,
    })
}

//Compartir
const shareBtn = document.getElementById('shareBtn')
shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        //drive
        navigator.share({
            text: 'Please read this great article: ',
            url: 'https://bit.ly/LhuisNumero'
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch((err) => console.error(err));
    } else {

        alert("The current browser does not support the share function. Please, manually share the link")
    }
});


const evento = document.getElementById('send')
const enviarFormulario =() => {

        let numero = document.getElementById('numero').value;
        
       
        
var win= window.open(`https://wa.me/54${numero}?text=Hola soy lhuis y esta es mi%20Tarjeta%20Web:%0Abit.ly/LhuisNumero`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)


// copi
function copy(copyId){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    
    document.getElementById("alert").style.display = "block";
    setTimeout(function(){
        document.getElementById("alert").style.display = "none";
    }, 3000);
}


//Modal 
function modal_0111() {
    Swal.fire({
        title: 'Scan me',
        text: 'https://bit.ly/LhuisWeb',
        imageUrl: 'https://res.cloudinary.com/fotoqe123/image/upload/v1665729592/ABAUT/qr-code_n4k2iv',
        imageWidth: 300,
        imageHeight: 300,
        padding:'1rem',
        showCloseButton:true,
        showConfirmButton:false,
        background:'#0e0e0e',
    })
 }
 function modal_02() {
    Swal.fire({
        title: 'Qr de pago',
        imageUrl: 'https://res.cloudinary.com/fotoqe123/image/upload/v1665859871/ABAUT/qr_pago_lhuis_t8bqzz.jpg',
        imageWidth: 300,
        imageHeight: 300,
        padding:'1rem',
        showCloseButton:true,
        showConfirmButton:false,
    })
 }
 function modal_03() {
    Swal.fire({
        title: 'Qr copi cbu',
        imageUrl: 'https://res.cloudinary.com/fotoqe123/image/upload/v1665869889/ABAUT/qr-code_1_of4wjn.png',
        imageWidth: 300,
        imageHeight: 300,

        padding:'1rem',
        showCloseButton:true,
        showConfirmButton:false,
    })
 }
 function modal_04() {
    Swal.fire({
        title: 'Qr copi Alias',
        imageUrl: 'https://res.cloudinary.com/fotoqe123/image/upload/v1665924172/ABAUT/qr-code_2_gsbhik.png',
        imageWidth: 300,
        imageHeight: 300,

        padding:'1rem',
        showCloseButton:true,
        showConfirmButton:false,
        
    })
 }
 function modal_05() {
    Swal.fire({
        html: '<h3>Tu vida tus reglas</h3>',
        imageUrl: 'https://res.cloudinary.com/fotoqe123/image/upload/v1666793201/ABAUT/Lhuis-modified_nhlzfy.png',
       //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding:'1rem',
        showCloseButton:true,
        showConfirmButton:false,
        background:'linear-gradient(#000,#000)',
        
        
    })
 }
 