"use client";

import { CarType } from "@/app/lib/types";
import React, { useEffect, useState } from "react";

const FilterOptions = ({
  carsList,
  setBrand,
  setPrice,
}: {
  carsList: CarType[];
  setBrand: (value: string) => void;
  setPrice: (price: string) => void;
}) => {
  const BrandSet = new Set<string>();

  const [brandList, setBrandList] = useState<string[]>([]);

  const filterCarList = () => {
    carsList.forEach((element: CarType) => {
      BrandSet.add(element.carBrand);
    });
    setBrandList(Array.from(BrandSet));
  };

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Catalogos de Autos</h2>
        <h2>Explore nuestros autos que quizás le gusten</h2>
      </div>
      <div className="flex gap-5">
        <select
          className="select select-bordered md:block w-full hidden max-w-xs"
          onChange={(e) => setPrice(e.target.value)}
        >
          <option disabled selected>
            Precio
          </option>
          <option value={-1}>Min a Max</option>
          <option value={1}>Max a Min</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled selected>
            Marca
          </option>
          {brandList.map((brand: string, index: number) => (
            <option key={index}>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
