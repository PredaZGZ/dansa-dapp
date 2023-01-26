import Sidebar from "../../Components/Sidebar";

export default function Vault() {

  return (
    <>
      <div className="flex bg-gray-700 ">
        <Sidebar />
        <main className="text-white mx-auto">
            <section className="mt-2">
              <div className="grid grid-cols-4 pt-6 gap-16">
                <button className="bg-slate-800 border-gray-800 rounded border-2 w-32 h-12 shadow-xl">
                  Fotos
                </button>
                <button className="bg-slate-800 border-gray-800 rounded border-2 w-32 h-12 shadow-xl">
                  Videos
                </button>
                <button className="bg-slate-800 border-gray-800 rounded border-2 w-32 h-12 shadow-xl">
                  Notas
                </button>
                <button className="bg-slate-800 border-gray-800 rounded border-2 w-32 h-12 shadow-xl">
                  Archivos
                </button>
              </div>
            </section>
        </main>
      </div>
    </>
    )
  }
