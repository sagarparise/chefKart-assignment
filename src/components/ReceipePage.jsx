import React, { useContext } from "react";
import { store } from "../store/store";
import frigde from './../assets/refrigerator.png'
import oven from './../assets/microwave.png'
import { useNavigate } from "react-router-dom";

function ReceipePage() {
 const{data} = useContext(store);
const popularDishes = data?.popularDishes;
const Dishes = data?.dishes;

  return (
    <div className=" w-full h-screen">
      <div className=" h-[10%] w-full bg-black relative">
        <div className="timebar w-3/4 md:w-2/4 h-16 p-4 bg-white rounded-lg shadow-md absolute bottom-[-30px] left-[50%] translate-x-[-50%] flex justify-between items-center">
          <div className=" flex items-center gap-2">
            <i className="bx bx-calendar" style={{ color: "#fdc531" }}></i>
            <h2 className=" text-[15px] font-bold timeFont">28 May 2023</h2>
          </div>

          <div className=" flex items-center gap-2">
            <i className="bx bx-alarm" style={{ color: "#fdc531" }}></i>
            <h2 className=" text-[15px] font-bold timeFont">10:28 Pm-12:30 Pm</h2>
          </div>
        </div>
      </div>
      <div className=" h-[90%] bg-white pt-10 flex flex-col">
       
        <div className=" px-6 py-3  flex flex-nowrap gap-2 md:justify-center overflow-x-scroll">
          <button className=" px-7 py-2 rounded-full font-semibold border-2 bg-[#fff9f2] text-orange-400 border-orange-400">Indian</button>
          <button className=" px-7 py-2 rounded-full font-semibold border-2">Indian</button>
          <button className=" px-7 py-2 rounded-full font-semibold border-2">Indian</button>
          <button className=" px-7 py-2 rounded-full font-semibold border-2">Indian</button>
          <button className=" px-7 py-2 rounded-full font-semibold border-2">Indian</button>
          <button className=" px-7 py-2 rounded-full font-semibold border-2">Indian</button>
          <button className=" px-7 py-2 rounded-full font-semibold border-2">Indian</button>

        </div>
        <div className="sm:px-6 py-2 border-b-2 shadow-md">
          <h1 className=" text-[20px] text-black font-bold px-3">Popular Dishes</h1>
          <div className=" mt-2 p-2 flex gap-1 sm:gap-3  justify-center">          
                {
                  popularDishes && popularDishes.map((dish)=>(
                    <div key={dish.id} className=" h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] border-2  border-orange-400 rounded-full overflow-hidden relative">
                    <img src="https://media.istockphoto.com/id/1453092144/photo/spicy-bamboo-shoot-salad-in-black-bowl-asian-food.jpg?s=612x612&w=0&k=20&c=6wWUPi2LOZf5m5FVT3lSltiD8aBAjgIQ3Z2Bd68sFdE=" alt="" className=" w-full h-full" />
                    <div className=" w-full h-full bg-[#00000048] absolute top-0 flex justify-center items-center text-[10px] text-white font-semibold text-center sm:text-[13px]">{dish.name}</div>
                  </div>
                  ))
                }          
          </div>
        </div>
        <div className="mt-4 mb-2 px-6 flex justify-between">
          <h1 className=" font-bold text-xl head-1">Recommended <i className='bx bxs-down-arrow'></i></h1>
          <button className="btn btn-neutral btn-sm">Menu</button>
        </div>

        <div className=" w-full md:w-3/4 flex-1 self-center overflow-y-scroll">
                {
                  Dishes && Dishes.map((dish)=>(
                    <ReceipeCard key={dish.id} dish={dish}/>
                  ))
                }
        </div>
       
        
      </div>
    </div>
  );
}

export default ReceipePage;


const ReceipeCard = ({dish})=>{
 
  const navigate = useNavigate()

  return(
   <div className=" h-[180px] m-3 flex justify-between border-b pb-4 shadow-sm rounded-lg border" onClick={()=> navigate(`/details/${dish.id}`)}>
    <div className=" flex-1 p-3">
      <div className=" flex items-center gap-1 sm:gap-3 py-1">
        <h1 className=" w-fit text-[12px] md:text-lg capitalize font-bold md:font-semibold whitespace-nowrap">{dish.name}</h1>
        <i className='bx bx-message-square-dots' style={{ color: "#51c452" }} ></i>
        
        <span className=" w-8 sm:w-12 text-center bg-[#51c452] text-white text-[9px] sm:text-[13px] rounded-sm font-semibold"> {dish.rating} <i className='bx bxs-star text-[8px] sm:text-[10px] text-white' ></i></span>
      </div>

      <div className=" flex items-center gap-2 sm:gap-6 mt-1">
        <div className=" flex items-center gap-2">
         
              <div className=" flex flex-col items-center gap-1">
              <img src={frigde} alt="" className=" w-[20px] h-[22px]" />
              <p className="text-[8px]">Refrigerator</p>
            </div>
           
         
        </div>
        <div className=" h-[30px] border-r-2"></div>

        <div>
          <h1 className=" font-semibold text-[12px] sm:text-lg">Ingrediendts</h1>
          <p className=" text-[9px] sm:text-[13px] font-semibold text-[#fdc531] cursor-pointer flex items-center gap-2">View List <i className='bx bx-chevron-right font-extrabold'></i></p>
        </div>
      </div>
      <p className=" mt-3 text-slate-400 text-[11px] sm:text-[16px]">{dish.description}</p>

    </div>
    <div className=" w-[180px] p-3 relative">
      <img src='https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFzYWxhJTIwcGFuZWVyfGVufDB8fDB8fHww' alt="" className=" w-full h-full rounded-lg" />
      <button className=" w-[50px] btn btn-sm text-[12px] absolute rounded-md font-semibold border-2 bg-[#fff9f2] text-orange-400 border-orange-400  flex items-center justify-center bottom-[-10px] left-[50%] translate-x-[-50%] shadow-md">Add</button>

    </div> 
   </div>
  )
}
