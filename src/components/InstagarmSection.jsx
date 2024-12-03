const InstagarmSection = () => {
    const images=['instaphoto1','instaphoto2','instaphoto3','instaphoto4','instaphoto5']
    return (
        <div className="flex flex-col items-center mt-24">
            <h2 className="text-3xl font-bold">Instagram</h2>
            <a className="text-4xl pb-5" href="#">@hyperce_io</a>
            <div className="flex max-w-[90vw] mx-auto px-2 space-x-2 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {
                    images.map((img,index)=> (
                        <img  key={img} src={`${img}.avif`} alt={img} className="w-[45vw] h-[50vh] object-cover rounded-lg"/>
                    ))
                }
            </div>

        </div>
    )
}
export default InstagarmSection
