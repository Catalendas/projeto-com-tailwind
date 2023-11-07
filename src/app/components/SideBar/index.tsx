'use client'

import { Menu, Search } from "lucide-react";
import { Logo } from "./Logo";
import { Home, BarChart, SquareStack, CheckSquare, Flag, Users } from "lucide-react"
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Input"
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from "../Button";

export function SideBar() {
    return (
        <Collapsible.Root className="flex data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 data-[state=open]:h-screen lg:data-[state=closed]:h-screen flex-col  gap-6 border-b p-4 border-r-slate-200 fixed left-0 top-0 right-0 z-20 bg-white lg:bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 dark:bg-zinc-900 dark:border-zinc-800">
            
            <div className="flex items-center justify-between">
                <Logo />
                <Collapsible.Trigger asChild className="lg:hidden">
                    <Button variant="ghost">
                        <Menu className="h-6 w-6"/>
                    </Button>
                </Collapsible.Trigger>
            </div>

            <Collapsible.Content forceMount className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">
                
                <Input.Root>
                    <Input.Prefix>
                        <Search className="h-5 w-5 text-zinc-500" />
                    </Input.Prefix>
                    <Input.InputControl placeholder="Search"/>
                </Input.Root>

                <nav className="space-y-0.5">
                    <NavItem 
                        title="Home"
                        icon={Home}
                    />
                    <NavItem 
                        title="Dashboard"
                        icon={BarChart}
                    />
                    <NavItem 
                        title="Projects"
                        icon={SquareStack}
                    />
                    <NavItem 
                        title="Tasks"
                        icon={CheckSquare}
                    />
                    <NavItem 
                        title="Reporting"
                        icon={Flag}
                    />
                    <NavItem 
                        title="Users"
                        icon={Users}
                    />
                </nav>

                <UsedSpaceWidget />

                <div className="h-px bg-zinc-200" />

                <Profile />
            </Collapsible.Content>
        </Collapsible.Root>
    )
}