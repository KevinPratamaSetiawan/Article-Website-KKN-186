import { useNavigate } from 'react-router-dom';

type ArticleProps = {
    articleImage: string;
    title: string;
    category: string;
    description: string;
    author: string;
    date: string;
}

export default function Article({ articleImage, title, category, description, author, date }: ArticleProps) {
    const navigate = useNavigate();
    const articleData = {
        articleImage: articleImage,
        title: title,
        category: category,
        description: description,
        author: author,
        date: date
    }

    return (
        <div className="py-[5px] px-[15px] my-[10px] border-2 border-[#252525] rounded">
            <a onClick={() => navigate(`/articles/${title}`, { state: { articleData: articleData } })} className="font-heading1 font-medium text-2xl after:block after:content-[''] after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out after:origin-[0%_50%] hover:after:scale-x-100">{title}</a>
            <p className="font-description text-xl">{category}</p>
            <p className="font-description text-[#535353] text-justify text-sm h-9 mb-3 overflow-hidden">{description}</p>
            <div className="font-description text-lg flex justify-between items-center">
                <p>{author}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}