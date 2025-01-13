'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
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
        <header className="sticky top-0 z-50 opacity-75 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <Link href="/">
                    <div className="flex items-center gap-2 font-bold">
                        <Terminal className="h-5 w-5" />
                        <span>Philip Solarz</span>
                    </div>
                </Link>

                <nav className="flex flex-1 items-center justify-center space-x-1">
                    {navItems.map((item) => (
                        <Button
                            key={item.name}
                            variant="ghost"
                            className={cn(
                                "gap-2",
                                pathname === item.href && "bg-muted"
                            )}
                            asChild
                        >
                            <Link href={item.href}>
                                <item.icon className="h-4 w-4" />
                                <span className="hidden sm:inline-block">{item.name}</span>
                            </Link>
                        </Button>
                    ))}
                </nav>

                <div className="flex items-center justify-end">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}

