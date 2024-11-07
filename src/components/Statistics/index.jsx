import club from "../../assets/club.png"
import booking from "../../assets/booking.png"
import payment from "../../assets/psyment.png"
import members from "../../assets/members.png"

export default function Statistics(){
    return(
        <div className="px-8 lg:px-14 max-w-screen-2xl mx-auto py-4 md:py-16 bg-neutralSilver">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full">
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Conheça as Vantagens de Investir com a Gente</h2>
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-4'>Investir pode parecer desafiador, mas quando você tem a orientação certa, os resultados falam por si. Descubra como BankNext pode ajudá-lo a atingir seus objetivos financeiros mais ambiciosos, com soluções inovadoras que oferecem segurança e crescimento. Nossa plataforma de investimentos permite que você explore diferentes tipos de ativos, com a confiança de que seu capital está sendo bem administrado.</p>
                </div>
                <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-4">
                        <img src={members} alt=""/>
                        <div>
                            <h4 className="text-2xl text-neutralDgrey font-semibold">2,245,341</h4>
                            <p>Membros</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={booking} alt=""/>
                        <div>
                            <h4 className="text-2xl text-neutralDgrey font-semibold">828,867</h4>
                            <p>Transações de Investimento Realizadas</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={club} alt=""/>
                        <div>
                            <h4 className="text-2xl text-neutralDgrey font-semibold">46,328</h4>
                            <p>Fundos de Investimento Diversificados</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={payment} alt=""/>
                        <div>
                            <h4 className="text-2xl text-neutralDgrey font-semibold">21,926,436</h4>
                            <p>Pagamentos e Transferências de Capital</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}