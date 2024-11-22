'use client'

import Header from "@/components/Compartilhados/Header/Header"
import Hero from "@/components/Home/Hero/Hero"
import Vantagens from "@/components/Home/Vantagens/Vantagens"
import Destaque from "@/components/Home/Destaque/Destaque"
import FAQ from "@/components/Compartilhados/Faq/Faq"
import Contato from "@/components/Compartilhados/Contato/Contato"
import Footer from "@/components/Compartilhados/Footer/Footer"



const PaginaInicial = () =>{
    return (
        <>
        <Header />
        <Hero />
        <Vantagens />
        <Destaque />
        <FAQ />
        <Contato />
        <Footer />
        </>
    )
}

export default PaginaInicial