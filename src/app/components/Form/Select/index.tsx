'use client'

import * as Select from "@radix-ui/react-select"
import { ChevronDown } from "lucide-react"
import { ReactNode } from "react"
import { SelectItem } from "./SelectItem"

interface SelectProps extends Select.SelectProps {
    children: ReactNode
    placeholder: string
}

export function SelectComponent({ placeholder, children, ...props }: SelectProps) {
    return (
        <Select.Root {...props}>
            <Select.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-6 py-2 shadow-sm data-[placeholder]:text-zinc-600 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100">
            <Select.Value placeholder={placeholder} className="text-black" />
            <Select.Icon>
                <ChevronDown className="h-5 w-5 text-zinc-500" />
            </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content sideOffset={8} side="bottom" position="popper" className="z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden shadow-sm animate-slideDownAndFade">
                    <Select.Viewport>
                        { children }
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}