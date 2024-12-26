import React from 'react';

import Footer from "./Footer";
import Article from './Article';
import Header from "./Header";

import { articlesData } from '../utils/data';

export default function ArticlesPage() {
    document.title = "Artikel | KKN'186";
    const [categoryFilter, setCategoryFilter] = React.useState("All");
    

    const onCategoryFilterChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryFilter(event.target.value);
    };

    return (
        <>
            <Header chosen="articles" />
            <section className="px-[20px] py-[10px] rounded border-2 border-[#252525] flex flex-col justify-center items-start my-5 mx-10">
                <div className="font-heading1 text-2xl border-b-2 border-[#252525]">
                    <p>Kategori</p>
                </div>
                <div className="w-full flex flex-wrap justify-start items-center my-[15px] gap-3">
                    <div className="flex items-center gap-x-3">
                        <input 
                        value={"All"}
                        checked={categoryFilter === 'All'}
                        onChange={onCategoryFilterChangeEventHandler}
                        type="radio" 
                        className="relative w-4 h-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400" 
                        />
                        <label className="block text-sm font-medium text-gray-900">Semua</label>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <input 
                        value={"Tips & Panduan"}
                        checked={categoryFilter === 'Tips & Panduan'}
                        onChange={onCategoryFilterChangeEventHandler}
                        type="radio" 
                        className="relative w-4 h-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400" 
                        />
                        <label className="block text-sm font-medium text-gray-900">Tips & Panduan</label>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <input 
                        value={'Berita'}
                        checked={categoryFilter === 'Berita'}
                        onChange={onCategoryFilterChangeEventHandler}
                        type="radio" 
                        className="relative w-4 h-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400" 
                        />
                        <label className="block text-sm font-medium text-gray-900">Berita</label>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <input 
                        value={'Daur Ulang'}
                        checked={categoryFilter === 'Daur Ulang'}
                        onChange={onCategoryFilterChangeEventHandler}
                        type="radio" 
                        className="relative w-4 h-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400" 
                        />
                        <label className="block text-sm font-medium text-gray-900">Daur Ulang</label>
                    </div>
                </div>
            </section>
            <section className='my-5 mx-10'>
                {articlesData
                .filter((data) => categoryFilter === "All" || data.category === categoryFilter)
                .map((data, index) => (
                    <Article
                        key={index}
                        articleImage={data.articleImage}
                        articleUrl={data.articleUrl}
                        category={data.category}
                        date={data.date}
                        title={data.title}
                        description={data.description}
                        author={data.author}
                    />
                ))}
            </section>
            <Footer />
        </>
    )
}