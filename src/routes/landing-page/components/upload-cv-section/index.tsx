import { motion } from "motion/react"
import { type ChangeEvent, type DragEvent as ReactDragEvent } from "react"
import { useMotion } from "@/hooks/use-motion"
import { useUploadCv } from "@/routes/landing-page/hooks/use-upload-cv"
import { UploadCVSectionTitle } from "./components/section-title"
import { DropzoneCV } from "./components/dropzone-cv"
import { toast } from "sonner"

export function UploadCVSection() {
    const { inViewContainer } = useMotion()
    const { file, chooseFile, status, updateStatus, reset, MAX_SIZE_MB, ACCEPT_TYPES } = useUploadCv()

    const isUploading = status === "uploading"

    function onDrop(e: ReactDragEvent<HTMLLabelElement>) {
        e.preventDefault()
        e.stopPropagation()
        chooseFile(e.dataTransfer?.files)
    }

    async function handleUpload() {
        if (!file || isUploading) return
        updateStatus("uploading")

        try {
            const fd = new FormData()
            fd.append("cv", file)

            const res = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/resumes/upload`,
                { method: "POST", body: fd }
            )

            if (!res.ok) {
                let msg = "Erro ao enviar o currículo. Tente novamente em instantes."
                try {
                    const data = await res.json()
                    if (data?.error) msg = String(data.error)
                } catch {
                    // nada
                }
                throw new Error(msg)
            }

            updateStatus("success")
            toast.success("Currículo enviado com sucesso!")
        } catch (err) {
            console.error(err)
            updateStatus("error")
            toast.error("Erro ao enviar o currículo. Tente novamente em instantes.")
            reset()
        }
    }

    return (
        <section className="relative dark:from-neutral-900 dark:to-neutral-950 py-24 bg-blue-200/20">
            <motion.div variants={inViewContainer} className="mx-auto max-w-3xl px-6 text-center">
                <UploadCVSectionTitle maxSizeMB={MAX_SIZE_MB} />
                <DropzoneCV
                    file={file}
                    onDrop={onDrop}
                    onChoose={(e: ChangeEvent<HTMLInputElement>) => chooseFile(e.target.files)}
                    acceptTypes={ACCEPT_TYPES}
                    onReset={reset}
                    onUpload={handleUpload}
                    status={status}
                />
            </motion.div>
        </section>
    )
}
