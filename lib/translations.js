// Полный словарь контента лендинга на двух языках (RU / UZ).
// Все тексты и данные секций хранятся здесь, чтобы компоненты оставались чистыми,
// а перевод/правки контента делались в одном месте.
//
// ВНИМАНИЕ: логотипы клиентов и отзывы — демо-плейсхолдеры из стартового шаблона.
// Замените их на реальные данные перед публикацией (см. lib/content.js).

export const translations = {
  ru: {
    meta: {
      title: '1C-Web.Uz — Облачная 1С для бизнеса в Узбекистане',
      description:
        'Перенесём вашу 1С в защищённое облако за 1 день. Быстрый доступ из любой точки мира, ежедневные бэкапы и поддержка 1С-экспертов 24/7.',
    },
    nav: {
      features: 'Преимущества',
      pricing: 'Тарифы',
      how: 'Как начать',
      faq: 'FAQ',
      contact: 'Обсудить проект',
    },
    hero: {
      title: 'Забудьте о сервере для 1С. Навсегда.',
      subtitle:
        'Перенесём вашу 1С в наше защищённое облако за 1 день. Работайте в 3 раза быстрее из любой точки мира, экономя до 40% на IT-расходах. Сосредоточьтесь на бизнесе, а не на железе.',
      ctaPrimary: 'Подобрать тариф',
      ctaSecondary: 'Попробовать 7 дней бесплатно',
      trust: [
        'Гарантия аптайма 99.9%',
        'Поддержка 1С-экспертов 24/7',
        'Совместимость с E-faktura',
      ],
      mockupAlt: 'Интерфейс 1С на ноутбуке и планшете',
    },
    clients: {
      heading: 'Нам доверяют компании по всему Узбекистану',
    },
    features: {
      tag: 'Ваши преимущества',
      title: 'Почему выбирают облако 1C-Web.Uz',
      items: [
        {
          icon: 'gauge',
          title: 'Молниеносная работа на NVMe',
          text: 'Ваши отчёты формируются в разы быстрее благодаря промышленным NVMe SSD-дискам. Гарантируем, что вы забудете о «зависаниях» 1С.',
        },
        {
          icon: 'shield',
          title: 'Банковский уровень защиты',
          text: '256-битное шифрование и ежедневные резервные копии в удалённом дата-центре. Ваши данные надёжнее, чем в сейфе вашего офиса.',
        },
        {
          icon: 'savings',
          title: 'Экономия до 40%',
          text: 'Забудьте о расходах на покупку сервера (от 15 млн сум), его обслуживание и оплату IT-специалиста. Платите понятную ежемесячную сумму.',
        },
        {
          icon: 'support',
          title: 'Экспертная поддержка 1С 24/7',
          text: 'Наша команда — сертифицированные специалисты по 1С, которые говорят с вами на одном языке и решают проблему, а не просто перезагружают сервер.',
        },
        {
          icon: 'globe',
          title: 'Доступ из любой точки мира',
          text: 'Подключайтесь к 1С с Windows, macOS или планшета. Контролируйте бизнес из командировки, дома или кафе. Всё, что нужно — это интернет.',
        },
      ],
    },
    pricing: {
      tag: 'Тарифы',
      title: 'Выберите свой план',
      subtitle:
        'Прозрачные цены без скрытых платежей. Выберите тариф, который подходит именно вашему бизнесу. Нужна помощь? Мы подберём для вас лучшее решение.',
      popularLabel: 'Популярный',
      choose: 'Выбрать',
      discuss: 'Обсудить проект',
      plans: [
        {
          id: 'start',
          name: 'Старт',
          desc: 'Для небольших команд и стартапов',
          price: '299',
          priceNote: 'тыс. сум/мес',
          features: [
            'До 2 пользователей',
            '1 база 1С',
            '20 ГБ на NVMe-диске',
            'Ежедневные бэкапы',
          ],
          cta: 'Выбрать',
          highlighted: false,
        },
        {
          id: 'business',
          name: 'Бизнес',
          desc: 'Оптимальное решение для растущих компаний',
          price: '599',
          priceNote: 'тыс. сум/мес',
          features: [
            'До 5 пользователей',
            'До 5 баз 1С',
            '50 ГБ на NVMe-диске',
            'Приоритетная поддержка',
          ],
          cta: 'Выбрать',
          highlighted: true,
        },
        {
          id: 'enterprise',
          name: 'Корпорация',
          desc: 'Для крупных предприятий и холдингов',
          price: 'Индивидуально',
          priceNote: '',
          features: [
            'От 10 пользователей',
            'Любое количество баз',
            'Выделенный сервер',
            'Персональный менеджер',
          ],
          cta: 'Обсудить проект',
          highlighted: false,
        },
      ],
    },
    steps: {
      tag: 'Процесс',
      title: 'Начать работать в облаке — просто',
      subtitle:
        'Мы сделали процесс перехода максимально простым и быстрым. Всего 4 шага отделяют вас от нового уровня работы.',
      items: [
        {
          title: 'Консультация и план',
          text: 'Вы оставляете заявку, мы анализируем вашу текущую базу, число пользователей и подбираем идеальный тариф.',
        },
        {
          title: 'Безопасный перенос',
          text: 'Наши инженеры бережно переносят вашу базу в облако в удобное для вас время, чтобы минимизировать простой.',
        },
        {
          title: 'Тестирование и запуск',
          text: 'Мы даём доступ для полного тестирования. Вы убеждаетесь, что всё работает идеально, и только потом мы запускаемся.',
        },
        {
          title: 'Поддержка и рост',
          text: 'Вы получаете круглосуточную поддержку и легко добавляете новых пользователей по мере роста бизнеса.',
        },
      ],
    },
    testimonials: {
      tag: 'Мнения',
      title: 'Что говорят наши клиенты',
      items: [
        {
          quote:
            'Переход в облако с 1C-Web.Uz стал лучшим решением для нашей бухгалтерии. Теперь я закрываю квартал из дома, не теряя в скорости. Поддержка реагирует моментально!',
          author: 'Акмаль Саидов',
          role: 'Главный бухгалтер, ООО «Orient Logistics», г. Ташкент',
        },
        {
          quote:
            'Мы мучились со старым сервером: постоянные сбои, медленная выгрузка. Команда 1C-Web.Uz за одну ночь перенесла нашу доработанную базу УТ 3.0. Теперь всё «летает».',
          author: 'Тимур Ибрагимов',
          role: 'Директор, «BuildInvest Group», г. Самарканд',
        },
        {
          quote:
            'Как финансовый директор, я теперь контролирую все денежные потоки в командировках по всему Узбекистану. Это невероятно удобно. Экономия на IT стала приятным бонусом.',
          author: 'Елена Ким',
          role: 'Финансовый директор, «Silk Road Textiles», г. Бухара',
        },
      ],
    },
    faq: {
      tag: 'Вопросы',
      title: 'Отвечаем на популярные вопросы',
      items: [
        {
          q: 'У меня доработанная конфигурация 1С. Это будет работать?',
          a: 'Да, абсолютно. Мы переносим вашу базу «как есть», со всеми доработками, отчётами и настройками. Наше облако полностью совместимо с любыми конфигурациями 1С:Предприятие 8.',
        },
        {
          q: 'Насколько это безопасно? Что, если кто-то украдёт мои данные?',
          a: 'Это намного безопаснее, чем сервер в офисе. Все данные передаются по шифрованному каналу (как в интернет-банкинге). Серверы физически охраняются в дата-центре TIER III в Ташкенте, а ежедневные резервные копии исключают потерю данных.',
        },
        {
          q: 'Что входит в стоимость, кроме аренды?',
          a: 'В стоимость тарифа уже включены: бесплатный перенос вашей базы, первоначальная настройка, ежедневное резервное копирование, все обновления платформы 1С и круглосуточная техническая поддержка.',
        },
        {
          q: 'Что такое тестовый период на 7 дней?',
          a: 'Мы бесплатно перенесём вашу базу в облако, и вы сможете полноценно работать в ней 7 дней. Это позволит оценить скорость и удобство без обязательств. Если не понравится — мы вернём вам архив базы.',
        },
        {
          q: 'Как происходит обновление моей 1С в облаке?',
          a: 'Мы берём на себя все обновления платформы 1С. Они устанавливаются автоматически ночью, чтобы не мешать работе. Обновления вашей конфигурации (особенно доработанной) проводим по согласованию с вами.',
        },
        {
          q: 'Можно ли подключить торговое оборудование (сканер, принтер)?',
          a: 'Да. Мы настраиваем проброс портов для подключения большинства видов торгового оборудования, включая сканеры штрих-кодов, принтеры этикеток и фискальные регистраторы.',
        },
        {
          q: 'Что, если мне понадобится больше или меньше пользователей?',
          a: 'Вы гибко управляете числом пользователей. Свяжитесь с вашим персональным менеджером — и мы оперативно сменим тариф на более подходящий. Пересчёт произойдёт с начала следующего расчётного периода.',
        },
      ],
    },
    finalCta: {
      title: 'Готовы перенести 1С в облако?',
      subtitle:
        'Оставьте заявку — мы бесплатно проанализируем вашу базу и подберём оптимальный тариф. Первые 7 дней бесплатно.',
      button: 'Оставить заявку',
    },
    footer: {
      about:
        'Надёжное облако для вашего бизнеса в Узбекистане. Сосредоточьтесь на росте — об IT позаботимся мы.',
      navTitle: 'Навигация',
      contactsTitle: 'Контакты',
      links: [
        { label: 'Преимущества', href: '#features' },
        { label: 'Тарифы', href: '#prices' },
        { label: 'Как начать', href: '#how' },
        { label: 'FAQ', href: '#faq' },
      ],
      rights: '© 2025 1C-Web.Uz. Все права защищены.',
    },
    form: {
      title: 'Оставить заявку',
      subtitle: 'Перезвоним в течение рабочего дня и ответим на все вопросы.',
      planLabel: 'Интересующий тариф',
      planPlaceholder: 'Не выбран',
      name: 'Ваше имя',
      phone: 'Телефон',
      company: 'Компания (необязательно)',
      comment: 'Комментарий (необязательно)',
      submit: 'Отправить заявку',
      sending: 'Отправляем…',
      thanks: 'Спасибо!',
      thanksText: 'Ваша заявка принята. Мы свяжемся с вами в ближайшее время.',
      error: 'Не удалось отправить. Попробуйте ещё раз или позвоните нам.',
      close: 'Закрыть',
      required: 'Заполните это поле',
    },
    langName: 'UZ',
  },

  uz: {
    meta: {
      title: '1C-Web.Uz — Oʻzbekistondagi biznes uchun bulutli 1C',
      description:
        '1C dasturingizni 1 kunda himoyalangan bulutga koʻchiramiz. Dunyoning istalgan nuqtasidan tez kirish, kunlik zaxira nusxalar va 1C mutaxassislari yordami 24/7.',
    },
    nav: {
      features: 'Afzalliklar',
      pricing: 'Tariflar',
      how: 'Qanday boshlash',
      faq: 'FAQ',
      contact: 'Loyihani muhokama qilish',
    },
    hero: {
      title: '1C uchun serverni unuting. Butunlay.',
      subtitle:
        '1C dasturingizni 1 kunda himoyalangan bulutimizga koʻchiramiz. Dunyoning istalgan nuqtasidan 3 baravar tez ishlang va IT xarajatlarda 40% gacha tejang. Temirga emas, biznesga eʼtibor qarating.',
      ctaPrimary: 'Tarif tanlash',
      ctaSecondary: '7 kun bepul sinab koʻrish',
      trust: [
        'Ishlash kafolati 99.9%',
        '1C mutaxassislari yordami 24/7',
        'E-faktura bilan mos',
      ],
      mockupAlt: 'Noutbuk va planshetda 1C interfeysi',
    },
    clients: {
      heading: 'Butun Oʻzbekiston boʻylab kompaniyalar bizga ishonadi',
    },
    features: {
      tag: 'Sizning afzalliklaringiz',
      title: 'Nega 1C-Web.Uz bulutini tanlashadi',
      items: [
        {
          icon: 'gauge',
          title: 'NVMe’da yashin tezligida ishlash',
          text: 'Sanoat darajasidagi NVMe SSD disklar tufayli hisobotlaringiz bir necha barobar tez shakllanadi. 1C “osilib qolishi”ni unutasiz.',
        },
        {
          icon: 'shield',
          title: 'Bank darajasidagi himoya',
          text: '256-bitli shifrlash va uzoq maʼlumotlar markazida kunlik zaxira nusxalar. Maʼlumotlaringiz ofis seyfidan ham ishonchliroq saqlanadi.',
        },
        {
          icon: 'savings',
          title: '40% gacha tejash',
          text: 'Server sotib olish (15 mln soʻmdan), uni saqlash va IT-mutaxassis maoshini unuting. Tushunarli oylik toʻlovni toʻlaysiz.',
        },
        {
          icon: 'support',
          title: '1C boʻyicha ekspert yordami 24/7',
          text: 'Jamoamiz — sertifikatlangan 1C mutaxassislari. Ular siz bilan bir tilda gaplashadi va muammoni hal qiladi, shunchaki serverni qayta yuklamaydi.',
        },
        {
          icon: 'globe',
          title: 'Dunyoning istalgan nuqtasidan kirish',
          text: '1C’ga Windows, macOS yoki planshetdan ulaning. Biznesni safardan, uydan yoki kafedan boshqaring. Faqat internet kifoya.',
        },
      ],
    },
    pricing: {
      tag: 'Tariflar',
      title: 'Oʻz rejangizni tanlang',
      subtitle:
        'Yashirin toʻlovlarsiz shaffof narxlar. Aynan sizning biznesingizga mos tarifni tanlang. Yordam kerakmi? Biz eng yaxshi yechimni tanlab beramiz.',
      popularLabel: 'Ommabop',
      choose: 'Tanlash',
      discuss: 'Loyihani muhokama qilish',
      plans: [
        {
          id: 'start',
          name: 'Start',
          desc: 'Kichik jamoalar va startaplar uchun',
          price: '299',
          priceNote: 'ming soʻm/oy',
          features: [
            '2 tagacha foydalanuvchi',
            '1 ta 1C bazasi',
            'NVMe diskda 20 GB',
            'Kunlik zaxira nusxalar',
          ],
          cta: 'Tanlash',
          highlighted: false,
        },
        {
          id: 'business',
          name: 'Biznes',
          desc: 'Oʻsayotgan kompaniyalar uchun optimal yechim',
          price: '599',
          priceNote: 'ming soʻm/oy',
          features: [
            '5 tagacha foydalanuvchi',
            '5 tagacha 1C bazasi',
            'NVMe diskda 50 GB',
            'Ustuvor yordam',
          ],
          cta: 'Tanlash',
          highlighted: true,
        },
        {
          id: 'enterprise',
          name: 'Korporatsiya',
          desc: 'Yirik korxona va holdinglar uchun',
          price: 'Individual',
          priceNote: '',
          features: [
            '10 tadan foydalanuvchi',
            'Istalgan sondagi bazalar',
            'Ajratilgan server',
            'Shaxsiy menejer',
          ],
          cta: 'Loyihani muhokama qilish',
          highlighted: false,
        },
      ],
    },
    steps: {
      tag: 'Jarayon',
      title: 'Bulutda ishlashni boshlash — oson',
      subtitle:
        'Biz oʻtish jarayonini imkon qadar sodda va tez qildik. Yangi ish darajasidan sizni atigi 4 qadam ajratib turadi.',
      items: [
        {
          title: 'Konsultatsiya va reja',
          text: 'Siz soʻrov qoldirasiz, biz joriy bazangiz va foydalanuvchilar sonini tahlil qilib, ideal tarifni tanlaymiz.',
        },
        {
          title: 'Xavfsiz koʻchirish',
          text: 'Muhandislarimiz bazangizni siz uchun qulay vaqtda bulutga ehtiyotkorlik bilan koʻchiradi, toʻxtab qolishni minimallashtiradi.',
        },
        {
          title: 'Sinov va ishga tushirish',
          text: 'Biz toʻliq sinov uchun kirish beramiz. Hammasi mukammal ishlashiga ishonch hosil qilasiz, keyingina ishga tushiramiz.',
        },
        {
          title: 'Yordam va oʻsish',
          text: 'Siz kunu-tun yordam olasiz va biznes oʻsishi bilan yangi foydalanuvchilarni bemalol qoʻshasiz.',
        },
      ],
    },
    testimonials: {
      tag: 'Fikrlar',
      title: 'Mijozlarimiz nima deydi',
      items: [
        {
          quote:
            '1C-Web.Uz bilan bulutga oʻtish buxgalteriyamiz uchun eng toʻgʻri qaror boʻldi. Endi chorakni uydan, tezlikni yoʻqotmasdan yopaman. Yordam bir zumda javob beradi!',
          author: 'Akmal Saidov',
          role: 'Bosh buxgalter, “Orient Logistics” MChJ, Toshkent',
        },
        {
          quote:
            'Eski serverimiz bilan qiynalardik: doimiy uzilishlar, sekin yuklash. 1C-Web.Uz jamoasi bir kechada takomillashtirilgan UT 3.0 bazamizni koʻchirdi. Endi hammasi “uchadi”.',
          author: 'Timur Ibragimov',
          role: 'Direktor, “BuildInvest Group”, Samarqand',
        },
        {
          quote:
            'Moliyaviy direktor sifatida endi butun Oʻzbekiston boʻylab safarlarda barcha pul oqimlarini nazorat qilaman. Bu juda qulay. IT’dagi tejamkorlik ham yoqimli bonus boʻldi.',
          author: 'Yelena Kim',
          role: 'Moliyaviy direktor, “Silk Road Textiles”, Buxoro',
        },
      ],
    },
    faq: {
      tag: 'Savollar',
      title: 'Mashhur savollarga javob beramiz',
      items: [
        {
          q: 'Mening 1C konfiguratsiyam takomillashtirilgan. U ishlaydimi?',
          a: 'Ha, albatta. Biz bazangizni barcha oʻzgartirishlar, hisobotlar va sozlamalar bilan “boricha” koʻchiramiz. Bulutimiz istalgan 1C:Korxona 8 konfiguratsiyasi bilan toʻliq mos.',
        },
        {
          q: 'Bu qanchalik xavfsiz? Kimdir maʼlumotlarimni oʻgʻirlab ketsa-chi?',
          a: 'Bu ofisdagi serverdan ancha xavfsiz. Barcha maʼlumotlar shifrlangan kanal orqali uzatiladi (internet-banking kabi). Serverlar Toshkentdagi TIER III maʼlumotlar markazida jismonan qoʻriqlanadi, kunlik zaxira nusxalar esa maʼlumot yoʻqolishini istisno qiladi.',
        },
        {
          q: 'Ijaradan tashqari narxga nima kiradi?',
          a: 'Tarif narxiga quyidagilar kiritilgan: bazangizni bepul koʻchirish, dastlabki sozlash, kunlik zaxira nusxalash, 1C platformasining barcha yangilanishlari va kunu-tun texnik yordam.',
        },
        {
          q: '7 kunlik sinov davri nima?',
          a: 'Biz bazangizni bepul bulutga koʻchiramiz va siz unda 7 kun toʻliq ishlaysiz. Bu majburiyatsiz tezlik va qulaylikni baholash imkonini beradi. Yoqmasa — bazangiz arxivini qaytaramiz.',
        },
        {
          q: 'Bulutdagi 1C’m qanday yangilanadi?',
          a: '1C platformasining barcha yangilanishlarini oʻz zimmamizga olamiz. Ular ishga xalaqit bermaslik uchun tunda avtomatik oʻrnatiladi. Konfiguratsiyangiz yangilanishini (ayniqsa takomillashtirilgan boʻlsa) siz bilan kelishib oʻtkazamiz.',
        },
        {
          q: 'Savdo uskunalarini (skaner, printer) ulash mumkinmi?',
          a: 'Ha. Biz shtrix-kod skanerlari, yorliq printerlari va fiskal registratorlar kabi savdo uskunalarining aksariyatini ulash uchun portlarni sozlaymiz.',
        },
        {
          q: 'Menga koʻproq yoki kamroq foydalanuvchi kerak boʻlsa-chi?',
          a: 'Foydalanuvchilar sonini moslashuvchan boshqarasiz. Shaxsiy menejeringizga murojaat qiling — biz tarifni mosroqiga tezda oʻzgartiramiz. Qayta hisob-kitob keyingi hisob davri boshidan amalga oshadi.',
        },
      ],
    },
    finalCta: {
      title: '1C’ni bulutga koʻchirishga tayyormisiz?',
      subtitle:
        'Soʻrov qoldiring — bazangizni bepul tahlil qilib, optimal tarifni tanlaymiz. Dastlabki 7 kun bepul.',
      button: 'Soʻrov qoldirish',
    },
    footer: {
      about:
        'Oʻzbekistondagi biznesingiz uchun ishonchli bulut. Oʻsishga eʼtibor qarating — IT haqida biz gʻamxoʻrlik qilamiz.',
      navTitle: 'Navigatsiya',
      contactsTitle: 'Kontaktlar',
      links: [
        { label: 'Afzalliklar', href: '#features' },
        { label: 'Tariflar', href: '#prices' },
        { label: 'Qanday boshlash', href: '#how' },
        { label: 'FAQ', href: '#faq' },
      ],
      rights: '© 2025 1C-Web.Uz. Barcha huquqlar himoyalangan.',
    },
    form: {
      title: 'Soʻrov qoldirish',
      subtitle: 'Ish kuni davomida qoʻngʻiroq qilib, barcha savollarga javob beramiz.',
      planLabel: 'Qiziqtirgan tarif',
      planPlaceholder: 'Tanlanmagan',
      name: 'Ismingiz',
      phone: 'Telefon',
      company: 'Kompaniya (ixtiyoriy)',
      comment: 'Izoh (ixtiyoriy)',
      submit: 'Soʻrovni yuborish',
      sending: 'Yuborilmoqda…',
      thanks: 'Rahmat!',
      thanksText: 'Soʻrovingiz qabul qilindi. Tez orada siz bilan bogʻlanamiz.',
      error: 'Yuborib boʻlmadi. Qayta urinib koʻring yoki qoʻngʻiroq qiling.',
      close: 'Yopish',
      required: 'Bu maydonni toʻldiring',
    },
    langName: 'RU',
  },
}

// Общие (не переводимые) контактные данные и внешние ассеты.
export const contacts = {
  phone: '+998 (91) 337-27-47',
  phoneHref: 'tel:+998913372747',
  email: 'info@1c-web.uz',
  emailHref: 'mailto:info@1c-web.uz',
  addressRu: 'г. Ташкент, ул. Амира Темура, 1',
  addressUz: 'Toshkent sh., Amir Temur koʻch., 1',
  telegram: '#',
  instagram: '#',
  facebook: '#',
}
