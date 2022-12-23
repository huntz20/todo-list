import TodoCard from "./component/TodoCard.jsx";
import React from "react";
import Modal from "./component/Modal.jsx";
import AuthForm from "./component/AuthForm.jsx";
function App() {
  return (
    <div className="App">
        <Modal show={true} title="Signing">
            <AuthForm />
        </Modal>
        <div className="border-b-2 px-4 py-4">
            <h1 className="text-bold">Product Roadmap</h1>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-6 w-full">
          <TodoCard isLoading={false} />
          <TodoCard isLoading={true} />
          <TodoCard isLoading={true} />
          <TodoCard isLoading={true} />
      </div>
    </div>
  )
}

export default App
