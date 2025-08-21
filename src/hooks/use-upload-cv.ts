import { validateCVFile } from "@/components/upload-cv-section/utils/validate-cv-file"
import { useState, type RefObject } from "react"


const ACCEPT_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]

const MAX_SIZE_MB = 8 

export type StatusUploadCV = "idle" | "uploading" | "success" | "error"

export function useUploadCv(){
    const [file, setFile] = useState<File | null>(null)
    const [status, setStatus] = useState<StatusUploadCV>("idle")

    function chooseFile(files?: FileList | null) {
        if (!files || !files[0]) return
        const file = files[0]
        const validate = validateCVFile({
            file,
            acceptTypes: ACCEPT_TYPES,
            maxSizeMB: MAX_SIZE_MB, 
        })
        if (!validate.ok) {
            setStatus("error")
            setFile(null)
            const why = !validate.okType ? "formato inválido (use PDF/DOC/DOCX)" : `arquivo maior que ${MAX_SIZE_MB}MB`
            alert(`Ops! ${why}`)
            return
        }
        setFile(file)
        setStatus("idle")
    }

    function reset(inputRef?: RefObject<HTMLInputElement | null>) {
        setFile(null)
        setStatus("idle")
        if (inputRef?.current) inputRef.current.value = ""
    }

    function updateStatus(newStatus: StatusUploadCV) {
        setStatus(newStatus)
    }

    return {
        file,
        chooseFile,
        status,
        updateStatus,
        reset,
        MAX_SIZE_MB,
        ACCEPT_TYPES
    }
}