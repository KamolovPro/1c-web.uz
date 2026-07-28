// ─────────────────────────────────────────────────────────────────────────
// ДЕМО-ДАННЫЕ личного кабинета (прототип).
//
// Это временный слой данных в памяти для демонстрации UX кабинета и биллинга.
// Перед продакшеном заменить на реальную БД (PostgreSQL/MySQL) и настоящую
// авторизацию с хешированием паролей. Все функции ниже возвращают данные
// синхронно — при переходе на БД они станут async, а вызовы уже написаны
// с учётом этого (await в getServerSideProps).
// ─────────────────────────────────────────────────────────────────────────

// Демо-пользователи. Пароли в открытом виде ТОЛЬКО для прототипа.
const users = [
  {
    id: 'u1',
    email: 'demo@1c-web.uz',
    password: 'demo1234',
    companyName: 'ООО «Orient Logistics»',
    contactName: 'Акмаль Саидов',
    phone: '+998 (90) 123-45-67',
    tariffId: 'business',
    memberSince: '2024-03-01',
  },
]

// Тарифы (серверная копия — для сумм счетов и подписки).
const tariffs = {
  start: { id: 'start', name: 'Старт', nameUz: 'Start', monthly: 299000, users: 2, storageGb: 20 },
  business: { id: 'business', name: 'Бизнес', nameUz: 'Biznes', monthly: 599000, users: 5, storageGb: 50 },
  enterprise: {
    id: 'enterprise',
    name: 'Корпорация',
    nameUz: 'Korporatsiya',
    monthly: null,
    users: 10,
    storageGb: 200,
  },
}

// Базы 1С клиента.
const databases = [
  {
    id: 'db1',
    userId: 'u1',
    name: 'Бухгалтерия',
    config: '1С:Бухгалтерия для Узбекистана 3.0',
    status: 'running',
    users: 3,
    sizeGb: 12,
    server: 'rdp.1c-web.uz',
    protocol: 'RDP / Тонкий клиент',
  },
  {
    id: 'db2',
    userId: 'u1',
    name: 'Торговля',
    config: '1С:Управление торговлей 3.0',
    status: 'running',
    users: 2,
    sizeGb: 8,
    server: 'rdp.1c-web.uz',
    protocol: 'RDP / Тонкий клиент',
  },
]

// Счета (биллинг на ручных счетах).
const invoices = [
  {
    id: 'inv-2025-07',
    userId: 'u1',
    number: '2025-07',
    periodFrom: '2025-07-01',
    periodTo: '2025-07-31',
    amount: 599000,
    currency: 'сум',
    status: 'pending',
    issuedAt: '2025-07-01',
    dueAt: '2025-07-10',
  },
  {
    id: 'inv-2025-06',
    userId: 'u1',
    number: '2025-06',
    periodFrom: '2025-06-01',
    periodTo: '2025-06-30',
    amount: 599000,
    currency: 'сум',
    status: 'paid',
    issuedAt: '2025-06-01',
    dueAt: '2025-06-10',
  },
  {
    id: 'inv-2025-05',
    userId: 'u1',
    number: '2025-05',
    periodFrom: '2025-05-01',
    periodTo: '2025-05-31',
    amount: 599000,
    currency: 'сум',
    status: 'paid',
    issuedAt: '2025-05-01',
    dueAt: '2025-05-10',
  },
]

// Банковские реквизиты для оплаты (ПЛЕЙСХОЛДЕР — заменить на реальные).
export const paymentRequisites = {
  company: 'ООО «1C-Web»',
  inn: '300 000 000',
  account: '2020 8000 1234 5678 9012',
  bank: 'АКБ «Ipak Yuli», г. Ташкент',
  mfo: '01041',
}

export function getUserByCredentials(email, password) {
  const e = String(email || '').trim().toLowerCase()
  return users.find((u) => u.email.toLowerCase() === e && u.password === password) || null
}

export function getUserById(id) {
  return users.find((u) => u.id === id) || null
}

export function getTariff(id) {
  return tariffs[id] || null
}

export function getDatabasesByUser(userId) {
  return databases.filter((d) => d.userId === userId)
}

export function getInvoicesByUser(userId) {
  return invoices
    .filter((i) => i.userId === userId)
    .sort((a, b) => (a.issuedAt < b.issuedAt ? 1 : -1))
}

// «Публичная» проекция пользователя — без пароля, безопасно отдавать в props.
export function publicUser(user) {
  if (!user) return null
  const { password, ...safe } = user
  return safe
}
