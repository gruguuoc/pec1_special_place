import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import $ from 'jquery';

$(document).ready(function(){
  // Initialize Slick Carousel
  $('.your-carousel').slick({
    infinite: true,          
    slidesToShow: 1,         
    slidesToScroll: 1,       
    dots: false,              
    arrows: true,            
    autoplay: true,          
    autoplaySpeed: 3000,     
    pauseOnHover: true,      
    fade: false,             
  });
});