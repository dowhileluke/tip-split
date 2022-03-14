import { FormEvent, useRef, useState } from 'react'
import type { Stake, Person } from '../types'
import StakeSelect from './StakeSelect'

type NewPersonFormProps = {
  onSubmit: (person: Person) => void,
}

let personId = 0

export default function NewPersonForm({ onSubmit }: NewPersonFormProps) {
  const [stake, setStake] = useState<Stake>(4)
  const [name, setName] = useState('')
  const ref = useRef<HTMLInputElement>(null)

  function submit() {
    if (name) {
      setName('')

      onSubmit({ name, stake, id: personId++, })
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    ref.current?.focus()

    submit()
  }

  return (
    <form className="new-person" onSubmit={handleSubmit}>
      <input ref={ref} value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <StakeSelect value={stake} onChange={setStake} />
      <button>Add Person</button>
    </form>
  )
}
