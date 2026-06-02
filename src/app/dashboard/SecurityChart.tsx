import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '00:00', threats: 2 },
  { name: '04:00', threats: 1 },
  { name: '08:00', threats: 5 },
  { name: '12:00', threats: 2 },
  { name: '16:00', threats: 8 },
  { name: '20:00', threats: 3 },
];

export default function SecurityChart() {
  return (
    <div className="h-64 w-full bg-gray-900 border border-gray-800 p-4 rounded-xl">
      <h3 className="text-gray-400 mb-4 text-sm">Threat Detection Trends</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip contentStyle={{ backgroundColor: '#111827', border: 'none' }} />
          <Line type="monotone" dataKey="threats" stroke="#22C55E" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

