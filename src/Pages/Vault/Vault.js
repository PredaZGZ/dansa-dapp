import Navbar from "../../Components/Navbar";
import Sidebar from "./Sidebar";


export default function Vault() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <main className="text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-5">
            <h1>
                Vault
            </h1>
        </main>
      </>
    )
  }
