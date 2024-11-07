import { MdDescription } from 'react-icons/md';
import Company1 from '../../assets/company1.png';
import Company2 from '../../assets/company2.png';
import Company3 from '../../assets/company3.png';
import Company4 from '../../assets/company4.png';
import Company5 from '../../assets/company5.png';
import Company6 from '../../assets/company6.png';
import Company7 from '../../assets/company7.png';

export default function Services(){
    const services = [
        {id: 1, title: "Conta Corrente", description: "Abra sua conta corrente com facilidade, com acesso a cartões, transferências e pagamentos de contas, tudo em um único lugar.", image:"/src/assets/membership.png"},
    
        {id: 2, title: "Empréstimos e Financiamentos", description: "Oferecemos opções de empréstimos pessoais e financiamentos para veículos e imóveis, com taxas competitivas e prazos flexíveis.", image:"/src/assets/national.png"},
    
        {id: 3, title: "Investimentos", description: "Diversifique seu portfólio com nossas opções de investimento, incluindo fundos de investimento, CDBs e previdência privada, com assessoria especializada.", image:"/src/assets/clubs.png"}
    ];
    
    return(
        <div id="servicos" className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-4 md:py-16">
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto flex flex-col gap-4 md:gap-16">
                <div className="text-center">
                    <h1 className="text-4xl text-neutralDGrey font-semibold mb-2">Serviços</h1>
                    <p className="text-neutralDGrey mb-8">Alguns dos nossos clientes</p>
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <img src={Company1} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                        <img src={Company2} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                        <img src={Company3} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                        <img src={Company4} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                        <img src={Company5} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                        <img src={Company6} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                        <img src={Company7} alt='Logo dos serviços oferecidos' className='cursor-pointer'/>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl text-neutralDGrey font-semibold mb-2">Gerencie suas finanças em um único sistema</h1>
                    <p className="text-neutralDGrey mb-8">Serviços oferecidos pelo BankNext para atender suas necessidades financeiras.</p>
                    <div className='flex flex-col md:flex-row justify-around gap-8'> 
                        {services.map(({ id, title, description, image }) => (
                            <div key={id} className='p-4 text-center md:w-[350px] md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                                <div>
                                    <div className='flex items-center justify-center'>
                                        <img className='-ml-5' src={image} alt={title}/>
                                    </div>
                                    <div>
                                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{title}</h4>
                                        <p className='text-sm text-netraulDGrey'>{description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}