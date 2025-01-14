'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { User2, FileText, FolderGit2, Mail, Terminal, LayoutDashboard } from 'lucide-react'

const navItems = [
    {
        name: "Profile",
        icon: User2,
        href: "/profile",
    },
    {
        name: "Projects",
        icon: FolderGit2,
        href: "/projects",
    },
    {
        name: "Articles",
        icon: FileText,
        href: "/articles",
    },
    {
        name: "Contact",
        icon: Mail,
        href: "/contact",
    },
]

export function Navbar() {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="flex h-14 items-center">


                <nav className="flex flex-1 items-center justify-center space-x-1">
                    {navItems.map((item) => (
                        <Button
                            key={item.name}
                            variant="ghost"
                            className={cn(
                                "gap-2",
                                // pathname === item.href && "bg-muted"
                            )}
                            asChild
                        >
                            <Link href={item.href} >
                                <item.icon className="h-4 w-4" />
                                <span className="hidden sm:inline-block">{item.name}</span>
                            </Link>
                        </Button>
                    ))}
                </nav>
            </div>
        </header>
    )
}

