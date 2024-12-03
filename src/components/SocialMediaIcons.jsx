import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrandYoutube
} from "@tabler/icons-react";
import SocialMediaIcon from "@/components/SocialMediaIcon";

const SocialMediaIcons = () => {

    let socialMediaIcons = [
        <IconBrandFacebook />,
        <IconBrandInstagram />,
        <IconBrandTwitter />,
        <IconBrandYoutube />,
        <IconBrandLinkedin />
    ]

    return (
        <>
            <div style={{display: "flex", gap: "10px"}}>
                {socialMediaIcons.map((icon, index) => (
                    <SocialMediaIcon key={index} icon={icon}/>
                ))}
            </div>
        </>
    )
}
export default SocialMediaIcons
