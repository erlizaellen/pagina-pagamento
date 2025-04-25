import CardFront from "./components/FrontCard";


export default function App(){
  return(
    <div className="w-full h-screen flex">
     <div className="w-[40%] relative h-full bg-[#271540]">
        <div className="absolute  top-10 left-60  "> 
         <CardFront/>
        </div>
       
     </div>
     <div className="w-[60%] h-full flex justify-end p-[60px] ">
      <h1 className="text-[40px] w-[60%] h-[150px] bg-amber-300  font-bold ">Preencha os campos para concluir o pagamento! </h1>
     </div>
    </div>
  )
}