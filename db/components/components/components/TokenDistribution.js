import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const dummy = [
  { name: 'Public', value: 35 },
  { name: 'Team', value: 20 },
  { name: 'Ecosystem', value: 25 },
  { name: 'Community', value: 15 },
  { name: 'Reserve', value: 5 }
];

export default function TokenDistribution() {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="font-semibold mb-2">Token Distribution</h2>
      <div style={{ width: '100%', height: 240 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={dummy} dataKey="value" nameKey="name" outerRadius={80}>
              {dummy.map((entry, index) => <Cell key={index} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
