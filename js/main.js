const translations={
  ru:{
    nav_features:'Преимущества',nav_pricing:'Тарифы',nav_faq:'FAQ',
    hero_title:'Забудьте о сервере для 1С. Навсегда.',
    hero_subtitle:'Перенесем вашу 1С в наше защищенное облако за 1 день. Работайте в 3 раза быстрее из любой точки мира.',
    hero_cta:'Обсудить проект',
    form_name:'Имя',form_phone:'Телефон',form_submit:'Отправить',form_thanks:'Спасибо! Ваша заявка принята.'
  },
  uz:{
    nav_features:'Afzalliklar',nav_pricing:'Tariflar',nav_faq:'FAQ',
    hero_title:'1C serverisiz ishlang',
    hero_subtitle:'1C ma’lumotlaringizni 1 kunda himoyalangan bulutga ko‘chirib, istalgan joydan 3 baravar tez ishlang.',
    hero_cta:'Loyihani muhokama qilish',
    form_name:'Ism',form_phone:'Telefon',form_submit:'Yuborish',form_thanks:'Rahmat! So‘rovingiz qabul qilindi.'
  }
};

const langSwitch=document.getElementById('lang-switch');
const userLang=localStorage.getItem('lang')||'ru';
let currentLang=userLang;
applyLang(currentLang);
langSwitch.addEventListener('click',()=>{
  currentLang=currentLang==='ru'?'uz':'ru';
  applyLang(currentLang);
  localStorage.setItem('lang',currentLang);
});

function applyLang(lang){
  langSwitch.textContent=lang==='ru'?'UZ':'RU';
  document.querySelectorAll('[data-key]').forEach(el=>{
    const key=el.getAttribute('data-key');
    if(translations[lang][key]) el.textContent=translations[lang][key];
  });
}

// modal
const modal=document.getElementById('modal');
if(modal){
  document.querySelectorAll('[data-open-modal]').forEach(btn=>{
    btn.addEventListener('click',e=>{e.preventDefault();modal.style.display='flex';});
  });
  document.getElementById('modal-close').addEventListener('click',()=>{modal.style.display='none';});
  document.getElementById('request-form').addEventListener('submit',e=>{
    e.preventDefault();
    document.getElementById('request-form').style.display='none';
    document.getElementById('form-thanks').classList.remove('hidden');
  });
}

// mobile menu
const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobile-menu');
hamburger.addEventListener('click',()=>{
  mobileMenu.style.display=mobileMenu.style.display==='flex'?'none':'flex';
});

// sliders and animations
if(window.Swiper){
  new Swiper('.clients-swiper',{loop:true,autoplay:{delay:2500,disableOnInteraction:false},slidesPerView:2,spaceBetween:20,breakpoints:{640:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:4,spaceBetween:40},1024:{slidesPerView:5,spaceBetween:50}}});
  new Swiper('.features-swiper',{loop:false,slidesPerView:1,spaceBetween:30,pagination:{el:'.swiper-pagination',clickable:true},breakpoints:{768:{slidesPerView:2},1024:{slidesPerView:3}}});
  new Swiper('.testimonials-swiper',{loop:true,slidesPerView:1,spaceBetween:30,autoplay:{delay:8000,disableOnInteraction:false},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}});
}

document.addEventListener('DOMContentLoaded',()=>{
  const animatedElements=document.querySelectorAll('.animated');
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver((entries,observer)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:0.1});
    animatedElements.forEach(el=>observer.observe(el));
  }else{
    animatedElements.forEach(el=>el.classList.add('is-visible'));
  }
});
