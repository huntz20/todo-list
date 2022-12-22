import React from 'react'
import addIcon from '../assets/add-svgrepo-com.svg'

const TodoCard = ({}) => {
    const renderNoTask = () => {
        return <div><span>No Task</span></div>
    }

    const renderLoadingTask = () => {
        return <div className="basis-1/4 border-2 rounded mr-8 py-6 px-4 animate-pulse mb-4">
            <div className="h-4 bg-gray-400 rounded-md w-[200px] mb-4"></div>
            <hr className="dashed-line"/>
            <div className="flex items-center">
                <div className="h-4 bg-gray-400 rounded-md w-[140px] mr-2"></div>
                <div className="h-4 bg-gray-400 rounded-full w-[20px]"></div>
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

    return <div className="basis-1/4 border-2 rounded mr-8 p-2">
        <span className="border-2 font-light p-[2px] rounded-md">
            Group Name
        </span><br/>
        <span>January - March</span>
        <div>
            {renderNoTask()}
        </div>
        <div className="flex items-center">
            <img className="inline-block mr-2 " width="18" src={addIcon} alt="add-icon"/>
            <span className="font-light text-sm">New Task</span>
        </div>
    </div>
}

export default TodoCard
