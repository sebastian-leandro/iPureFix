import Link from "next/link";

const CTA = () => {
  return (
    <section className="w-full h-auto overflow-hidden">
      <div className="w-full h-full px-8">
        <div className="w-full h-auto md:h-[360px]  rounded-md bg-tertiary md:px-6 py-2">
          <div className="w-full h-full md:flex-row flex-col flex items-center justify-between md:py-0 py-12 px-12">
            <div className="w-full flex flex-col items-start justify-center gap-y-8 text-center">
              <h3 className="subheading">No postergues más</h3>
              <p className="paragraph">Solicita tu reparación hoy</p>
            </div>
            <div className="flex items-center justify-end mt-8">
              <Link href={"https://api.whatsapp.com/send?phone=5491160131139"} className="btn-primary whitespace-nowrap">
                Programa Ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
