import Banner2 from '../../assets/banner2.png';
export default function Investimentos(){
    return(
        <div className="px-8 lg:px-14 max-w-screen-2xl mx-auto py-4 md:py-16">
            <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className='md:w-2/5'>
                    <img src={Banner2} alt="Banner de about"/>
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-2 md:w-4/5'>O Invisível no Mundo dos Investimentos</h2>
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-4'> Com mais de 30 anos de experiência, nossa equipe especializada está pronta para ajudá-lo a tomar decisões informadas e transformadoras.Acreditamos que o futuro financeiro de cada cliente é uma jornada única. Por isso, trabalhamos lado a lado com você para desenhar um portfólio de investimentos sob medida. Em cada passo, nosso compromisso é garantir que você compreenda o caminho, o risco e a recompensa.</p>
                    <button className="btn-primary">Saiba mais</button>
                </div>
            </div>
        </div>
    )
}