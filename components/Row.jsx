import { CardRow } from "@/modules"
import { rows } from "@/constants"


const Row = () => {
  return (
    <section className='w-full h-auto section' id="services">
        <div className='flex flex-col w-full h-full gap-y-20'>
            <h2 className='title'>Nuestros Servicios</h2>
            <div className="flex w-full h-full flex-col gap-y-8 mt-8 items-center justify-center">
                {rows.map(({img,alt,title}, i) => (
                    <CardRow img={img} alt={alt} title={title} key={i} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Row