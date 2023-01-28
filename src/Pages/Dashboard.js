import Sidebar from "../Components/Sidebar";
import Titlebar from "../Components/Titlebar";


export default function Dashboard() {
    return (
      <>
      <Titlebar/>
      <div className="flex bg-zinc-700 mt-4">
        <Sidebar />
        <main className="text-white mx-auto">
            <section className="mt-2">
              <h2>Dashboard</h2>
            </section>
        </main>
      </div>
      </>
    )
  }
