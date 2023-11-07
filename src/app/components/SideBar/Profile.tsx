import { LogOut } from "lucide-react"
import { Button } from "../Button"

export function Profile() {
    return (
        <div className="flex items-center gap-3" >
            <img src="https://github.com/catalendas.png" alt=""  className="h-10 w-10 rounded-full"/>
            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">Marcos Alexandre</span>

                <span className="truncate text-sm text-zinc-500">marcos@gmail.com</span>
            </div>
            <Button type="button" variant="ghost">
                <LogOut className="w-5 h-5 text-zinc-500"/>
            </Button>
        </div>
    )
}