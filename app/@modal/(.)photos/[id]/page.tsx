import Photo from "../../../../components/frame"
import Modal from "../../../../components/modal"
import photos from "@/app/photos"


export default function PhotoModal({params:{id:photoId}}:any) {
    const photo = photoId && photos.find((p)=>p.id===photoId)
    //todo 判断
    return(
        <Modal>
            <Photo photo={photo} />
        </Modal>
    )
}