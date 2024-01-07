"use client";
import { CarType } from "@/app/lib/types";
import React, { useState } from "react";
import CarCard from "./car-card";
import BookingModal from "../car-booking/booking-modal";

const CarsList = ({ carsList }: { carsList: CarType[] }) => {
  const modal = document.getElementById("my_modal_4");
  const [_selectedCar, setSelectedCar] = useState<CarType>();

  return (
    <>
      <div className="grid grid-cols-2 gap-3 mt-8 first-letter:md:grid-cols-3 lg:grid-cols-4">
        {carsList.map((car, index) => (
          <div
            key={index}
            onClick={() => {
              (modal as HTMLDialogElement).showModal();
              setSelectedCar(car);
            }}
          >
            <CarCard car={car} />
          </div>
        ))}
      </div>
      <dialog id="my_modal_4" className="modal">
        <BookingModal car={_selectedCar!} />
      </dialog>
    </>
  );
};

export default CarsList;
