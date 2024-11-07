import Company1 from '../../assets/company1.png';
import Company2 from '../../assets/company2.png';
import Company3 from '../../assets/company3.png';
import Company4 from '../../assets/company4.png';
import Company5 from '../../assets/company5.png';
import Company6 from '../../assets/company6.png';
import Company7 from '../../assets/company7.png';
import Banner4 from '../../assets/banner4.png';

export default function Selos(){
    return(
        <div className="px-8 lg:px-14 max-w-screen-2xl mx-auto py-4 md:py-16 bg-neutralSilver">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 w-full">
                    <img src={Banner4} alt="Banner de about" className='-ml-4 md:ml-0 w-full md:w-fit'/>
                </div>
                <div className="md:w-2/3 w-full">
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-2 mt-1'>O BankNext tem se destacado no mercado financeiro, recebendo prêmios que reconhecem nossa inovação, compromisso com a excelência e impacto positivo no setor. Nosso trabalho dedicado em oferecer soluções bancárias modernas e acessíveis foi reconhecido por diversas entidades, consolidando nossa posição como referência em serviços financeiros de qualidade. Estamos orgulhosos de continuar a oferecer aos nossos clientes uma experiência superior, baseada em confiança, transparência e resultados.</p>
                    <h5 className="text-brandPrimary text-xl font-semibold mb-2">Prêmios e Reconhecimentos</h5>
                    <p className='text-base text-neutralDGrey mb-4'>Nossos últimos selos</p>
                    <div className="">
                        <div className="flex gap-8 flex-wrap">
                            <img src={Company1} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                            <img src={Company2} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                            <img src={Company3} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                            <img src={Company4} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                            <img src={Company5} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                            <img src={Company6} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                            <img src={Company7} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                            <div className="flex items-center gap-8">
                                <a href='/' className="font-bold text-brandPrimary hover:text-neutral-700">Ver todos os selos</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                                    <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="#4CAF4F" className="inline-block ml-2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}