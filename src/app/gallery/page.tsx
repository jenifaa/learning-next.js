import Image from "next/image"

import pet from "@/public/images/pet.webp"

function GalleryPage() {
  return (
    <div>
      <Image src={pet} width={500} height={300} alt="Pet" />
    </div>
  )
}

export default GalleryPage
