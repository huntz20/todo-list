import React from "react";
import threeDotsIcon from '../assets/three-dots.svg'

const TaskCard = ({}) => {

    const renderProgressIndicator = () => {
        return <div className="h-[20px] bg-teal-700 rounded-full w-[20px] bg-50 bg-center bg-no-repeat checked-background"></div>
    }

    return <div className="border-2 rounded  py-6 px-4 mb-4 bg-gray-100">
        <span className="font-medium text-sm leading-loose inline-block mb-3">Neque porro quisquam est qui dolorem ipsum </span>
        <hr className="dashed-line"/>
        <div className="flex items-center justify-between">
            <div className="flex items-center w-full">
                <div className="h-[20px] bg-gray-200 rounded-full w-[70%] mr-4">
                    <div className="h-[20px] bg-cyan-600 rounded-l-full w-[calc(30/100*70%)]"></div>
                </div>
                {renderProgressIndicator()}
            </div>
            <img className="cursor-pointer" src={threeDotsIcon} alt="three icon dots" width="18"/>
        </div>
    </div>
}


export default TaskCard
