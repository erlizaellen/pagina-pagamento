import { FaCcVisa } from "react-icons/fa";
import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";

export default function CardFront({nome,numero}){
    return (
        <div className="w-[480px] h-[280px] bg-black rounded-xl">
          <div className="w-full h-[30%] flex">
            <div className="w-[50%] h-full flex items-center pl-4 gap-2 mt-2">
                <div className="w-[70px] h-[70px] rounded-full bg-amber-50"></div>
                <div className="w-[50px] h-[50px] rounded-full bg-amber-50 mt-6 "></div>
            </div>
            <div className="w-[50%] h-full flex p-4 justify-end">
                <p className="text-[20px] text-white font-bold"> Banco do Coxinha </p>
            </div>
          </div>
          <div className="w-full h-[40%] flex flex-col ">
            <div className="w-full h-[60%] flex items-center pl-4 mt-4">
               <FcSimCardChip size={60}/> 
               <LuNfc color="white" size={40}/>
           </div>
           <div className="w-full h-[40%] pl-4">
             <p className="font-bold text-[20px] text-gray-500">{numero || "0000 0000 0000 0000"}  </p>
           </div>
          </div>
          <div className="w-full h-[30%] pl-4">
            <p className=" text-white text-[25px]">{nome|| "Nome no cartão"}</p>
            <div className="">
            <FaCcVisa  color="white"/>
            </div>
         </div>
        </div>
    )
}