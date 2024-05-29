import React, { useContext } from "react";
import frigde from './../assets/refrigerator.png'
import { useNavigate, useParams } from "react-router-dom";
import { store } from "../store/store";

function DetailsReceipe() {
 const{data} = useContext(store);
 const navigate = useNavigate();
 const dishes = data.dishes;
  const { id } = useParams();
  const dish = dishes.find((dish) => dish.id === Number(id));
  console.log(dish);
  return (
    <div className=" w-full h-fit px-4 mt-3">
      <i className='bx bx-left-arrow-alt w-[25px] h-[25px] bg-slate-400 text-white rounded-full flex justify-center items-center cursor-pointer mb-2' onClick={()=> navigate('/')}></i>
      <div className=" h-[200px] md:w-3/4 border mx-auto rounded-lg flex justify-between ">
        <div className=" flex-1 p-3">
          <div className=" flex items-center gap-3 py-1">
            <h1 className=" text-xl capitalize font-semibold">{dish.name}</h1>

            <span className=" w-12 text-center bg-[#51c452] text-white text-[13px] rounded-sm font-semibold">
              {dish.rating}<i className="bx bxs-star text-[10px] text-white"></i>
            </span>
          </div>
          <div className=" text-[14px] text-slate-400">
           {dish.description}
          </div> 
          <div className=" flex items-center gap-1 text-[14px] mt-3">
          <i class='bx bx-time-five'></i>
            1 hour
          </div>
        </div>
        <div className="w-[200px] h-full p-2">
          <img
            src={dish.image}
            className=" w-full h-full rounded-md"
            alt=""
          />
        </div>
      </div>
      <div className=" md:w-3/4 mx-auto">
      <div className=" mt-5">
        <h1 className=" text-lg font-semibold">Ingredients</h1>
        <p className=" text-[12px] text-slate-400 mb-3">For 2 people</p>
        <hr />
        <h1 className=" mt-3 font-semibold text-lg mb-2">Vegetables (05) <i className='bx bxs-down-arrow text-[12px]'></i></h1>
        <div className=" flex justify-between items-center px-3 mb-2">
          <p>Cauliflower</p>
          <p>01 Pc</p>
        </div>
        <div className=" flex justify-between items-center px-3 mb-2">
          <p>Cauliflower</p>
          <p>10 Pc</p>
        </div> 
        <div className=" flex justify-between items-center px-3 mb-2">
          <p>Cauliflower</p>
          <p>1/2 kg</p>
        </div>

        <h1 className=" mt-3 font-semibold text-lg mb-2">Spices (10) <i className='bx bxs-down-arrow text-[12px]'></i></h1>
        <div className=" flex justify-between items-center px-3 mb-2">
          <p>Coriander</p>
          <p>100 gram</p>
        </div>
        <div className=" flex justify-between items-center px-3 mb-2">
          <p>Mustard oil</p>
          <p>1/2 litres</p>
        </div>  
      </div>

      <h1 className=" mt-4 text-lg font-semibold">Appliances</h1>
     <div className=" flex  gap-2 items-center mt-4">
     <div className=" w-[70px] h-[80px] rounded-md flex flex-col justify-center items-center bg-slate-200">
        <img src={frigde} className=" w-[22px] h-[25px]" alt="" />
        <p className=" text-[10px]">Refrigerator</p>
      </div>

      <div className=" w-[70px] h-[80px] rounded-md flex flex-col justify-center items-center bg-slate-200">
        <img src={frigde} className=" w-[22px] h-[25px]" alt="" />
        <p className=" text-[10px]">Refrigerator</p>
      </div>
      <div className=" w-[70px] h-[80px] rounded-md flex flex-col justify-center items-center bg-slate-200">
        <img src={frigde} className=" w-[22px] h-[25px]" alt="" />
        <p className=" text-[10px]">Refrigerator</p>
      </div>

     </div>

      </div>
    
    </div>
  );
}

export default DetailsReceipe;
