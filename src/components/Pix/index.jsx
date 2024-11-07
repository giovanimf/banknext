import Banner3 from '../../assets/banner3.png';
export default function Pix(){
    return(
        <div className="px-8 lg:px-14 max-w-screen-2xl mx-auto py-8 md:py-16">
            <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className='md:w-2/5'>
                    <img src={Banner3} alt="Banner de about"/>
                </div>
                <div className='md:w-3/5'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-2 md:w-4/5'>Pagamentos Instantâneos com Pix no BankNext</h2>
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-4'>No BankNext, você realiza pagamentos e transferências instantâneas com Pix, 24 horas por dia, sem taxas escondidas. Rápido, seguro e simples, o Pix coloca o controle financeiro nas suas mãos, a qualquer hora e em qualquer lugar. Com a gente, você tem a liberdade de movimentar seus recursos de forma prática e eficiente.</p>
                    <button className="btn-primary">Saiba mais</button>
                </div>
            </div>
        </div>
    )
}