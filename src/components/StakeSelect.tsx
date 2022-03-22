import type { ChangeEvent } from 'react'
import { Select } from './themed'
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
    <Select
      value={value}
      onChange={e => onChange(toStake(e))}
      onBlur={() => onBlur?.()}
      className="accent"
    >
      <option value="4">1</option>
      <option value="3">&frac34;</option>
      <option value="2">&frac12;</option>
      <option value="1">&frac14;</option>
      {zero && <option value="0">{zero === true ? '0' : zero}</option>}
    </Select>
  )
}
