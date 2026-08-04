import Image from "next/image"
import pet from "../../../public/images/pet.webp"

function GalleryPage() {
  return (
    <div>
      <Image src="https://i.ibb.co.com/Nn1VPXy5/apple.avif" width={500} height={300} alt="Pet" />
    </div>
  )
}

export default GalleryPage
