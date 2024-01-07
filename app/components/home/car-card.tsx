"use client";
import { CarType } from "@/app/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

const CarCard = ({ car }: { car: CarType }) => {
  const [_car, setCar] = useState<CarType>(car);

  useEffect(() => {
    if (car) {
      setCar(car);
    }
  }, [car]);

  return (
    <>
      {_car ? (
        <div className="group p-2 hover:bg-white hover:border-[1px] cursor-pointer duration border-blue-500 rounded-md">
          <h2 className="text-[20px] font-medium mb-2">{_car.name}</h2>
          <span className="text-[12px] font-light">$</span>
          {_car.price}
          <span className="text-[12px] font-light">/dia</span>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={_car.image.url ?? "/fallback.png"}
              alt=""
              width={220}
              height={200}
              className="w-[250px] h-[150px] mb-3 object-contain"
            />
          </div>
          <div className="flex justify-around group-hover:hidden">
            <div className="text-center text-gray-500">
              <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
              <h2 className="line-clamp-5 text-[14px] font-light">
                {_car.carType}
              </h2>
            </div>
            <div className="text-center text-gray-500">
              <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
              <h2 className="line-clamp-5 text-[14px] font-light">
                {_car.seat} Asiento
              </h2>
            </div>
            <div className="text-center text-gray-500">
              <FaGasPump className="w-full text-[22px] mb-2" />
              <h2 className="line-clamp-5 text-[14px] font-light">
                {_car.carAvg} MPG
              </h2>
            </div>
          </div>
          <div className="hidden items-center font-bold text-xl group-hover:flex bg-gradient-to-r from-blue-400 p-2 rounded-lg text-white w-full px-5 justify-between">
            <div>{"Renta Ahora"}</div>
            <div className="text-sky-600  text-3xl">{">"}</div>
          </div>
        </div>
      ) : (
        <div>Cargando</div>
      )}
    </>
  );
};

export default CarCard;
