import { useState, ChangeEvent, Ref, forwardRef } from 'react'
import { formatMoney, parseMoney } from '../money'

export type MoneyInputProps = {
  value: number | null,
  onChange: (value: number | null) => void,
  onBlur?: () => void,
  placeholder?: string,
}

function shortFormat(n: number | null) {
  const f = formatMoney(n)

  if (f.endsWith('.00')) return f.slice(0, -3)

  return f
}

function MoneyInput(props: MoneyInputProps, fwdRef: Ref<HTMLInputElement>) {
  const { value, onChange, onBlur, placeholder } = props
  const [centValue, setCentValue] = useState(value)
  const [textValue, setTextValue] = useState(() => shortFormat(value))
  const [isTouched, setIsTouched] = useState(false)

  if (centValue !== value) {
    setCentValue(value)
    setTextValue(shortFormat(value))
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const v = e.target.value
    const p = parseMoney(v)

    setTextValue(v)
    setCentValue(p)

    onChange(p)
  }

  function handleBlur() {
    if (centValue !== null) {
      setTextValue(shortFormat(centValue))
    }

    setIsTouched(true)

    onBlur?.()
  }

  return (
    <input
      ref={fwdRef}
      value={textValue}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      required={isTouched}
      className="money"
      inputMode="decimal"
    />
  )
}

export default forwardRef(MoneyInput)
