$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Estudante", "Desenvolvedor Web", "Designer Web"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["Estudante", "Desenvolvedor Web", "Designer Web"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});

// Seleciona todas as imagens
var images = document.querySelectorAll("img");

// Adiciona um evento click para cada imagem
images.forEach(function(image) {
  image.addEventListener("click", function() {
    // Verifica se o navegador suporta a API de tela cheia
    if (image.requestFullscreen) {
      // Coloca a imagem em tela cheia
      image.requestFullscreen();
      // Ajusta a imagem para caber na tela sem cortar ou distorcer
      image.style.objectFit = "contain";
    } else {
      // Mostra uma mensagem de erro
      alert("Seu navegador não suporta a API de tela cheia.");
    }
  });
});
