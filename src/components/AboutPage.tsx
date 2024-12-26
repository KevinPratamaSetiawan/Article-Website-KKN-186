import Header from "./Header";
import Footer from "./Footer";
import PictureCard from "./PictureCard";

import { teamData } from "../utils/data";

export default function AboutPage() {
    document.title = "Tentang Kami | KKN'186";

    return (
        <>
            <Header chosen="about" />

            <section className="w-full py-32 gap-2 bg-[#007548] flex flex-col justify-center items-center text-2xl text-white text-center font-heading1">
                <p className="w-[60%]">“I alone cannot change the world, but I can cast a stone across the water to create many ripples."</p>
                <p className="text-end w-[60%]">-Mother Teresa</p>
            </section>
            <section className="w-full flex flex-col justify-center items-center text-center gap-3 px-10 md:px-20 py-10 md:py-32 font-heading1">
                <p className="text-3xl">Website Informasi Sampah</p>
                <p className="text-lg">Sampah merupakan salah satu masalah besar di Indonesia; pada tahun 2023 lalu sendiri sebanyak 7,2 juta ton sampah di Indonesia belum dapat dikelola dengan baik. Tentu saja masalah sampah ini tidak dapat sepenuhnya diserahkan ke pemerintah, dibutuhkan dukungan penuh dari masyarakat agar masalah sampah ini dapat diselesaikan secara efektif. Website ini diharapkan dapat menjadi media edukasi bagi masyarakat dalam menyikapi sampah dengan benar. Website ini berisikan artikel-artikel seputar pemilahan, pengolahan, pemanfaatan, dan resiko sampah terhadap masyarakat; dengan harapan kita dapat menyelesaikan masalah yang besar ini dimulai dari diri kita sendiri.</p>
            </section>
            <section className="w-full lg:h-[100vh] px-10 flex justify-center items-center">
                <img className="w-full h-full border-2 border-[#252525] object-cover object-center" src="./About Us/team-1.jpg" alt="" />
            </section>
            <section className="w-full flex flex-col justify-center items-center border-y-2 border-[#252525] text-xl md:text-5xl font-heading1 mt-6 py-3 gap-3 uppercase">
                <p>Kelompok KKN 186</p>
                <p>Desa Negeri Jemanten</p>
            </section>
            <p className="w-full text-center font-heading2 text-3xl font-semibold my-4">Meet Our Team</p>
            <section className="flex flex-wrap items-center gap-5 px-12 m-5">
                {teamData.map((data, index) => (
                        <PictureCard
                            key={index}
                            imgUrl={data.imgUrl}
                            name={data.name}
                            position={data.position}
                        />
                    ))}
            </section>
            <Footer />
        </>
    )
}