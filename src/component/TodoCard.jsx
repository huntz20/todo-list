import React from 'react'
import addIcon from '../assets/add-svgrepo-com.svg'
import TaskCard from "./TaskCard.jsx";
const TodoCard = ({}) => {
    const renderNoTask = () => {
        return <div className="bg-[#f3f3f3] border-2 border-[#e3e3e3] rounded-sm py-1 px-4"><span className="font-light">No Task</span></div>
    }

    const renderLoadingTask = () => {
        return <div className="basis-1/4 border-2 rounded mr-8 py-6 px-4 animate-pulse mb-4">
            <div className="h-4 bg-gray-400 rounded-md w-[200px] mb-4"></div>
            <hr className="dashed-line"/>
            <div className="flex items-center">
                <div className="h-[20px] bg-gray-400 rounded-full w-[230px] mr-2"></div>
                <div className="h-[20px] bg-gray-400 rounded-full w-[20px]"></div>
            </div>
        </div>
    }

    const renderLoading = () => {
        return <div className="basis-1/4 border-2 rounded mr-8 py-4 px-2 animate-pulse">
            <div className="h-4 bg-gray-400 rounded-md w-[80px] mb-4"></div>
            <div className="h-3 bg-gray-400 rounded-md w-[120px] mb-4"></div>
            <div>
                {renderLoadingTask()}
                {renderLoadingTask()}
            </div>
            <div className="flex items-center">
                <img className="inline-block mr-2 " width="18" src={addIcon} alt="add-icon"/>
                <span className="font-light text-sm">New Task</span>
            </div>
        </div>
    }
    const renderTask = () => {
        return <div>
            <TaskCard />
            <TaskCard />
        </div>
    }
    // return renderLoading()
    return <div className="basis-1/4 border-2 rounded mr-4 p-4">
        <span className="border-2 font-light p-[6px] rounded-md inline-block mb-1">
            Group Name
        </span><br/>
        <span className="inline-block mb-2 text-xs">January - March</span>
        <div className="mb-4">
            {/*{renderNoTask()}*/}
            {renderTask()}
        </div>
        <div className="flex items-center cursor-pointer">
            <img className="inline-block mr-2 " width="18" src={addIcon} alt="add-icon"/>
            <span className="font-light text-sm">New Task</span>
        </div>
    </div>
}

export default TodoCard