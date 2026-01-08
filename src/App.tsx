import NavBar from "./components/NavBar"


function App() {
  return (
    <div className="w-full min-h-screen bg-linear-to-b from-slate-900 via-gray-900 to-gray-700 flex  pt-10  flex-col">
      <NavBar />
      <h1 className="text-white text-4xl font-bold">Search IP Address</h1>
    </div>
  )
}

export default App
