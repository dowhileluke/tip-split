import { BreakdownPerson, Stake, Person } from '../types'
import StakeSelect from './StakeSelect'
import { formatMoney } from '../money'

type BreakdownTableProps = {
  list: BreakdownPerson[],
  onChange: (people: Person[]) => void,
}

export default function BreakdownTable({ list, onChange }: BreakdownTableProps) {
  function update(index: number, stake: Stake) {
    if (stake === 0) {
      const newList = [...list]

      newList.splice(index, 1)

      onChange(newList)
    }
    else {
      const newList = list.map((p, i) => index !== i ? p : { ...p, stake })

      onChange(newList)
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Stake</th>
          <th>Cut</th>
        </tr>
      </thead>
      <tbody>
        {list.map((p, i) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>
              <StakeSelect value={p.stake} onChange={s => update(i, s)} zero="delete" />
            </td>
            <td className="money">{formatMoney(p.cut)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
