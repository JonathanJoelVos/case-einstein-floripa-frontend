interface UploadCVSectionTitleProps {
    maxSizeMB: number;
}
export function UploadCVSectionTitle({
    maxSizeMB
}: UploadCVSectionTitleProps) {
    return (
        <>
            <h2 className="font-excalidraw text-3xl sm:text-4xl text-[#0b2836] dark:text-white uppercase">
                Envie seu currículo 📄
            </h2>
            <p className="mt-2 font-excalidraw text-sm text-neutral-600 dark:text-neutral-300">
                Arraste e solte seu arquivo <span className="font-semibold">PDF/DOC/DOCX</span> (máx. {maxSizeMB}MB)
                ou clique para selecionar.
            </p>
        </>
    )
}