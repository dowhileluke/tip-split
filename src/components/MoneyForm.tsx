import { FormEvent } from 'react'
import { Form } from './themed'
import MoneyInput from './MoneyInput'

type MoneyFormProps = {
  value: number | null,
  onChange: (value: number | null) => void,
  onSubmit?: () => void,
}

export default function MoneyForm({ value, onChange, onSubmit }: MoneyFormProps) {
  function submit() {
    if (value !== null && onSubmit) onSubmit()
  }

  function handleSubmit(e?: FormEvent<HTMLFormElement>) {
    e?.preventDefault()

    submit()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Total Tips:
        <MoneyInput value={value} onChange={onChange} onBlur={submit} placeholder="Enter amount" />
      </label>
    </Form>
  )
}
