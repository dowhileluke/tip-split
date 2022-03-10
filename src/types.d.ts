export type Stake = 0 | 1 | 2 | 3 | 4

export type Person = {
  id: number,
  name: string,
  stake: Stake,
}

export type BreakdownPerson = Person & {
  cut: number,
}
