
import Logo from "@/components/Logo";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import fetchCollections from "@/CollectionData";
import Link from "next/link";
import {enCodeUrl} from "@/app/utils/encode_url";


const Footer = async () => {

    const data = await fetchCollections();
    const collections=data?.collections?.items;


    return (
        <div className="bg-[#F9FBFA] p-10 mt-14">
            <div className="flex gap-2 justify-evenly">
                <div className="flex flex-col w-80 gap-8">
                    <Logo />
                    <p>Unlock Your Business Potential with Customized Solutions</p>
                    <a href="#">Request a quote today ➜</a>
                    <SocialMediaIcons />
                </div>
                <div className="flex flex-col w-80 gap-1">
                    <h2 className="font-bold pb-2">SHOP</h2>
                    {
                        collections.map((item)=> (
                            <div key={item.name}>
                                <Link href={`/collections/${enCodeUrl(item.name)}`}>{item?.name}</Link>

                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col w-80 gap-1">
                <h2 className="font-bold pb-2">SUPPORT</h2>
                    <a href="#">Help</a>
                    <a href="#">Track Order</a>
                    <a href="#">Shopping</a>
                    <a href="#">Returns</a>
                </div>
                <div className="flex flex-col w-80 gap-1">
                    <h2 className="font-bold pb-2">Company</h2>
                    <a href="#">About</a>
                    <a href="#">Blogs</a>
                    <a href="#">Services</a>
                    <a href="#">Contact us</a>
                </div>
            </div>
            <div className="flex justify-center pt-10">© hyperce 2023</div>
        </div>
    )
}
export default Footer
