import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";

const WeightTable = () => {
  const [weights, setWeights] = useState([]);
  const [isEditing, setIsEditing] = useState({});
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:4000/fitness/weights/user/${auth.user.id}`,
        {
          headers: {
            "auth-token": auth.userToken,
          },
        }
      );
      setWeights(result.data.data);
      console.log(result.data.data)
    };
    fetchData();
  }, [auth]);

  const handleDelete = id => {
    axios.delete(`http://localhost:4000/fitness/weights/${id}`,
    {
      headers: {
        "auth-token": auth.userToken,
      },
    })
      .then(() => setWeights(weights.filter(weight => weight._id !== id)))
      .catch(err => console.error(err));
  };

  const handleEdit = weight => {
    setIsEditing({ ...isEditing, [weight._id]: true });
  };

  const handleSave = weight => {
    setIsEditing({});

    const updatedWeights = weights.map(w => {
      if (w._id === weight._id) {
        return weight;
      }
      return w;
    });
    setWeights(updatedWeights);

    axios.put(`http://localhost:4000/fitness/weights/${weight._id}`, updatedWeights, 
      {
      headers: {
        "auth-token": auth.userToken,
      },
      
    }).catch(err => console.error(err));
  };

  const handleWeightChange = (e, weight) => {
    weight.weight = e.target.value;
  };

  return (
    <table className="table-auto w-full text-left">
      <thead className="bg-zinc-700 text-white">
        <tr>
          <th className="px-4 py-2">Weight</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-zinc-800">
        {weights.map(weight => (
          <tr key={weight._id}>
            <td className="border px-4 py-2">
              {isEditing[weight._id] ? (
                <input
                  className='bg-zinc-700'
                  type="text"
                  value={weight.weight}
                  onChange={e => handleWeightChange(e, weight)}
                />
              ) : (
                weight.weight
              )}
            </td>
            <td className="border px-4 py-2">{weight.date}</td>
            <td className="border px-4 py-2">
              {isEditing[weight._id] ? (
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleSave(weight)}>Save</button>
              ) : (
                <div className="flex">
                  <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => handleEdit(weight)}>Edit</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleDelete(weight._id)}>Delete</button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeightTable;

