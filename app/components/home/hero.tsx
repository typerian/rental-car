import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-[40px] md:text-[60px] font-bold">
            Renta de Autos Premiun un tu área
          </h2>
          <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
            Reserva el auto seleccionado comodamente, Paga por conducir, Reserva
            tu Auto ahora.
          </h2>
          <button className="p-2 mt-5 bg-blue-500 text-white rounded-full transition-all px-4 hover:scale-105">
            Ver autos
          </button>
        </div>
        <div>
          <Image
            src={"/hero.png"}
            alt="alt"
            width={400}
            height={500}
            className="w-full object-cover align-baseline"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
