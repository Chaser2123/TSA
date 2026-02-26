import Image from "next/image";
import ImageCaurosel from "./components/imageCaurosel";

export default function Home() {
  return (
    <>
      <ImageCaurosel message="Welcome to Saratoga Springs" images = {['MyPhotos/5.jpg', 'MyPhotos/6.jpg', 'MyPhotos/7.jpg']} />
      <div className="relative flex items-center justify-center w-full h-150 border-y-8" style={{ backgroundImage: 'url("MyPhotos/3.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="mainImageText absolute text-3xl h-100 flex items-center justify-center px-20 py-12 font-semibold text-center italic text-black border-black rounded-3xl border-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt quis risus nec fermentum. Nam id mollis est. Ut sed erat tristique, euismod est at, gravida quam. Nunc pellentesque, ipsum non porta fringilla, mi orci mattis odio, eget gravida lacus elit eget ante. Nam sollicitudin ipsum ac efficitur placerat. Proin eu felis sit amet metus efficitur consectetur imperdiet quis urna. Vestibulum id gravida nisi, eget pellentesque augue. Ut diam lorem, imperdiet et ipsum vitae, gravida dictum nibh.
          </h1>
          </div>
      <div className="flex items-center flex-col w-full p-10 border-y-8">
        <h1 className="text-5xl pb-5 text-center">Top Resources</h1>
        <div className="favoriteResources flex lg:space-x-30 items-center justify-center">
          <div className="h-120 w-80 border rounded-4xl" style={{ boxShadow: '8px 10px 8px 5px #bcbcbc' }}></div>
          <div className="h-120 w-80 border rounded-4xl" style={{ boxShadow: '8px 10px 8px 5px #bcbcbc'}} ></div>
          <div className="h-120 w-80 border rounded-4xl" style={{ boxShadow: '8px 10px 8px 5px #bcbcbc'}} ></div>
        </div>
      </div>
      <ImageCaurosel images = {['MyPhotos/1.jpg', 'MyPhotos/9.jpg', 'MyPhotos/4.jpg']} />
    </>
  );
}
