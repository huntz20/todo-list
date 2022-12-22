import TodoCard from "./component/TodoCard.jsx";
function App() {
  return (
    <div className="App">
        <div className="border-b-2 px-4 py-4">
            <h1 className="text-bold">Product Roadmap</h1>
        </div>
      <div className="flex flex-row px-4 py-8">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
      </div>
    </div>
  )
}

export default App
