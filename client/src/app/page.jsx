import Image from "next/image";
import ImageCaurosel from "./components/imageCaurosel";

export default function Home() {
  return (
    <>
      <ImageCaurosel message="Welcome to Saratoga Springs" images = {['image-caurosel-photos/1.jpg', 'image-caurosel-photos/2.jpg', 'image-caurosel-photos/3.jpg']} />
      <div className="flex flex-col items-center justify-center w-full h-75 bg-gray-400" style={{ backgroundColor: '#52c6f1' }}>
        <h1 className="text-2xl w-300 px-4 py-2 text-center italic text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt quis risus nec fermentum. Nam id mollis est. Ut sed erat tristique, euismod est at, gravida quam. Nunc pellentesque, ipsum non porta fringilla, mi orci mattis odio, eget gravida lacus elit eget ante. Nam sollicitudin ipsum ac efficitur placerat. Proin eu felis sit amet metus efficitur consectetur imperdiet quis urna. Vestibulum id gravida nisi, eget pellentesque augue. Ut diam lorem, imperdiet et ipsum vitae, gravida dictum nibh.</h1>
      </div>
      <div className="w-full h-200 overflow-hidden">
        <img className="w-full" src="homepage.jpg" alt="" />
      </div>
      <div className="flex items-center flex-col w-full p-10">
        <h1 className="text-5xl pb-5">Top Resources</h1>
        <div className="flex space-x-30">
          <div className="h-120 w-80 border rounded-4xl" style={{ boxShadow: '8px 10px 8px 5px #bcbcbc' }}></div>
          <div className="h-120 w-80 border rounded-4xl" style={{ boxShadow: '8px 10px 8px 5px #bcbcbc'}} ></div>
          <div className="h-120 w-80 border rounded-4xl" style={{ boxShadow: '8px 10px 8px 5px #bcbcbc'}} ></div>
        </div>
      </div>
    </>
  );
}
