import {
    Facebook, Instagram, Youtube, ChevronRight,
} from "lucide-react"
import LogoSvg from "@/assets/logo.svg"
import OndeNosAcharSVG from "@/assets/onde-nos-achar.svg"

export default function Footer() {
    return (
        <footer className="relative bg-blue-300 py-16 text-white flex items-center gap-1 justify-center">
            <img src={OndeNosAcharSVG} alt="Onde nos achar" className="w-72 opacity-40 mt-20 -ml-72" />
            <div className="max-w-7xl">
                <div className="relative overflow-hidden rounded-3xl bg-[#408AD5] border-2 border-white">
                    <ScribbleTexture />
                    <div className="grid gap-10 p-8 md:grid-cols-[minmax(260px,1.2fr)_1fr_1fr_1fr] md:p-12">
                        <div className="space-y-5">
                            <div className="flex items-start gap-3">
                                <p className="font-excalidraw text-xl leading-snug md:text-2xl">
                                    <img src={LogoSvg} alt="Logo Projeto Einstein" className="h-20 invert" />
                                    De aluno para aluno, <br /> transformando a história.
                                </p>
                            </div>
                            <div className="flex gap-3 md:hidden">
                                <SocialIcon href="#" Icon={Facebook} />
                                <SocialIcon href="#" Icon={Instagram} />
                                <SocialIcon href="#" Icon={Youtube} />
                            </div>
                        </div>

                        <Column title="Einstein Floripa">
                            <FooterLink href="#">Sobre nós</FooterLink>
                        </Column>

                        <Column title="Faça Parte">
                            <FooterLink href="#">Voluntariado</FooterLink>
                            <FooterLink href="#">Seja um parceiro</FooterLink>
                            <FooterLink href="#">Doe</FooterLink>
                        </Column>

                        <Column title="Nossas Aulas">
                            <p className="font-excalidraw text-sm/6 text-white/90">
                                Segunda – Sexta <br />
                                18h até 22h • CSS – UFSC <br />
                                Florianópolis, SC <br />
                                88040-370
                            </p>
                        </Column>

                        <Column title="Contato" className="md:col-start-4">
                            <FooterLink href="#">Formulário</FooterLink>
                            <FooterLink href="https://instagram.com" target="_blank">Instagram</FooterLink>
                            <FooterLink href="mailto:vale@einsteinfloripa.com.br">vale@einsteinfloripa.com.br</FooterLink>
                        </Column>

                        <div className="absolute right-6 top-6 hidden gap-3 md:flex">
                            <SocialIcon href="#" Icon={Facebook} />
                            <SocialIcon href="#" Icon={Instagram} />
                            <SocialIcon href="#" Icon={Youtube} />
                        </div>
                    </div>

                    <div className="border-t border-white/15 px-8 py-4 text-center">
                        <p className="font-excalidraw text-xs text-white/85">
                            Copyright © {new Date().getFullYear()} Projeto Einstein Pré-Vestibulares — Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}


function Column({
    title, children, className = "",
}: React.PropsWithChildren<{ title: string; className?: string }>) {
    return (
        <div className={`space-y-3 ${className}`}>
            <h3 className="font-excalidraw font-semibold tracking-wide">{title}</h3>
            <div className="space-y-2">{children}</div>
        </div>
    )
}

function FooterLink(props: React.ComponentProps<"a">) {
    const { children, className = "", ...rest } = props
    return (
        <a
            {...rest}
            className={`group inline-flex items-center gap-1 font-excalidraw text-sm text-white/90 hover:text-white ${className}`}
        >
            <ChevronRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" />
            <span className="underline-offset-2 group-hover:underline">{children}</span>
        </a>
    )
}

function SocialIcon({ href, Icon }: { href: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }) {
    return (
        <a
            href={href}
            className="inline-grid h-10 w-10 place-items-center rounded-full bg-white/95 text-[#0b2836] ring-2 ring-white/80 shadow-[0_10px_25px_rgba(2,6,23,0.22)] transition hover:-translate-y-0.5"
        >
            <Icon className="h-5 w-5" />
        </a>
    )
}

/** Textura + linhas para vibe “papel/rascunho” */
function ScribbleTexture() {
    return (
        <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.12]" viewBox="0 0 400 200" preserveAspectRatio="none">
            <defs>
                <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M0 32h32M32 0v32" stroke="white" strokeOpacity="0.25" strokeWidth="0.6" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <path d="M8 24 C80 6,160 18,220 28 S340 54,392 30" stroke="white" strokeOpacity="0.2" strokeWidth="2" fill="none" />
            <path d="M8 176 C80 194,160 182,220 172 S340 146,392 170" stroke="white" strokeOpacity="0.18" strokeWidth="2" fill="none" />
        </svg>
    )
}
