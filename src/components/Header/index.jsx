import { Carousel } from "flowbite-react";
import Banner1 from '../../assets/banner1.png';
export default function Header(){
    return(
        <div className="bg-neutralSilver">
            <div className="px-8 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
                <Carousel className="w-full mx-auto">
                    <div className="my-2 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={Banner1} alt="Banner1 do slide"/>
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                            Aprendizados e lições <span className="text-brandPrimary leading-snug">em 8 anos</span>
                            </h1>
                            <p className="text-neutralDGrey text-base mb-4">Descubra como expandir seu negócio: investir em um site ou redes sociais?</p>
                            <button className="btn-primary">Cadastre-se</button>
                        </div>
                    </div>
                    <div className="my-2 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={Banner1} alt="Banner1 do slide"/>
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                            Transforme sua relação com <span className="text-brandPrimary leading-snug">o dinheiro</span>
                            </h1>
                            <p className="text-neutralDGrey text-base mb-4">Tenha o controle total das suas finanças com nossas soluções digitais</p>
                            <button className="btn-primary">Saiba mais</button>
                        </div>
                    </div>
                    <div className="my-2 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={Banner1} alt="Banner1 do slide"/>
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                            Segurança e praticidade <span className="text-brandPrimary leading-snug">ao seu alcance</span>
                            </h1>
                            <p className="text-neutralDGrey text-base mb-4">Confiabilidade e tecnologia de ponta para proteger suas transações.</p>
                            <button className="btn-primary">Abra sua conta</button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}