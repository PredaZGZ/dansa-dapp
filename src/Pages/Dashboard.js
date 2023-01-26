import Sidebar from "../Components/Sidebar";


export default function Dashboard() {
    return (
      <div className="flex bg-gray-700">
          <Sidebar />
          <main className="text-white mx-auto">
              <section className="mt-2">
                <h2>Dashboard</h2>
              </section>
          </main>
        </div>
    )
  }
