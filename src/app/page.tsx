import Image from "next/image";
import { FormComponent } from "./components/form";
export default function Home() {
  return (
    <div>
      <div className="flex justify-between px-20 items-center h-screen">
        <div className="ml-28">
          <Image src="/illustration.png" alt="" width={550} height={1000} />
        </div>

        <div className="bg-white rounded-xl w-1/2 h-[870px]">
          <FormComponent />
        </div>
      </div>
    </div>
  );
}
