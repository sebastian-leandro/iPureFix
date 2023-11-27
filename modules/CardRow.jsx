import Image from "next/image"


const CardRow = ({img,alt,title}) => {


  return (
    <div className="w-80 md:w-full h-[350px] max-w-[1100px] p-[0.1rem] bg-card rounded-2xl">
        <div className="w-full h-full bg-tertiary rounded-2xl">
            <div className="w-full flex items-center h-full justify-center flex-col lg:flex-row">
                <div className="w-full h-full flex relative">
                    <Image
                    src={img}
                    alt={alt}
                    fill
                    className="block rounded-2xl"
                    loading="lazy"
                    />
                </div>
                <div className="w-full flex items-center justify-center">
                    <h3 className="subheading my-8 md:my-0 text-center">{title}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardRow