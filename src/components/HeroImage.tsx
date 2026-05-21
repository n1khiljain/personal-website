import logo from "/Users/nikhiljain/Desktop/Coding Projects/Portfolio/public/Nikhil Jain Profile Image.png";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image
          src={logo}
          alt="logo"
          loading="eager"
          priority
          height={1000}
          width={1000}
          className="rounded-3xl border-2 border-neutral-800 shadow-lg"
        />
        </>
    )
}
export default HeroImage