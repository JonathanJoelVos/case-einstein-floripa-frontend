import { Card, CardContent } from "@/components/ui/card"

type Props = {
    imageSrc: string
    alt?: string
}

export default function ExcalidrawCard({ imageSrc, alt = "Imagem" }: Props) {
    return (
        <div className="px-4">
            <Card
                className={
                    "relative mx-auto max-w-xl rounded-3xl  border-2 bg-green-200 border-black shadow"
                }
            >
                <div className="pointer-events-none absolute left-8 -top-4 z-20 h-8 w-28 rotate-[-6deg] rounded-sm bg-yellow-200/80 shadow-md" />
                <div className="pointer-events-none absolute right-10 -top-3 z-20 h-6 w-16 rotate-3 rounded-sm bg-yellow-200/70 shadow" />

                <div className="relative p-5 pb-0">
                    <div className="relative mx-auto w-full overflow-hidden rounded-2xl ring-1 ring-black/10">
                        <img
                            src={imageSrc}
                            alt={alt}
                            className="block w-full select-none object-cover"
                        />
                        <svg
                            className="pointer-events-none absolute -bottom-3 left-6 h-8 w-40 text-neutral-400"
                            viewBox="0 0 200 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                        >
                            <path d="M5 30 C 40 5, 60 35, 95 10 S 160 35, 195 12" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                <CardContent className="p-6">
                    <div className="prose prose-neutral max-w-none text-start md:prose-lg text-sm">
                        <p className="font-semibold text-slate-800">
                            Somos constituídos de uma equipe repleta de universitários determinados, imersos numa
                            experiência de constante aprendizado, ampliando suas possibilidades pessoais e profissionais.
                        </p>

                        <p className="mt-6 text-slate-800">
                            Desse modo, voltamos nossos esforços para dar oportunidades aos alunos de baixa renda da região
                            da Grande Florianópolis, fornecendo melhores oportunidades de acesso ao ensino superior de qualidade.
                        </p>

                        <p className="mt-6 text-slate-800">
                            Nossos primeiros resultados foram incríveis, <span className="font-bold">48%</span> dos nossos alunos
                            foram aprovados em <span className="font-bold">2015</span> e no ano de <span className="font-bold">2016</span> atingimos um índice ainda maior,
                            foram aprovados em universidades públicas <span className="font-bold">70%</span> dos nossos alunos.
                            Neste ano e nos próximos, queremos ainda mais!
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
