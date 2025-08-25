import * as React from "react"
import { z } from "zod"

const areaSchema = z.enum([
  "Ministerio",
  "Embaixada do Amor",
  "Vale do Silicio",
  "Time Square",
  "Hogwarts",
  "Docencia",
])

const summarySchema = z.object({
  totalAnalyses: z.number(),
  avgCultureScore: z.number(),
  withExperience: z.number(),
  educationAligned: z.number(),
  byArea: z.record(areaSchema, z.number()),
  newAnalysesLastWindow: z.number(),
  newAnalysesPrevWindow: z.number(),
  lastWindowChangePct: z.number(),
})

export type Summary = z.infer<typeof summarySchema>

export function useAnalysesSummary(windowDays = 7) {
  const [data, setData] = React.useState<Summary | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  async function refetch() {
    setLoading(true)
    setError(null)
    try {
      const url = `${import.meta.env.VITE_API_BASE_URL}/api/resumes/analyses/summary?windowDays=${windowDays}`
      const res = await fetch(url)
      const json = await res.json()
      const parsed = summarySchema.parse(json)
      setData(parsed)
    } catch {
      setError("Erro ao carregar")
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowDays])

  return { data, loading, error, refetch }
}
