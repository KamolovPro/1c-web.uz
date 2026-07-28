import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

// Кнопка «копировать в буфер» с временным подтверждением.
export default function CopyButton({ value, labelCopy, labelCopied }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* буфер недоступен — тихо игнорируем */
    }
  }

  return (
    <button type="button" className="copy-btn" onClick={copy}>
      {copied ? <Check size={15} /> : <Copy size={15} />}
      <span>{copied ? labelCopied : labelCopy}</span>
    </button>
  )
}
