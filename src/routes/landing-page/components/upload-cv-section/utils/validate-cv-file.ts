export function validateCVFile({acceptTypes, file, maxSizeMB}:{file: File, acceptTypes: string[], maxSizeMB: number}) {
    const okType = acceptTypes.includes(file.type)
    const okSize = file.size <= maxSizeMB * 1024 * 1024
    return { ok: okType && okSize, okType, okSize }
}