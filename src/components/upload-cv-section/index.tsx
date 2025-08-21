import { motion } from "motion/react"
import { type ChangeEvent, type DragEvent as ReactDragEvent } from "react"
import { useMotion } from "@/hooks/use-motion"
import { useUploadCv } from "@/hooks/use-upload-cv"
import { UploadCVSectionTitle } from "./components/section-title"
import { DropzoneCV } from "./components/dropzone-cv"

export default function UploadCVSection() {
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
            // 🔧 Exemplo: envie para sua API
            // const fd = new FormData()
            // fd.append("cv", file)
            // await fetch("/api/upload-cv", { method: "POST", body: fd })
            await new Promise((r) => setTimeout(r, 1200)) // simulação
            updateStatus("success")
        } catch (err) {
            console.error(err)
            updateStatus("error")
        }
    }

    return (
        <section className="relative  dark:from-neutral-900 dark:to-neutral-950 py-24 bg-blue-200/20">
            <motion.div
                variants={inViewContainer}
                className="mx-auto max-w-3xl px-6 text-center"
            >
                <UploadCVSectionTitle
                    maxSizeMB={MAX_SIZE_MB}
                />
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