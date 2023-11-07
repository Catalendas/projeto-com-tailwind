import { ComponentProps } from "react"



type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
    return <div {...props} className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100" />
}

type PrefixProps = ComponentProps<'div'>

export function Prefix(props: PrefixProps) {
    return <div {...props}/>
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
    return <input {...props} className="flex-1 outline-none border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"/>
}