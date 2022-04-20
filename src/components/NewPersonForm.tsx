import { FormEvent, useRef, useState } from 'react'
import styled from 'styled-components'
import { Form, Input, Button } from './themed'
import type { Stake, Person } from '../types'
import StakeSelect from './StakeSelect'

type NewPersonFormProps = {
  onSubmit: (person: Person) => void,
}

const GridForm = styled(Form)`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: auto 1fr;
  gap: 8px;

  & :first-child {
    grid-column: span 2;
  }
`

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
    <GridForm onSubmit={handleSubmit}>
      <Input ref={ref} value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <StakeSelect value={stake} onChange={setStake} />
      <Button>Add Person</Button>
    </GridForm>
  )
}
