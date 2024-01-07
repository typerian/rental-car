"use client";
import { useEffect, useState } from "react";
import FilterOptions from "./components/home/filters-options";
import Hero from "./components/home/hero";
import SearchInput from "./components/home/search-input";
import { getCarLists } from "./lib/services";
import CarsList from "./components/home/cars-list";
import { CarType } from "./lib/types";

export default function Home() {
  const [_carsList, setCarsList] = useState<CarType[]>([]);
  const [_carsOrgList, setCarsOrgList] = useState<CarType[]>([]);

  useEffect(() => {
    getCarList_();
  }, []);

  const filterCarList = (brand: string) => {
    const filterList = _carsOrgList.filter(
      (car: CarType) => car.carBrand === brand
    );
    setCarsList(filterList);
    console.log(filterList);
  };

  const orderByPrice = (price: string) => {
    const sortedData = [..._carsOrgList].sort((a, b) =>
      Number(price) === -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };

  const getCarList_ = async () => {
    const res = await getCarLists();
    setCarsList(res);
    setCarsOrgList(res);
  };

  return (
    <>
      <div className="p-5 sm:px-10 md:px-20">
        <Hero />
        <SearchInput />
        <FilterOptions
          carsList={_carsOrgList}
          setBrand={(value: string) => filterCarList(value)}
          setPrice={(value: string) => orderByPrice(value)}
        />
        <CarsList carsList={_carsList} />
      </div>
    </>
  );
}
