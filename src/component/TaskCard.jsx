import React from "react";
import threeDotsIcon from '../assets/three-dots.svg'
import classNames from "classnames";

const TaskCard = ({data}) => {
    const isDone = data.progress_percentage === 100
    const renderProgressIndicator = () => {
        if (isDone) return <div className="h-[20px] bg-teal-700 rounded-full w-[20px] bg-50 bg-center bg-no-repeat checked-background"></div>;
        return <div className="font-light text-sm text-gray-500">{data.progress_percentage}%</div>
    }

    return <div className="border-2 rounded  py-6 px-4 mb-4 bg-gray-100">
        <span className="font-medium text-sm leading-loose inline-block mb-3">{data.name}</span>
        <div className="py-4 border-dashed border-t-2 border-gray-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center w-full">
                    <div className="h-[20px] bg-gray-200 rounded-full w-[70%] mr-4">
                        <div style={{width: isDone ? '100%' : `calc(${data.progress_percentage}/100*70%)`}} className={classNames(`h-[20px]`, {'bg-cyan-600 rounded-l-full': !isDone, 'bg-teal-700 rounded-full': isDone})}></div>
                    </div>
                    {renderProgressIndicator()}
                </div>
                <img className="cursor-pointer" src={threeDotsIcon} alt="three icon dots" width="18"/>
            </div>
        </div>
    </div>
}


export default TaskCard
