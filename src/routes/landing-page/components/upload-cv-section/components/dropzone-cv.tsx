import { useRef, type ChangeEvent, type RefObject, type DragEvent as ReactDragEvent } from "react"
import { Loader2, Upload, FileText, CheckCircle2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { StatusUploadCV } from "@/routes/landing-page/hooks/use-upload-cv"
import { ScribbleBackground } from "./scribble-background"
import { fmtBytes } from "../utils/fmt-bytes"
import ArrowSvg from "@/routes/landing-page/assets/arrow2.svg"

interface DropzoneCVProps {
    file: File | null
    onDrop: (e: ReactDragEvent<HTMLLabelElement>) => void
    onReset: (inputRef: RefObject<HTMLInputElement | null>) => void
    onUpload: () => void
    onChoose: (e: ChangeEvent<HTMLInputElement>) => void
    acceptTypes?: string[]
    status: StatusUploadCV
}
export function DropzoneCV({
    onDrop,
    onReset,
    onUpload,
    onChoose,
    acceptTypes,
    file,
    status,
}: DropzoneCVProps) {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const isSuccess = status === "success"
    const isUploading = status === "uploading"

    return (
        <>
            <div className="relative mx-auto mt-8 max-w-2xl border-2 p-20 rounded-xl border-black">
                <img
                    src={ArrowSvg}
                    alt="Seta apontando para baixo"
                    className="absolute top-20 -left-60 w-60"
                    style={{ filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))" }}
                />
                <label
                    onDragOver={(e) => {
                        e.preventDefault()
                    }}
                    onDrop={onDrop}
                    tabIndex={0}
                >
                    <ScribbleBackground />

                    <input
                        ref={inputRef}
                        type="file"
                        accept={acceptTypes?.join(",")}
                        className="sr-only"
                        onChange={onChoose}
                    />

                    <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="grid h-14 w-14 place-items-center rounded-full bg-sky-500 text-white">
                            {isSuccess ? (
                                <CheckCircle2 className="h-7 w-7" />
                            ) : (
                                <Upload className="h-7 w-7" />
                            )}
                        </div>
                        {isSuccess && (
                            <span>
                                <span className="font-excalidraw text-sky-600">Currículo enviado com sucesso!</span>
                            </span>
                        )}
                        {file ? (
                            <>
                                <div className="flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-left ">
                                    <FileText className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                                    <span className="font-excalidraw text-sm text-neutral-800 dark:text-neutral-200">
                                        {file.name} <span className="text-neutral-500">({fmtBytes(file.size)})</span>
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => onReset(inputRef)}
                                        className="ml-1 rounded-full p-1 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100"
                                        aria-label="Remover arquivo"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>

                                <div className="mt-3 flex items-center justify-center gap-3">

                                    {
                                        !isSuccess && (
                                            <Button
                                                type="button"
                                                onClick={onUpload}
                                                disabled={isUploading || isSuccess}
                                                className="rounded-full"
                                            >
                                                {isUploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                                {isSuccess ? "Enviado!" : "Enviar currículo"}
                                            </Button>
                                        )
                                    }
                                    <button
                                        type="button"
                                        onClick={() => inputRef.current?.click()}
                                        className="font-excalidraw text-sm text-sky-700 underline underline-offset-4 hover:text-sky-900 dark:text-sky-300"
                                    >
                                        trocar arquivo
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="font-excalidraw text-lg text-neutral-800 dark:text-neutral-100">
                                    Arraste e solte aqui
                                </p>
                                <p className="font-excalidraw text-sm text-neutral-600 dark:text-neutral-300">
                                    ou <span className="underline underline-offset-4">clique</span> para selecionar
                                </p>
                            </>
                        )}
                    </div>
                </label>
            </div>
        </>
    )
}