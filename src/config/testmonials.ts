import CarolTestimonialPNG from "@/routes/landing-page/assets/testimonial/carol.png"
import SindyTestimonialPNG from "@/routes/landing-page/assets/testimonial/sindy.png"
import EvelynTestimonialPNG from "@/routes/landing-page/assets/testimonial/evelyn.png"

type Testimonial = {
    name: string
    course: string
    quote: string
    photo: string
    initial?: string
}

export const TESTIMONIALS: Testimonial[] = [
    {
        name: "CAROL DIAS",
        course: "ECONOMIA UFSC",
        quote:
            "Uma das lições que vou levar do Einstein é sobre praticar a generosidade. Eu sou uma pessoa que se preocupa muito com os outros e ver isso do Einstein se preocupando com a gente, pra mim, é a parte mais importante.",
        photo: CarolTestimonialPNG,
    },
    {
        name: "SINDY DE FREITAS",
        course: "RELAÇÕES INTERNACIONAIS UFSC",
        quote:
            "Entrar no Einstein significou que as minhas chances de realizae o sonho de passar na faculdade aumentaram. E que há sim uma luz no fim do túnel. Hoje tenho uma relação de amizade e companheirismo com boa parte do pessoal e de respeito por toda turma.",
        photo: SindyTestimonialPNG,
    },
    {
        name: "EVELIN BASQUES",
        course: "CIÊNCIAS BIOLÓGICAS UFSC",
        quote:
            "Eu  era bem desorganizada antigamente , trabalhava, ia para o cursinho e estudava no dia seguinte, por isso  não absorvia o conteúdo. Quando entrei no Einstein, logo fui apadrinhada, mas sempre tive vergonha de pedir ajuda para as pessoas. Porém, quando  meu padrinho ajudou a fazer meu cronograma de estudos, comecei a ver os resultados.",
        photo: EvelynTestimonialPNG
    },
]