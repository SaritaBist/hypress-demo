"use client"
import {Grid} from "@mantine/core";
import { IconCreditCard } from '@tabler/icons-react';
import { IconTruck,IconGift ,IconShield} from '@tabler/icons-react';
const OurServices = () => {

    const ourServices=[
        {
        title:"Secured Payments",
        description:"Secure payment options to ensure that your transactions are protected and your personal information is kept safe.",
        icon:<IconCreditCard stroke={1} className='h-10 w-10' />,
       },

        {
            title:"Free Delivery Worldwide",
            description:"Enjoy free worldwide delivery on all orders, no matter where you are located.",
            icon:<IconTruck stroke={1}  className='h-10 w-10'/>,
        },
        {
            title:"High Quality Materials",
            description:"We use only the finest materials in our products, ensuring that they are long-lasting and of the highest quality.",
            icon:<IconShield stroke={1}  className='h-10 w-10'/>,
        },
        {
            title:"Send Gifts Easily",
            description:"Want to surprise someone special? Our site makes it easy to send a gift to your loved ones with just a few clicks.",
            icon:<IconGift stroke={1} className='h-10 w-10' />,
        }
    ]
    return (
        <div className="max-w-[95vw] mx-auto mt-20">
            <div className="text-4xl ">Our Services</div>

              <Grid className="mt-6" gutter="xl">
                  {
                      ourServices?.map((item,index)=>(
                          <Grid.Col span={{base:12 ,xs:12, lg:6}} key={index}>
                              <div className="flex  gap-6">
                                  <div >{item?.icon}</div>
                                  <div>
                                      <div className="text-xl font-semibold mb-4">{item.title}</div>
                                      <div>{item.description}</div>
                                  </div>
                              </div>
                          </Grid.Col>
                      ))
                  }
              </Grid>

        </div>
    )
}
export default OurServices
