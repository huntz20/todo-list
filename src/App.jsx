import TodoCard from "./component/TodoCard.jsx";
function App() {
  return (
    <div className="App">
        <div className="border-b-2 px-4 py-4">
            <h1 className="text-bold">Product Roadmap</h1>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-6 w-full">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
      </div>
    </div>
  )
}

export default App
