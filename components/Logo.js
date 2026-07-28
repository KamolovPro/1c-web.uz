// Логотип 1С-Web.Uz. onClick позволяет закрывать мобильное меню при переходе.
export default function Logo({ onClick }) {
  return (
    <a href="#top" className="logo" onClick={onClick} aria-label="1C-Web.Uz">
      <span className="logo-brand">1С</span>
      <span className="logo-name">
        -Web<span className="logo-domain">.Uz</span>
      </span>
    </a>
  )
}
