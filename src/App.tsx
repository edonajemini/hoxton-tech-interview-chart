
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './App.css'



const studentData = [
  {
    name: 'Stephen',
      beavers: 3,
      stars: 2,
      numbers:3
    
  },
  {
    name: 'Eduardo',
      beavers: 7,
      stars: 1,
      numbers:6
  },
  {
    name: 'Pepe',
      beavers: 6,
      stars: 9,
      numbers:9
  },
  {
    name: 'Gigachad',
      beavers: 0,
      stars: 10,
      numbers:12
    
  },
]


// Using the Recharted library, create a graph as similar as you can, to the one in the #Classroom

function App() {
  return <>
  <header>
  <div style={{ width: 1000, height: 600 }}>
  <ResponsiveContainer width="100%" height="100%">
  <BarChart width={600} height={300} data={studentData}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis dataKey="numbers" stroke="#8884d8" />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Bar dataKey="beavers" fill="#FFA500" />
    <Bar dataKey="stars" fill="#FFFF00" />
  </BarChart>
  </ResponsiveContainer>
  </div>
  </header>
  </>

}

export default App
