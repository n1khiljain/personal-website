import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image
          src="/Nikhil Jain Profile Image.png"
          alt="Nikhil Jain"
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