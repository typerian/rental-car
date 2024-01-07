import { CarType } from "@/app/lib/types";
import CarCard from "../home/car-card";
import FormModal from "./form-modal";

const BookingModal = ({ car }: { car: CarType }) => {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
      <div className="border-b-[1px] pb-2">
        <h3>Renta un Auto ahora!</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <div>
          <CarCard car={car} />
        </div>
        <div>{car && <FormModal carId={car.id} />}</div>
      </div>
    </form>
  );
};

export default BookingModal;
