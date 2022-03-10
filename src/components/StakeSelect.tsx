import type { ChangeEvent } from 'react'
import type { Stake } from '../types'

type StakeSelectProps = {
  value: Stake,
  onChange: (value: Stake) => void,
  onBlur?: () => void,
  zero?: boolean | string,
}

function toStake(e: ChangeEvent<HTMLSelectElement>): Stake {
  const n = '01234'.indexOf(e.target.value) as Stake | -1
  
  if (n === -1) return 4

  return n
}

export default function StakeSelect({ value, onChange, onBlur, zero }: StakeSelectProps) {
  return (
    <select
      value={value}
      onChange={e => onChange(toStake(e))}
      onBlur={() => onBlur?.()}
    >
      <option value="4">100%</option>
      <option value="3">75%</option>
      <option value="2">50%</option>
      <option value="1">25%</option>
      {zero && <option value="0">{zero === true ? '0%' : zero}</option>}
    </select>
  )
}
