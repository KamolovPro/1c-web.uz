const translations={
  ru:{
    nav_home:'Главная',nav_solutions:'Решения',nav_pricing:'Тарифы',nav_about:'О компании',nav_faq:'FAQ',nav_contact:'Контакты',
    hero_title:'Облачная 1С для вашего бизнеса',hero_subtitle:'Экономьте на инфраструктуре и работайте из любой точки мира.',hero_cta:'Обсудить проект',
    benefits_title:'Почему выбирают нас',benefit_perf:'Высокая производительность',benefit_protect:'Надежная защита данных',benefit_save:'Сокращение затрат',
    clients_title:'Наши клиенты',reviews_title:'Отзывы',cta_title:'Готовы начать?',cta_button:'Оставить заявку',
    form_name:'Имя',form_phone:'Телефон',form_submit:'Отправить',form_thanks:'Спасибо! Ваша заявка принята.',
    solutions_title:'Наши решения',solutions_heading:'Поддерживаемые конфигурации 1С',solution_acc:'Бухгалтерия',solution_trade:'Управление торговлей',solution_zup:'Зарплата и кадры',
    pricing_title:'Тарифы',pricing_heading:'Тарифы',tariff_start:'Старт',tariff_start_desc:'Для небольших команд',tariff_business:'Бизнес',tariff_business_desc:'Оптимальный для роста',tariff_corp:'Корпорация',tariff_corp_desc:'Максимальные возможности',tariff_select:'Выбрать тариф',
    about_title:'О компании',about_heading:'О компании',about_mission:'Мы помогаем бизнесу работать в облаке.',about_clients:'клиентов',about_years:'лет на рынке',
    faq_title:'FAQ',faq_heading:'Часто задаваемые вопросы',faq_q1:'Как подключиться к сервису?',faq_a1:'Свяжитесь с нами и мы настроим доступ.',faq_q2:'Как оплачивать?',faq_a2:'Ежемесячно по безналичному расчету.',
    contact_title:'Контакты',contact_heading:'Свяжитесь с нами',contact_address:'г. Ташкент, Узбекистан',contact_btn:'Оставить заявку'
  },
  uz:{
    nav_home:'Bosh sahifa',nav_solutions:'Yechimlar',nav_pricing:'Tariflar',nav_about:'Kompaniya haqida',nav_faq:'FAQ',nav_contact:'Aloqa',
    hero_title:'Biznesingiz uchun bulutli 1C',hero_subtitle:'Infratuzilmaga tejang va istalgan joydan ishlang.',hero_cta:'Loyihani muhokama qilish',
    benefits_title:'Nega bizni tanlashadi',benefit_perf:'Yuqori unumdorlik',benefit_protect:'Ma\'lumotlar himoyasi',benefit_save:'Xarajatlarni qisqartirish',
    clients_title:'Mijozlarimiz',reviews_title:'Sharhlar',cta_title:'Boshlashga tayyormisiz?',cta_button:'Ariza qoldirish',
    form_name:'Ism',form_phone:'Telefon',form_submit:'Yuborish',form_thanks:'Rahmat! Arizangiz qabul qilindi.',
    solutions_title:'Yechimlar',solutions_heading:'Qo‘llab-quvvatlanadigan 1C konfiguratsiyalari',solution_acc:'Buxgalteriya',solution_trade:'Savdo boshqaruvi',solution_zup:'Maosh va kadrlar',
    pricing_title:'Tariflar',pricing_heading:'Tariflar',tariff_start:'Start',tariff_start_desc:'Kichik jamoalar uchun',tariff_business:'Biznes',tariff_business_desc:'O‘sish uchun optimal',tariff_corp:'Korporatsiya',tariff_corp_desc:'Maksimal imkoniyatlar',tariff_select:'Tarifni tanlash',
    about_title:'Kompaniya haqida',about_heading:'Kompaniya haqida',about_mission:'Biz biznesga bulutda ishlashga yordam beramiz.',about_clients:'mijozlar',about_years:'yildan beri bozorda',
    faq_title:'FAQ',faq_heading:'Ko‘p so‘raladigan savollar',faq_q1:'Xizmatga qanday ulanish mumkin?',faq_a1:'Biz bilan bog‘laning va biz kirishni sozlaymiz.',faq_q2:'To‘lov qanday amalga oshiriladi?',faq_a2:'Har oy naqdsiz hisob-kitob.',
    contact_title:'Aloqa',contact_heading:'Biz bilan bog‘laning',contact_address:'Toshkent shahri, O‘zbekiston',contact_btn:'Ariza qoldirish'
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
    btn.addEventListener('click',()=>{modal.style.display='flex';});
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

// counters
window.addEventListener('scroll',()=>{
  document.querySelectorAll('.counter').forEach(counter=>{
    if(counter.dataset.done) return;
    const rect=counter.getBoundingClientRect();
    if(rect.top<window.innerHeight){
      const target=+counter.dataset.count;
      let current=0;
      const step=target/50;
      const interval=setInterval(()=>{
        current+=step;
        if(current>=target){current=target;clearInterval(interval);counter.dataset.done=true;}
        counter.textContent=Math.floor(current);
      },20);
    }
  });
});

// sliders
if(window.Swiper){
  new Swiper('#client-slider',{loop:true,autoplay:{delay:3000}});
  new Swiper('#review-slider',{loop:true,autoplay:{delay:5000}});
}
