import React from "react";
import crossIcon from "../assets/cross.svg"
import classNames from "classnames";

const Modal = ({title = 'Placeholder', show = false, children, onClose}) => {
    return <>
        <div
            className={classNames("fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-modal h-full bg-shadow", {hidden: !show})}>
            <div
                className="absolute translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%] w-[80%] md:w-[60%] lg:w-[30%] h-[auto] bg-white rounded-lg shadow">
                <div className="relative ">
                    <div className="flex items-start justify-between p-4 rounded-t">
                        <h3 className="text-xl font-semibold text-black-400">
                            {title}
                        </h3>
                        <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                onClick={onClose}>
                            <img src={crossIcon} alt="cross-icon" width="24"/>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="px-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default Modal
