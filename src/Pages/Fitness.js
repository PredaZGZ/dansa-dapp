import Base from "../Components/Base";

export default function Dashboard() {
    return (
      <Base>
        <main className="text-white w-full">
              <section className="mt-2 flex flex-col">
                <h2 className="flex justify-center">Fitness</h2>
                <div className="flex justify-end">
                  <button className="bg-zinc-800 rounded px-6 py-2 mr-10">Nuevo peso</button>
                </div>
              </section>
          </main>
      </Base>
    )
  }
