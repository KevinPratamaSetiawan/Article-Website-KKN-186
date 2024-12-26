import { useNavigate } from 'react-router-dom';

type HeaderProps = {
    chosen: string;
}

export default function Header({ chosen }: HeaderProps) {
    const navigate = useNavigate();

    return (
        <header id="header" className="flex justify-between items-center bg-white p-2 sticky top-0 z-20 border-b-2 border-[#252525] transition-[top] duration-300">
            <img className="w-[30px] h-[30px] mx-[5px]" src="./Logo/logo-square.svg" alt="Logo KKN 186"></img>
            <ul className="flex items-center justify-evenly sm:w-[50%] w-[100%]">
                <li>
                    <a
                        className={`text-[#595959] font-heading1 text-sm sm:text-lg ${chosen === 'home' ? 'text-[#252525] border-y-2 border-[#252525]' : null} after:block after:content-[''] after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out after:origin-[0%_50%] hover:after:scale-x-100 cursor-pointer`}
                        onClick={() => navigate('/home')}
                    >
                        Beranda
                    </a>
                </li>
                <li>
                    <a
                        className={`text-[#595959] font-heading1 text-sm sm:text-lg ${chosen === 'articles' ? 'text-[#252525] border-y-2 border-[#252525]' : null} after:block after:content-[''] after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out after:origin-[0%_50%] hover:after:scale-x-100 cursor-pointer`}
                        onClick={() => navigate('/articles')}
                    >
                        Artikel
                    </a>
                </li>
                <li>
                    <a
                        className={`text-[#595959] font-heading1 text-sm sm:text-lg ${chosen === 'about' ? 'text-[#252525] border-y-2 border-[#252525]' : null} after:block after:content-[''] after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out after:origin-[0%_50%] hover:after:scale-x-100 cursor-pointer`}
                        onClick={() => navigate('/about')}
                    >
                        Tentang Kami
                    </a>
                </li>
            </ul>
        </header>
    )
}