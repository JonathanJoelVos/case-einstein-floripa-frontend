import { useEffect, useState } from "react";
import { type ListResponse } from "../types/analysis-type";

export function useAnalysesQuery(params?: { page?: number; perPage?: number }) {
    const [data, setData] = useState<ListResponse | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function refetch() {
        const q = new URLSearchParams()

        if (params?.page) q.set("page", String(params.page))
        if (params?.perPage) q.set("perPage", String(params.perPage))

        setLoading(true)
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/resumes/analyses?${q.toString()}`)
            setLoading(true)
            const json = await response.json()
            setData(json)
            setLoading(false)
            setError(null)
        } catch {
            setError("Erro ao carregar")
            setLoading(false)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        refetch()
    }, [params?.page, params?.perPage])

    return { data, loading, error }
}
