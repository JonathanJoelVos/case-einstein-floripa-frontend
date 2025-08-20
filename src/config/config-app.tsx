import { Twitter, Instagram, Github, Linkedin } from "lucide-react"
import type { ReactNode } from "react";

export const navItems: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    type?: "primary" | "secondary";
}[] = [
        { label: "Sobre nós", href: "#about" },
        { label: "Equipe", href: "#articles" },
        { label: "Resultados", href: "#projects" },
        { label: "Contato", href: "#speaking" },
        { label: "Apoie", href: "#uses", type: "primary" },
    ]

export const socialLinks: {
    label: string;
    href: string;
    icon: ReactNode;
}[] = [
        {
            href: "https://twitter.com/cursinhofree",
            label: "Twitter",
            icon: <Twitter className="h-5 w-5" />
        },
        {
            href: "https://instagram.com/cursinhofree",
            label: "Instagram",
            icon: <Instagram className="h-5 w-5" />
        },
        {
            href: "https://instagram.com/cursinhofree",
            label: "GitHub",
            icon: <Github className="h-5 w-5" />
        },
        {
            href: "https://instagram.com/cursinhofree",
            label: "LinkedIn",
            icon: <Linkedin className="h-5 w-5" />
        },
    ]
