import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../lib/translations'

const AppContext = createContext(null)

// Единый контекст приложения: текущий язык + управление модалкой заявки.
// Так любой компонент (шапка, тарифы, футер, финальный CTA) может открыть
// форму заявки и получить переводы без проброса пропсов.
export function AppProvider({ children }) {
  const [lang, setLang] = useState('ru')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Восстанавливаем выбранный язык из localStorage после гидрации.
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null
    if (saved === 'ru' || saved === 'uz') setLang(saved)
  }, [])

  // Блокируем прокрутку фона, когда открыта модалка или мобильное меню.
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = modalOpen || mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalOpen, mobileMenuOpen])

  const switchLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'ru' ? 'uz' : 'ru'
      if (typeof window !== 'undefined') localStorage.setItem('lang', next)
      return next
    })
  }, [])

  const openModal = useCallback((planName = null) => {
    setSelectedPlan(planName)
    setModalOpen(true)
    setMobileMenuOpen(false)
  }, [])

  const closeModal = useCallback(() => setModalOpen(false), [])

  const value = useMemo(
    () => ({
      lang,
      t: translations[lang],
      switchLang,
      modalOpen,
      selectedPlan,
      openModal,
      closeModal,
      mobileMenuOpen,
      setMobileMenuOpen,
    }),
    [lang, switchLang, modalOpen, selectedPlan, openModal, closeModal, mobileMenuOpen],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp должен использоваться внутри <AppProvider>')
  return ctx
}
