import { z } from "zod"

export const analysisSchema = z.object({
  id: z.string(),
  resumeId: z.string(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  areas: z.array(z.string()),
  cultureScore: z.number(),
  cultureScoreDescription: z.string().nullable(),
  realExperience: z.boolean(),
  yearsOfExperience: z.number().nullable(),
  summary: z.string().nullable(),
  createdAt: z.string().or(z.date()),
  resume: z.object({
    id: z.string(),
    fileName: z.string(),
    fileType: z.string(),
    url: z.string().nullable(),
  }),
})

export const listResponseSchema = z.object({
  items: z.array(analysisSchema),
  page: z.number(),
  perPage: z.number(),
})

export type Analysis = z.infer<typeof analysisSchema>
export type ListResponse = z.infer<typeof listResponseSchema>
