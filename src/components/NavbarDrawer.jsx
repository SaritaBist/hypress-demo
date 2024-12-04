import {Drawer} from "@mantine/core";
import Link from "next/link";
import {enCodeUrl} from "@/app/utils/encode_url";


const NavbarDrawer= ({opened,close,collections})=>{

    return(<>
        <Drawer
            opened={opened}
            onClose={close}
            position={'right'}
            overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        >
            <div>
                <h1 className={"text-2xl font-bold mb-10"}>Collections</h1>
                {
                    collections.map((item)=> (
                        <div key={item.name}>
                            <Link href={`/collections/${enCodeUrl(item.name)}`}>{item?.name}</Link>
                        </div>
                    ))
                }
            </div>
        </Drawer>

    </>)
}

export  default NavbarDrawer