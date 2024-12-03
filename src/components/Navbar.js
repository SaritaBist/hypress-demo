import {Button, Divider, TextInput} from "@mantine/core";
import { IconSearch,IconWallet} from '@tabler/icons-react';

const NavbarPage=()=>{
    return(
        <>
            <div className="flex gap-2 justify-around items-center mt-2 p-2 border-2 border-t-0">
                <div className="flex gap-8 items-center">
                    <div className=" flex  gap-2 items-center ">
                        <img src='logo.svg' alt={'logo'} className="w-12 h-12"/>
                        <div className=" flex flex-col items-end">
                            <span className="font-bold text-2xl">Hypress</span>
                            <span className="rounded-2xl bg-gray-500 px-1 text-white">demo</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center '>
                        <IconWallet stroke={1} className='h-8 w-8' />
                        collection
                    </div>
                    <div className="border border-gray-500 h-8"></div>
                </div>
                <div className="flex items-center  ">
                <TextInput
                        size="md"
                        radius="xl"
                        placeholder="What's on your mind today?"
                        className="w-[40vw]  rounded-full [&_input]:border-r-0  [&_input]:rounded-r-none   focus:outline-none"
                    />
                    <div className="border-l border-gray-300 h-10"></div>
                    <button className="h-[7vh]  flex  items-center gap-2 w-[20%] text-gray-500 rounded-3xl border border-gray-300  rounded-l-none border-l-0 p-3 ">
                        <IconSearch stroke={2} />
                        <span>Search</span>
                    </button>
                </div>

                <div className="flex gap-4">
                    <div>
                        icon
                    </div>
                    <div>
                        sign in
                    </div>
                    <div>
                        sign out
                    </div>

                </div>
            </div>
            {/*<Divider className='font-semibold'/>*/}
        </>
    )
}

export default NavbarPage