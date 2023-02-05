import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import WeightChart from "./Charts/WeightChart"

const WeightRecord = () => {
  const [weight, setWeight] = useState("");
  const [Msg, setMsg] = useState("");

  const auth = useSelector((state) => state.auth);
  const id = auth.user.id;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/fitness/weights", { id, weight }, {
        headers: {
          'auth-token' : auth.userToken,
        }
      });
      if (res.status === 201) {
        setMsg("Registrado correctamente.")
        setWeight("")
        setTimeout(() => {
          setMsg("")
        }, 3500);
      }
    } catch (error) {
      setMsg(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-8 mb-2">Registro de Peso</h1>
        {Msg && <h5 className="text-sm text-center my-4 bg-zinc-600 p-2 px-4 rounded-lg">{Msg}</h5>}
        <form onSubmit={handleSubmit} className="flex justify-center gap-6 my-auto w-full h-10 mt-4">
          <input
            type="text"
            className="border py-2 px-4 rounded-lg bg-zinc-500 border-zinc-700"
            placeholder="Peso"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button
            type="submit"
            className="bg-zinc-500 rounded-lg hover:bg-zinc-600 px-4"
          >
            Submit
          </button>
        </form>
        <WeightChart />
    </div>
  );
};

export default WeightRecord;
