'use client'

import Contato from "@/components/Compartilhados/Contato/Contato"
import FAQ from "@/components/Compartilhados/Faq/Faq"
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard/HeaderDashboard"

const duvidas = () =>{
    return (
        <div className="container">
            <HeaderDashboard />
            <FAQ />
            <Contato />

        </div>
    )
}

export default duvidas