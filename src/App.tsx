import { useState } from 'react'
import Layout from './components/Layout'
import BreakdownTable from './components/BreakdownTable'
import MoneyForm from './components/MoneyForm'
import NewPersonForm from './components/NewPersonForm'
import { formatMoney } from './money'
import type { Person, BreakdownPerson } from './types'

function getBreakdown(tipTotal: number, people: Person[]) {
  let stakeTotal = people.reduce((sum, p) => sum + p.stake, 0)

  if (stakeTotal < 4) stakeTotal = 4

  let breakdown: BreakdownPerson[] = []
  let cutTotal = 0

  people.forEach(p => {
    const cut = Math.round(tipTotal * p.stake / stakeTotal)
    const b: BreakdownPerson = { ...p, cut }

    breakdown.push(b)
    cutTotal += cut
  })

  let delta = tipTotal - cutTotal

  if (delta < 0) {
    breakdown = breakdown.map(p => ({ ...p, cut: p.cut - 1 }))
    delta += breakdown.length
  }

  return [breakdown, delta] as const
}

function App() {
  const [hasBegun, setHasBegun] = useState(false)
  const [tips, setTips] = useState<number | null>(null)
  const [people, setPeople] = useState<Person[]>([])

  const begin = () => setHasBegun(true)
  const moneyForm = (<MoneyForm value={tips} onChange={setTips} onSubmit={begin} />)

  // hide UI until money amount has been entered
  if (!hasBegun) {
    return (
      <Layout foot={moneyForm} />
    )
  }

  const [breakdown, unassigned] = getBreakdown(tips || 0, people)

  return (
    <Layout
      head={moneyForm}
      main={
        <>
          <BreakdownTable list={breakdown} onChange={setPeople} />
          <div className="note">
            {unassigned > 0 && `${formatMoney(unassigned)} is unassigned`}
          </div>
        </>
      }
      foot={<NewPersonForm onSubmit={p => setPeople(prev => [...prev, p])} />}
    />
  )
}

export default App
