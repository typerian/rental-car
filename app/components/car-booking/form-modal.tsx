"use client";

import { createBooking, getLocationStore } from "@/app/lib/services";
import { LocationType, FormType } from "@/app/lib/types";
import React, { useEffect, useState } from "react";

const FormModal = ({ carId }: { carId: string }) => {
  const [location, setLocation] = useState<LocationType[]>();
  const [formValue, setFormValue] = useState<FormType>({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    username: "Alejandro J. Méndez C.",
    carId: {
      connect: {
        id: "",
      },
    },
  });

  useEffect(() => {
    getLocation_();
  }, []);

  useEffect(() => {
    setFormValue({
      ...formValue,
      carId: {
        connect: {
          id: carId,
        },
      },
    });
  }, [carId]);

  const getLocation_ = async () => {
    const res = await getLocationStore();
    setLocation(res);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const res = await createBooking(formValue);

    console.log(res);
  };

  return (
    <>
      <div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">PickUp Location</label>
          <select
            name="location"
            onChange={handleChange}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Who shot first?
            </option>
            {location &&
              location.map((item, index) => (
                <option key={index}>{item.address}</option>
              ))}
          </select>
        </div>
        <div className="flex gap-5 mb-5">
          <div className="flex flex-col w-full">
            <label className="text-gray-400">Pick Up Date</label>
            <input
              name="pickUpDate"
              type="date"
              onChange={handleChange}
              placeholder="Tipea aqui"
              className="input input-bordered w-full max-w-lg"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-gray-400">Drop Off Date</label>
            <input
              type="date"
              name="dropOffDate"
              onChange={handleChange}
              placeholder="Tipea aqui"
              className="input input-bordered w-full max-w-lg"
            />
          </div>
        </div>
        <div className="flex gap-5 mb-5">
          <div className="flex flex-col w-full">
            <label className="text-gray-400">Pick Up Time</label>
            <input
              type="time"
              name="pickUpTime"
              onChange={handleChange}
              placeholder="Tipea aqui"
              className="input input-bordered w-full max-w-lg"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-gray-400">Drop Off Time</label>
            <input
              type="time"
              name="dropOffTime"
              onChange={handleChange}
              placeholder="Tipea aqui"
              className="input input-bordered w-full max-w-lg"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Numero de Contácto</label>
          <input
            type="text"
            name="contactNumber"
            onChange={handleChange}
            placeholder="Tipea aqui"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <form className="flex justify-end mt-3 gap-3 dialog">
          <button className="btn">Close</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="btn bg-blue-500 text-white hover:bg-blue-800"
          >
            Guardar
          </button>
        </form>
      </div>
    </>
  );
};

export default FormModal;
