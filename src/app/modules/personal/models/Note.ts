export interface Note{
  id: number,
  date: Date,
  content: string,
  state: boolean
}

export interface InsertNote{
  date: Date,
  content: string,
  state: boolean
}
