export default function BackCard({cvv}){
    return (
        <div className="w-[500px] h-[300px] bg-black rounded-xl">
            <div className="w-full h-[30%] flex items-end">
                <div className="w-full h-[60px] bg-[#2F2F2F]"></div>
            </div>
            <div className="w-full h-[70%] flex justify-center pt-[30px]">
                <div className="w-[70%] h-[50px] flex items-center justify-end bg-[#AEB6BF]">
                    <p className=" text-black text-[20px] mr-2 ">{cvv || "000"}</p>
                </div>
            </div>
        </div>
    )
}