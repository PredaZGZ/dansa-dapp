import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const WeightRecord = () => {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userId = dispatch(state => state.user.userId);
      const res = await axios.post("/api/weight/create", { userId, weight });
      console.log(res.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Weight Record</h1>
      {error && (
        <div className="bg-red-500 text-white p-4 rounded mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border p-2 rounded mb-4"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WeightRecord;
