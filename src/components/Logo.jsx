
const Logo = () => {
    return (
        <>
            <div className=" flex  gap-2 items-center ">
                <img src='logo.svg' alt={'logo'} className="w-12 h-12"/>
                <div className=" flex flex-col items-end">
                    <span className="font-bold text-2xl">Hypress</span>
                    <span className="rounded-2xl bg-gray-500 px-1 text-white">demo</span>
                </div>
            </div>
        </>
    )
}
export default Logo
