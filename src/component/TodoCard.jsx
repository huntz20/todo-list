import React, {useState} from 'react'
import addIcon from '../assets/add.svg'
import TaskCard from "./TaskCard.jsx";
import Modal from "./Modal.jsx";
import TaskForm from "./TaskForm.jsx";
import useTodoStore from "../../store/useTodoStore.js";

const TodoCard = ({isLoading, data}) => {
    const showTaskModal = useTodoStore(state => state.showTaskModal)
    const setShowTaskModal = useTodoStore(state => state.setShowTaskModal)
    const setParentSelected = useTodoStore(state => state.setParentSelected)



    const handleOpenModalTask = () => {
        setShowTaskModal(true)
        setParentSelected(data.id)
    }

    const handleCloseModalTask = () => {
        setShowTaskModal(false)
        setParentSelected(null)
    }
    const renderNoTask = () => {
        if (data.children?.length) return null;
        return <div className="bg-[#f3f3f3] border-2 border-[#e3e3e3] rounded-sm py-1 px-4"><span
            className="font-light">No Task</span></div>
    }

    const renderLoadingTask = () => {
        return <div className="basis-1/4 border-2 rounded py-6 px-4 animate-pulse mb-4">
            <div className="h-4 bg-gray-400 rounded-md w-[30%] mb-4"></div>
            <hr className="dashed-line"/>
            <div className="flex items-center">
                <div className="h-[20px] bg-gray-400 rounded-full w-[70%] mr-4"></div>
                <div className="h-[20px] bg-gray-400 rounded-full w-[20px]"></div>
            </div>
        </div>
    }

    const renderLoading = () => {
        return <div>
            <div className="border-2 rounded p-4 animate-pulse">
                <div className="h-4 bg-gray-400 rounded-md w-[20%] mb-4"></div>
                <div className="h-3 bg-gray-400 rounded-md w-[30%] mb-4"></div>
                <div>
                    {renderLoadingTask()}
                    {renderLoadingTask()}
                </div>
                <div className="flex items-center cursor-not-allowed">
                    <img className="inline-block mr-2 " width="18" src={addIcon} alt="add-icon"/>
                    <span className="font-light text-sm">New Task</span>
                </div>
            </div>
        </div>
    }
    const renderTask = () => {
        if (!data.children?.length) return null;
        return <div>
            {data.children.map((e,i) => <TaskCard key={e.id} data={e} />)}
        </div>
    }



    if (isLoading) return renderLoading();

    return <div>
        <Modal show={showTaskModal} onClose={handleCloseModalTask} title="Create Task ">
            <TaskForm />
        </Modal>
        <div className="border-2 rounded p-4">
        <span className="border-2 font-light p-[6px] rounded-md inline-block mb-1">
            {data.title}
        </span><br/>
            <span className="inline-block mb-2 text-xs">{data.description}</span>
            <div className="mb-4">
                {renderNoTask()}
                {renderTask()}
            </div>
            <div className="flex items-center cursor-pointer" onClick={handleOpenModalTask}>
                <img className="inline-block mr-2 " width="18" src={addIcon} alt="add-icon"/>
                <span className="font-light text-sm">New Task</span>
            </div>
        </div>
    </div>
}

export default TodoCard
