import React from "react";
import threeDotsIcon from '../assets/three-dots.svg'

const TaskCard = ({}) => {

    const renderProgressIndicator = () => {
        return <div className="h-[20px] bg-teal-700 rounded-full w-[20px] bg-50 bg-center bg-no-repeat checked-background"></div>
    }

    return <div className="basis-1/4 border-2 rounded  py-6 px-4 mb-4">
        <span className="font-medium text-sm leading-loose inline-block mb-3">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... </span>
        <hr className="dashed-line"/>
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div className="h-[20px] bg-gray-200 rounded-full w-[240px] mr-6">
                    <div className="h-[20px] bg-cyan-600 rounded-l-full w-[calc(30/100*240px)]"></div>
                </div>
                {renderProgressIndicator()}
            </div>
            <img className="cursor-pointer" src={threeDotsIcon} alt="three icon dots" width="18"/>
        </div>
    </div>
}


export default TaskCard
