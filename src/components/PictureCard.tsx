type PictureCardProp = {
    imgUrl: string;
    name: string;
    position: string;
}

export default function PictureCard({ imgUrl, name, position }: PictureCardProp) {
    return (
        <div className="flex-grow flex-shrink basis-[calc(20%-1rem)] w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="w-full h-[300px] rounded-t-lg object-cover object-center" src={imgUrl} alt="" />
            <div className="p-5 text-nowrap">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{position}</p>
            </div>
        </div>
    )
}