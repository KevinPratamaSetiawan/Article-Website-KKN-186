import Header from "./Header"
import Footer from "./Footer"

import ImgTextPair from "./ImgTextPair";
import SplitCard from "./SplitCard";
import ArticleCard from "./ArticleCard";
import { landingMaterialData, reduceReuseRecycleData, articlesData } from "../utils/data";

import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons/faArrowsSpin";
import { faMinimize } from "@fortawesome/free-solid-svg-icons/faMinimize";

export default function App() {
  document.title = "Beranda | KKN'186";

  return (
    <>
      <section className="w-full h-[100vh] flex flex-col justify-start items-center py-5 px-14">
        <div className="w-full h-[10%] sm:h-[20%] lg:h-[40%] flex justify-between items-center">
          <div className="flex flex-col justify-start items-start text-left">
            <p className="font-heading1 font-black text-[3rem] sm:text-[4.3rem] md:text-[7.5rem] lg:text-[10rem] my-[-20px] md:my-[-50px] lg:my-[-60px]">Pollution</p>
            <p className="font-heading2 font-semibold text-[1rem] sm:text-[1.5rem] md:text-[2.2rem] lg:text-[3rem]">/pəˈluː.ʃən/, noun.</p>
          </div>
          <div className="flex flex-col justify-start items-end text-right font-heading2 font-semibold text-[0.7rem] sm:text-[1rem] md:text-[1.6rem] lg:text-[2rem] gap-1">
            <p>Contamination</p>
            <p>Waste</p>
            <p>Trash</p>
          </div>
        </div>
        <div className="w-full h-[80%] sm:h[70%] lg:h-[50%] flext items-center justify-center">
          <img className="w-full h-full object-cover object-center border-2 border-[#252525]" src="./Landing Page/hero-1-high-res.jpg" alt=""></img>
        </div>
        <div className="w-full h-[10%] flex justify-between items-center font-heading2 font-semibold text-xl">
          <p>by: KKN'186</p>
          <img src="./Logo/logo-square.svg" alt="Logo KKN 186" className="h-[40px]"></img>
        </div>
      </section>

      <section>
        <Header chosen="home" />

        {landingMaterialData.map((data, index) => (
          <ImgTextPair
            key={index}
            data={data}
          />
        ))}

        {/* 3R Section */}
        <div className="w-[100vw] flex flex-col items-center justify-center border-y-4 border-dashed border-[#252525] py-14 gap-3 mt-2">
          <p className="font-heading1 font-medium text-4xl sm:text-6xl">3R</p>
          <p className="font-heading1 font-medium text-4xl sm:text-6xl">Reduce Reuse Recycle</p>
        </div>
        <div className="w-[100vw] h-full flex flex-col justify-center items-center my-[20px]">
          <div className="w-[100%] relative flex flex-col xl:flex-row justify-around items-center">
            {reduceReuseRecycleData.map((data, index) => (
              <SplitCard
                key={index}
                symbol={data.symbol === 'faMinimize' ? faMinimize : data.symbol === 'faArrowsSpin' ? faArrowsSpin : faRecycle}
                title={data.title}
                content={data.content}
              />
            ))}
          </div>
        </div>

        {/* Highlight Articles Section */}
        <div className="w-full bg-[#007548] flex flex-col justify-start items-center p-[40px] pb-[250px] font-heading2 text-4xl text-white mb-[-200px] gap-2">
          <p className="font-heading1 font-semibold text-3xl md:text-5xl italic">For The Greener Earth !</p>
          <p className="text-xl md:text-3xl">Lihat bagaimana anda dapat mulai menghijaukan bumi ini.</p>
        </div>
        <div className="flex flex-col xl:flex-row justify-around items-center mb-9 gap-5 mx-auto">
          {articlesData.map((data, index) => (
            index === 3 || index === 5 || index == 0 ?
              <ArticleCard
                key={index}
                articleImage={data.articleImage}
                category={data.category}
                releaseDate={data.date}
                title={data.title}
                description={data.description}
                authorName={data.author}
              /> : null
          ))}
        </div>
        <Footer />
      </section>
    </>
  )
}