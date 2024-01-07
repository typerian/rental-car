export interface CarType {
  carAvg: number;
  createdAt: string;
  id: string;
  name: string;
  price: number;
  publishedAt: string;
  updatedAt: string;
  seat: number;
  carType: string;
  carBrand: string;
  image: {
    url: string;
    id: string;
  };
}

export interface LocationType {
  address: string;
}

export interface FormType {
  location: string;
  pickUpDate: string;
  dropOffDate: string;
  pickUpTime: string;
  dropOffTime: string;
  contactNumber: string;
  username: string;
  carId: {
    connect: {
      id: string;
    };
  };
}
