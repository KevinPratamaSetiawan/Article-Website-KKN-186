
type ImgTextPairProps = {
    data: {
        imgUrl: string;
        title: string
        content: string;
        position: string;
    }
}

export default function ImgTextPair({ data }: ImgTextPairProps) {
    return (
        <div className={`w-full flex ${data.position === 'imgText' ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"} justify-between items-center md:items-center p-4 md:p-7 gap-5 mb-4`}>
            <img className="w-full md:w-[40%] h-[400px] object-cover object-center border-2 border-[#252525]" src={data.imgUrl} alt=""></img>
            <div className="md:w-[55%] w-full gap-5 flex flex-col">
                <p className="font-heading1 font-semibold text-4xl italic">{data.title}</p>
                <p className="font-description text-xl">{data.content}</p>
            </div>
        </div>
    )
}