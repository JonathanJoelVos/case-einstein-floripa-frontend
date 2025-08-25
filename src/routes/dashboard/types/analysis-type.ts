export type Analysis = {
  id: string
  resumeId: string
  name: string | null
  email: string | null
  phone: string | null
  areas: string[]
  cultureScore: number
  cultureScoreDescription: string | null
  realExperience: boolean
  yearsOfExperience: number | null
  summary: string | null
  createdAt: string | Date
  resume: {
    id: string
    fileName: string
    fileType: string
    url: string | null
  }
}

export type ListResponse = {
  items: Analysis[]
  page: number
  perPage: number
}