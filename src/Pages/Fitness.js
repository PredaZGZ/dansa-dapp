import Base from "../Components/Base";
import WeightRecord from "../Components/Fitness/Weight";

export default function Dashboard() {
    return (
      <Base>
        <main className="text-white w-full">
              <section className="mt-2 flex flex-col">                
                <WeightRecord />
              </section>
          </main>
      </Base>
    )
  }
