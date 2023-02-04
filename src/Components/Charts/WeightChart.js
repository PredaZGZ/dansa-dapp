import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const WeightRecord = () => {

    const data = [
        {
            date: '04/02',
            weight: 105,
        },
        {
            date: '03/02',
            weight: 103,
        },
        {
            date: '02/02',
            weight: 108,
        },
        {
            date: '01/02',
            weight: 107,
        },
    ]

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

  return (

        <LineChart className="mt-14" width={700} height={400} data={data}>
            <XAxis dataKey="date"/>
            <YAxis domain={['dataMin - 5', 'dataMax + 5']}/>
            <Line type="monotone" dataKey="weight" stroke="#fff" />
            <Tooltip content={<CustomTooltip />}/>
        </LineChart>
    
  );
};

export default WeightRecord;
