import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="bg-white text-black w-full border-t border-black">
            <section className="mt-0 mx-[10px] md:mx-[30px]">
                <div className="flex flex-col lg:flex-row justify-between sm:justify-center items-center gap-8 my-[40px]">
                    <img
                        className="h-[50px] sm:h-[80px] mt-[20px] filter invert-[100%] sepia-[29%] saturate-[1%] hue-rotate-[322deg] brightness-[93%] contrast-[83%]"
                        src="./Logo/logo-horizontal.png"
                        loading="lazy"
                        alt="Footer Logo"
                    />

                    <div className="w-full flex sm:flex-row items-center justify-evenly md:items-start gap-8">
                        <div className="flex flex-col justify-evenly items-start sm:mx-auto">
                            <h2 className="font-serif font-light py-[3px] mb-[10px] border-b-2 border-black text-2xl">
                                Konten
                            </h2>
                            <a
                                onClick={() => navigate('/home')}
                                className="inline-block my-[5px] text-black font-[Fjord One] after:block after:content-[''] after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out after:origin-[0%_50%] hover:after:scale-x-100 cursor-pointer"
                            >
                                Beranda
                            </a>
                            <a
                                onClick={() => navigate('/articles')}
                                className="inline-block my-[5px] text-black font-[Fjord One] after:block after:content-[''] after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out after:origin-[0%_50%] hover:after:scale-x-100 cursor-pointer"
                            >
                                Artikel
                            </a>
                            <a
                                onClick={() => navigate('/about')}
                                className="inline-block my-[5px] text-black font-[Fjord One] after:block after:content-[''] after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out after:origin-[0%_50%] hover:after:scale-x-100 cursor-pointer"
                            >
                                Tentang Kami
                            </a>
                        </div>

                        <div className="flex flex-col justify-evenly items-start sm:mx-auto">
                            <h2 className="font-serif font-light py-[3px] mb-[10px] border-b-2 border-black text-2xl">
                                Sosial Media
                            </h2>
                            <a
                                href="https://www.instagram.com/kkn.negerijemanten/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block my-[5px] text-black font-[Fjord One] after:block after:content-[''] after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out after:origin-[0%_50%] hover:after:scale-x-100 cursor-pointer"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://www.tiktok.com/@kkn.negerijemanten"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block my-[5px] text-black font-[Fjord One] after:block after:content-[''] after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out after:origin-[0%_50%] hover:after:scale-x-100 cursor-pointer"
                            >
                                Tiktok
                            </a>
                            <a
                                href="https://kknnegerijemanten.carrd.co/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block my-[5px] text-black font-[Fjord One] after:block after:content-[''] after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out after:origin-[0%_50%] hover:after:scale-x-100 cursor-pointer"
                            >
                                Carrd
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-0 mx-[10px] md:mx-[30px] py-[10px] text-center text-black border-t-2 border-black">
                <p>© 2024 All rights reserved</p>
            </section>
        </footer>
    )
}