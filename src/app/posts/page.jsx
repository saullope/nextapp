import ImageProfile from "../components/ImgaePorfile.jsx"
import reacti from "public/imagenes/react.jpg"

export default function Posts(){
    return (
    <>
        <h1>Posts</h1>
        <ImageProfile
          src={reacti}
          width={200}
          height={200}
        />
    </>
    )
}