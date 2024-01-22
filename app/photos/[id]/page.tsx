import Photo from "@/components/frame"
import photos from "@/app/photos"


export default function PhotoPage({params}: any){
    const photo = photos.find((p)=>p.id === params.id)

    return(
        <div className={"container mx-auto my-10"}>
            <div className={"w-1/2 mx-auto border border-amber-600"}>
                <Photo photo={photo}></Photo>
            </div>
        </div>
    )
}