export default function Blog(){
    const blogs = [
        {id: 1, title:"Como o Pix Está Transformando a Forma de Investir no Brasil", image:"/src/assets/blog1.png"},
        {id: 2, title:"5 Dicas para Planejar Seu Futuro Financeiro com Segurança", image:"/src/assets/blog2.png"},
        {id: 3, title:"A Era dos Investimentos Sustentáveis: Como Escolher as Melhores Oportunidades", image:"/src/assets/blog3.png"}
    ]
    return(
        <div className="px-8 lg:px-14 max-w-screen-2xl mx-auto py-8 md:py-16">
            <div className="text-center md:w-1/2 mx-auto">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Explore nosso Blog</h2>
                <p className='text-sm text-neutralDGrey mb-8'>No blog do BankNext, compartilhamos conteúdos exclusivos sobre finanças, investimentos e soluções bancárias que podem transformar sua jornada financeira. Fique por dentro das últimas tendências do mercado, dicas de planejamento e tudo o que você precisa saber para tomar decisões mais inteligentes e seguras. Acompanhe nossos artigos e inspire-se para alcançar seus objetivos financeiros com mais confiança.</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 items-center justify-between">
                {
                    blogs.map(blog => 
                    <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer w-full">
                        <img src={blog.image} alt={blog.title} className="hover:scale-95 transition-all duration-300 w-full"/>
                        <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                            <h3 className="mb-3 text-neutralDgrey font-semibold">{blog.title}</h3>
                            <div className="flex items-center justify-center gap-8"><a href='/' className="font-bold text-brandPrimary hover:text-neutral-700">Leia mais</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                                    <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="#4CAF4F" className="inline-block ml-2" />
                                </svg></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}