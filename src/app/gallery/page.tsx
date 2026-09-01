import Image from "next/image"


function GalleryPage() {
  return (
    <div>
      <Image src="/pet.webp" width={500} height={300} alt="Pet" />
    </div>
  )
}

export default GalleryPage
