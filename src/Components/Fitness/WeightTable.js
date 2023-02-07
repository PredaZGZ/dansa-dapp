import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeightTable = () => {
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    axios.get('/api/weights')
      .then(res => setWeights(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = id => {
    axios.delete(`/api/weights/${id}`)
      .then(res => setWeights(weights.filter(weight => weight._id !== id)))
      .catch(err => console.error(err));
  };

  const handleEdit = weight => {
    // Code for handling the edit logic
  };

  return (
    <table className="table-auto w-full text-left">
      <thead className="bg-zinc-700 text-white">
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">User</th>
          <th className="px-4 py-2">Weight</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-zinc-800">
        {weights.map(weight => (
          <tr key={weight._id}>
            <td className="border px-4 py-2">{weight._id}</td>
            <td className="border px-4 py-2">{weight.user}</td>
            <td className="border px-4 py-2">{weight.weight}</td>
            <td className="border px-4 py-2">{weight.date}</td>
            <td className="border px-4 py-2 text-zinc-600">
              <button
                className="px-2 py-1 mr-2"
                onClick={() => handleEdit(weight)}
              >
                Edit
              </button>
              <button
                className="px-2 py-1"
                onClick={() => handleDelete(weight._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeightTable;
