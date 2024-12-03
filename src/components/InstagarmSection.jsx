const InstagarmSection = () => {
    return (
        <div className="flex flex-col items-center mt-24">
            <h2 className="text-3xl font-bold">Instagram</h2>
            <a className="text-4xl pb-5" href="#">@hyperce_io</a>
            <div className="flex max-w-[90vw] mx-auto px-2 space-x-2">
                <img src="instaphoto1.avif" alt="instagram1" className="w-1/5 object-cover rounded-lg"/>
                <img src="instaphoto2.avif" alt="instagram2" className="w-1/5 object-cover rounded-lg"/>
                <img src="instaphoto3.avif" alt="instagram3" className="w-1/5 object-cover rounded-lg"/>
                <img src="instaphoto4.avif" alt="instagram4" className="w-1/5 object-cover rounded-lg"/>
                <img src="instaphoto5.avif" alt="instagram5" className="w-1/5 object-cover rounded-lg"/>
            </div>

        </div>
    )
}
export default InstagarmSection
