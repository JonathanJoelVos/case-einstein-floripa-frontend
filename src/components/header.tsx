import { Button } from "./ui/button";
import { navItems } from "@/config/config-app";
import { useMotion } from "@/hooks/use-motion";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function Header() {
    const { fade } = useMotion()

    return (
        <motion.header className="pointer-events-none fixed inset-x-0 top-6 z-40 flex items-center justify-center" initial="hidden" animate="show" variants={fade}>
            <nav className="pointer-events-auto rounded-full bg-white/80 px-2 py-2 shadow-[0_2px_30px_rgba(2,6,23,0.08)] ring-1 ring-black/5 backdrop-blur-md dark:bg-neutral-800/80 dark:ring-white/10">
                <ul className="flex items-center gap-1 text-xs font-medium">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            {/* TODO:MUDAR PARA LINK */}
                            <Button
                                variant="ghost"
                                className={cn("rounded-full text-sm hover:cursor-pointer px-4 py-1 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-700/50", {
                                    "bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 hover:bg-neutral-700 hover:text-neutral-100 dark:hover:bg-neutral-800/50 dark:hover:text-neutral-200": item.type === "primary",
                                })}
                            >
                                {item.label}
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    )
}