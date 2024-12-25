import { useNavigate } from 'react-router-dom';

type ArticleCardProps = {
    articleImage: string;
    category: string;
    releaseDate: string;
    title: string;
    description: string;
    authorName: string;
}

export default function ArticleCard({ articleImage, category, releaseDate, title, description, authorName }: ArticleCardProps) {
    const navigate = useNavigate();
    const articleData = {
        articleImage: articleImage,
        category: category,
        releaseDate: releaseDate,
        title: title,
        description: description,
        authorName: authorName
    }
    
    return (
        <div className="w-[95%] md:w-[750px] xl:w-[400px] bg-white p-[10px] border-2 border-[#252525]">
            <img src={articleImage} className="w-full h-[300px] object-cover object-center"></img>
            <div className="my-3 flex justify-between items-center font-description text-lg">
                <p>{category}</p>
                <p>{releaseDate}</p>
            </div>
            <a onClick={() => navigate(`/articles/${title}`, { state: { articleData: articleData } })} className="h-9 overflow-hidden font-heading1 text-2xl mb-1 w-full inline-block bg-none text-inherit border-none cursor-pointer outline-none after:block after:content-[''] after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out after:origin-[0%_50%] hover:after:scale-x-100">{title}</a>
            <p className="font-description text-xl text-justify h-[50px] overflow-hidden">{description}</p>
            <div className="my-3 font-description text-lg flex justify-end items-center">
                <p>{authorName}</p>
            </div>
        </div>
    )
}