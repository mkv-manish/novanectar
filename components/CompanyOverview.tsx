import Image from "next/image"

const CompanyOverview = ({ className, title, image, description }: { className: string, title: string, image: string, description: string[] }) => {
    return (
        <div className="min-h-[30rem] px-4 md:px-10 py-5 md:py-10">
            <h2 className="font-sans text-[20px] md:text-3xl text-center font-bold text-yellow-600 dark:text-yellow-400 mb-2 mt-2 block md:hidden">
                {title}
            </h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
                <div className="flex flex-col justify-center h-full w-full">
                    <h2 className="font-sans text-[20px] text-center md:text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2 mt-2 hidden md:block">
                        {title}
                    </h2>
                    <p className="flex flex-col gap-4 font-sans font-normal text-neutral-500 text-base dark:text-neutral-300 text-justify">
                        {description.map((des, i) => (
                            <span key={i} className="text-neutral-400">
                                {des}
                            </span>
                        ))}

                    </p>
                </div>

                <div className={`flex justify-center h-full w-full ${className}`}>
                    <Image src={image} height={400} width={550} alt="company overview" />
                </div>
            </div>
        </div>
    )
}
export default CompanyOverview