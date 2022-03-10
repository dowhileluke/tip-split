import { FormEvent, useState } from 'react'
import type { Stake, Person } from '../types'
import StakeSelect from './StakeSelect'

type NewPersonFormProps = {
  onSubmit: (person: Person) => void,
}

let personId = 0

export default function NewPersonForm({ onSubmit }: NewPersonFormProps) {
  const [stake, setStake] = useState<Stake>(4)
  const [name, setName] = useState('')

  function submit() {
    if (name) {
      setName('')

      onSubmit({ name, stake, id: personId++, })
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    submit()
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add Person</legend>
        <StakeSelect value={stake} onChange={setStake} />
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      </fieldset>
    </form>
  )
}
