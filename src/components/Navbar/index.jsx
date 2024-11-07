import { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { FaBars, FaXmark } from 'react-icons/fa6';

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isStickey, setIsStickey] = useState(false);

    const navItems = [
        { link: "Início", path: "inicio" },
        { link: "Serviços", path: "servicos" },
        { link: "Investimentos", path: "investimentos" },
        { link: "Pix", path: "pix" },
        { link: "Prêmios e Reconhecimentos", path: "selos" },
        { link: "Blog", path: "blog" }
    ];
    
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    
    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsStickey(true);
            }else{
                setIsStickey(false);
            }
        };
        window.addEventListener('scroll',handleScroll);
        return () =>{
            window.addEventListener('scroll',handleScroll);
        }
    })

    return(
        <header className={`w-full md:bg-transparent fixed top-0 left-0 right-0 ${isStickey ? "md:bg-white bg-white": ""}`}>
            <nav className={`max-w-screen-2xl mx-auto py-4 lg:px-14 px-8 ${isStickey ? "sticky top-0 left-0 right-0 border-b duration-300": ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href='#' className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt='Logo do site' className='w-10 inline-block items-center'/><span className='text-[#263238]'>BankNext</span></a>
                    <ul className='md:flex gap-6 hidden '>
                        {
                            navItems.map(({link,path}) =>
                                <a to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>
                                    {link}
                                </a>
                        )}
                    </ul>
                    <div className='gap-4 hidden lg:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign up</button>
                    </div>
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu} 
                            className='text-neutralDGrey focus:outline-none focus:text-gray-900'> 
                                {
                                    isMenuOpen ? (<FaXmark className='h-6 w-6 text-neutralDGrey'/>):(<FaBars className='h-6 w-6 text-neutralDGrey'/>)
                                }
                        </button>
                    </div>
                </div>
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0":"hidden"}`}>
                    {
                        navItems.map(({link,path}) =>
                            <a href={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-brandPrimary first:font-medium'>
                                {link}
                            </a>
                    )}
                </div>
            </nav>
        </header>
    )
}