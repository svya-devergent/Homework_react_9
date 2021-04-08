import React from "react";
import statisticalData from './ statistical-data.json';
import Statistics from './Statistics/Statistics'

export default function App() {
  return (
    <div>
       <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  )
}
