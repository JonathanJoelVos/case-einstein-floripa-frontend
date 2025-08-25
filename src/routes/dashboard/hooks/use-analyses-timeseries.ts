import * as React from "react"
import { z } from "zod"

const itemSchema = z.object({
  date: z.string(),             
  total: z.number(),
  avgScore: z.number(),
  withExperience: z.number(),
  educationAligned: z.number(),
})

const respSchema = z.object({
  items: z.array(itemSchema),
})

export type TimeseriesPoint = z.infer<typeof itemSchema>

export function useAnalysesTimeseries(params: { days: number }) {
  const [data, setData] = React.useState<TimeseriesPoint[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  async function refetch() {
    setLoading(true)
    setError(null)
    try {
      const url = `${import.meta.env.VITE_API_BASE_URL}/api/resumes/analyses/timeseries?days=${params.days}`
      const res = await fetch(url)
      const json = await res.json()
      const parsed = respSchema.parse(json)
      setData(parsed.items)
    } catch {
      setError("Erro ao carregar")
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.days])

  return { data, loading, error, refetch }
}
