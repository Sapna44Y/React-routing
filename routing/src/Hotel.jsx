import { useParams } from "react-router-dom";

function Hotel() {
  let xyz = useParams();
  // console.log(xyz);
  // console.log(xyz.hn);

  const data = ["Hotel", " Leela", "Taj", "Radison"];

  return (
    <>
      <h1>Hello I Am Hotel - {data[xyz.hn]}</h1>
    </>
  );
}

export default Hotel;
