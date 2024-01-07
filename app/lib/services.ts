import request, { gql } from "graphql-request";
import { CarType, FormType, LocationType } from "./types";

export const getCarLists = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        seat
        carType
        carBrand
        image {
          id
          url
        }
      }
    }
  `;
  const { carLists }: { carLists: CarType[] } = await request(
    process.env.HYGRAPHQL_API_KEY,
    query
  );
  return carLists;
};

export const getLocationStore = async () => {
  const query = gql`
    query MyQuery {
      storeLocations {
        address
      }
    }
  `;

  const { storeLocations }: { storeLocations: LocationType[] } = await request(
    process.env.HYGRAPHQL_API_KEY,
    query
  );
  return storeLocations;
};

console.log({ variable: process.env.HYGRAPHQL_API_KEY });

export const createBooking = async (formValue: FormType) => {
  const mutation =
    gql`
    mutation MyMutation {
      createBooking(
        data: {
          carId: { connect: { id: "` +
    formValue.carId +
    `" } },
          contactNumber: "` +
    formValue.contactNumber +
    `",
          dropOffDate: "` +
    formValue.dropOffDate +
    `",
          dropOffTime: "` +
    formValue.dropOffTime +
    `",
          pickUpDate: "` +
    formValue.pickUpDate +
    `",
          pickUpTime: "` +
    formValue.pickUpTime +
    `",
          userName: "` +
    formValue.username +
    `",
        }
      )
    }
  `;

  const { storeLocations }: { storeLocations: LocationType[] } = await request(
    process.env.HYGRAPHQL_API_KEY,
    mutation
  );
  return storeLocations;
};
