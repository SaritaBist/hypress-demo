
import {Button} from "@mantine/core";
import Navbar from "@/components/Navbar";
import PromotionSection from "@/components/PromotionSection";
import ShopByCategory from "@/components/ShopByCategory";
import OurServices from "@/components/OurServices";
import InstagarmSection from "@/components/InstagarmSection";



export default function Home() {
  return (
    <div className="w-full">

        <PromotionSection />
        <ShopByCategory />
        <OurServices />
        <InstagarmSection />



    </div>
  );
}

