import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SplitCardProps = {
    symbol: IconProp;
    title: string;
    content: string;
}

export default function SplitCard({ symbol, title, content }: SplitCardProps) {
    return (
        <div className="group relative cursor-pointer">
            <div className="w-[95%] h-[300px] sm:w-[600px] sm:h-[300px] xl:w-[400px] xl:h-[200px] relative bg-white flex justify-center items-center z-10 translate-y-[150px] xl:translate-y-[100px] border-2 border-dashed border-black transition-transform duration-500 group-hover:translate-y-0 mx-auto">
                <div className="text-center flex flex-col items-center gap-2">
                    <FontAwesomeIcon icon={symbol} className="text-black w-[75px] h-auto" />
                    <div>
                        <h3 className="mt-2 text-black text-2xl font-medium font-heading1">{title}</h3>
                        <FontAwesomeIcon icon={faCaretDown} size='xl' />
                    </div>
                </div>
            </div>
            <div className="w-[95%] h-[300px] sm:w-[600px] sm:h-[300px] xl:w-[400px] xl:h-[200px] relative bg-black flex justify-center items-center p-5 box-border -translate-y-[150px] xl:-translate-y-[100px] transition-transform duration-500 group-hover:translate-y-0 mx-auto">
                <div className="text-white">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}