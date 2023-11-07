'use client'

import { ComponentProps, createContext, Dispatch, SetStateAction, useContext, useId, useState } from "react"

interface RootProps extends ComponentProps<'div'>  {
    multiple?: boolean
}

interface FileInputContextProps {
    id: string
    files: File[]
    multiple: boolean
    onFilesSelected: (file: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextProps)

export function Root({multiple = false, ...props}: RootProps) {
    const id = useId()
    const [files, setFiles] = useState<File[]>([])

    function onFilesSelected(files: File[]) {
        if (multiple) {
            setFiles((state) => [...state, ...files])
        } else {
            setFiles(files)
        }
    }

    return (
        <FileInputContext.Provider value={{ multiple, id, files, onFilesSelected}}>
            <div {...props} />
        </FileInputContext.Provider>        
    )
}

export const useFileInput = () => useContext(FileInputContext)