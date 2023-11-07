'use client'
import { User } from 'lucide-react'
import { useMemo } from 'react'
import { useFileInput } from './Root'

interface ImagePreviewProps {}

export function ImagePreview() {
    const { files } = useFileInput()

    const previewUrl = useMemo(() => {
        if (files.length === 0) {
            return null
        }

        return URL.createObjectURL(files[0])
    }, [files])

    if (previewUrl === null) {
        return (
            <div className="bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full">
                <User className="w-8 h-8 text-violet-500" />
            </div>
        )
    } else {
        return <img src={previewUrl} alt="" className='h-16 w-16 rounded-full object-cover'/>
    }

}