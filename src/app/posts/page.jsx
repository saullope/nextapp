import ImageProfile from "../components/ImgaePorfile.jsx"
import Table from "../components/Table.jsx"
import reacti from "public/imagenes/react.jpg"

export default function Posts(){
    return (
    <>
      <div className="contenedor-p">
        <ImageProfile 
         src={reacti}
         width={150}
          height={150}
        />
        <div>
          <Table />
        </div>
      </div> 
      
    </>
    )
}