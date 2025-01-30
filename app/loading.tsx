import Image from "next/image";
import loader from "@/assets/loader.gif";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Image className="w-100 h-100" src={loader} alt="Loading..." />
    </div>
  );
}
