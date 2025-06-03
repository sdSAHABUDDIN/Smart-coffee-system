
import MachineCard from "../Components/MachineCard";
const Machine = () => {

  return (
    <div className="bg-[#FCF3DE]  min-h-screen p-4">
      {/* Section 1: Big Discount Image */}
      <section className=" mb-8">
          <img
            src="discount.jpg"
            alt="Big Discount Sale"
            className="w-full h-full object-contain rounded-xl shadow-lg"
          />
        
      </section>

      {/* Section 2: Product Details */}
      <section className="bg-[#FFCA99] rounded-xl p-6 shadow-xl flex flex-col">
        <MachineCard />
      </section>
    </div>
  );
};

export default Machine;
