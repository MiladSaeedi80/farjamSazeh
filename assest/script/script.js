(new WOW).init(),scroller.init();var _gaq=_gaq||[];function openModal(){document.getElementById("myModal").style.display="block"}function closeModal(){document.getElementById("myModal").style.display="none"}_gaq.push(["_setAccount","UA-36251023-1"]),_gaq.push(["_setDomainName","jqueryscript.net"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var t,s=document.getElementsByClassName("mySlides"),n=document.getElementsByClassName("demo"),l=document.getElementById("caption");for(e>s.length&&(slideIndex=1),e<1&&(slideIndex=s.length),t=0;t<s.length;t++)s[t].style.display="none";for(t=0;t<n.length;t++)n[t].className=n[t].className.replace(" active","");s[slideIndex-1].style.display="block",n[slideIndex-1].className+=" active",l.innerHTML=n[slideIndex-1].alt}showSlides(slideIndex);
/*owl-carsoul*/
$('.owl-projects').owlCarousel({
    loop: true,
    // dots:false,
    margin: 7,
    items: 3,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1200,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },


        786: {
            items: 2
        },
        992: {}
    }
});

/*counter*/
$('.counter').counterUp({
    time: 2000
});