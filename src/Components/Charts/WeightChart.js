import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const WeightChart = () => {
  const auth = useSelector((state) => state.auth);
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:4000/fitness/weights/user/${auth.user.id}/chart`,
        {
          headers: {
            "auth-token": auth.userToken,
          },
        }
      );
      setData(result.data.data);
    };
    fetchData();
  }, [auth]);
  
  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="">
          <p className="">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  }
  if (!data) {
    return <></>
  } else {
    return (
      <LineChart className="mt-14" width={700} height={400} data={data} >
        <XAxis dataKey="date"/>
        <YAxis domain={['dataMin - 5', 'dataMax + 5']}/>
        <Line type="monotone" dataKey="weight" stroke="#fff" />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    );
  }
};

export default WeightChart;
