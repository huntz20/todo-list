import React, {useState} from "react";
import threeDotsIcon from '../assets/three-dots.svg'
import classNames from "classnames";
import Menu from "./Menu.jsx";

const TaskCard = ({data, parentIndex}) => {
    const isDone = data.progress_percentage === 100
    const [showMenu, setShowMenu] = useState(false)
    const renderProgressIndicator = () => {
        if (isDone) return <div
            className="h-[20px] bg-teal-700 rounded-full w-[20px] bg-50 bg-center bg-no-repeat checked-background"></div>;
        return <div className="font-light text-sm text-gray-500">{data.progress_percentage}%</div>
    }

    return <div className="border-2 rounded  py-6 px-4 mb-4 bg-gray-100">
        <span className="font-medium text-sm leading-loose inline-block mb-3">{data.name}</span>
        <div className="py-4 border-dashed border-t-2 border-gray-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center w-full">
                    <div className="h-[20px] bg-gray-200 rounded-full w-[70%] mr-4">
                        <div style={{width: data.progress_percentage + '%'}}
                             className={classNames(`h-[20px]`, {
                                 'bg-cyan-600 rounded-l-full': !isDone,
                                 'bg-teal-700 rounded-full': isDone
                             })}></div>
                    </div>
                    {renderProgressIndicator()}
                </div>
                <div>
                    <button onClick={() => setShowMenu(!showMenu)} className="active:bg-gray-400 p-1 rounded"><img
                        src={threeDotsIcon} alt="three icon dots" width="18"/></button>
                    <Menu show={showMenu} isNegative={parentIndex === 3}>
                        <div className={classNames("text-black cursor-pointer hover:text-cyan-600 flex items-center mb-4", {hidden: parentIndex === 0})}>
                            <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>arrow_left_line</title>
                                <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Arrow" transform="translate(-96.000000, 0.000000)" fillRule="nonzero">
                                        <g id="arrow_left_line" transform="translate(96.000000, 0.000000)">
                                            <path
                                                d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                                id="MingCute" fill-rule="nonzero"></path>
                                            <path
                                                d="M3.63603,11.293 C3.24551,11.6835 3.24551,12.3167 3.63603,12.7072 L9.29289,18.3641 C9.68341,18.7546 10.3166,18.7546 10.7071,18.3641 C11.0976,17.9736 11.0976,17.3404 10.7071,16.9499 L6.75735,13.0001 L20,13.0001 C20.5523,13.0001 21,12.5524 21,12.0001 C21,11.4478 20.5523,11.0001 20,11.0001 L6.75735,11.0001 L10.7071,7.05037 C11.0976,6.65984 11.0976,6.02668 10.7071,5.63616 C10.3166,5.24563 9.68341,5.24563 9.29289,5.63616 L3.63603,11.293 Z"
                                                id="路径" fill="currentColor"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span className="inline-block ml-4">Move Left</span>
                        </div>
                        <div className={classNames("text-black cursor-pointer hover:text-cyan-600 flex items-center mb-4", {hidden: parentIndex === 3})}>
                            <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>arrow_right_line</title>
                                <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Arrow" transform="translate(-144.000000, 0.000000)" fillRule="nonzero">
                                        <g id="arrow_right_line" transform="translate(144.000000, 0.000000)">
                                            <path
                                                d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                                id="MingCute" fillRule="nonzero"></path>
                                            <path
                                                d="M14.7071,5.63616 L20.3639,11.293 C20.7545,11.6835 20.7545,12.3167 20.3639,12.7072 L14.7071,18.3641 C14.3166,18.7546 13.6834,18.7546 13.2929,18.3641 C12.9023,17.9736 12.9023,17.3404 13.2929,16.9499 L17.2426,13.0001 L4,13.0001 C3.44772,13.0001 3,12.5524 3,12.0001 C3,11.4478 3.44772,11.0001 4,11.0001 L17.2426,11.0001 L13.2929,7.05037 C12.9023,6.65984 12.9023,6.02668 13.2929,5.63616 C13.6834,5.24563 14.3166,5.24563 14.7071,5.63616 Z"
                                                id="路径" fill="currentColor"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span className="inline-block ml-4">Move Right</span>
                        </div>
                        <div className="text-black cursor-pointer hover:text-cyan-600 flex items-center mb-4">
                            <svg fill="currentColor" width="18px" height="18px" viewBox="0 0 1024 1024"
                                 t="1639990532110" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 p-id="12171" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path
                                    d="M199.04 672.64l193.984 112 224-387.968-193.92-112-224 388.032z m-23.872 60.16l32.896 148.288 144.896-45.696-177.792-102.592zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936-383.936 665.088h0.064l-248.448 78.336-56.448-254.336z m384 254.272v-64h448v64h-448z"
                                    p-id="12172"></path>
                            </svg>
                            <span className="inline-block ml-4">Edit</span>
                        </div>
                        <div className="text-black cursor-pointer hover:text-red-600 flex items-center mb-4">
                            <svg width="18px" height="18px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="m0 0h32v32h-32z"/>
                                    <path
                                        d="m19 0c3.3137085 0 6 2.6862915 6 6h6c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1l-3-.001v18.001c0 3.3137085-2.6862915 6-6 6h-12c-3.3137085 0-6-2.6862915-6-6v-18h-3c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1h6c0-3.3137085 2.6862915-6 6-6zm7 8h-20v18c0 2.1421954 1.68396847 3.8910789 3.80035966 3.9951047l.19964034.0048953h12c2.1421954 0 3.8910789-1.6839685 3.9951047-3.8003597l.0048953-.1996403zm-13 6c.5522847 0 1 .4477153 1 1v7c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-7c0-.5522847.4477153-1 1-1zm6 0c.5522847 0 1 .4477153 1 1v7c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-7c0-.5522847.4477153-1 1-1zm0-12h-6c-2.1421954 0-3.89107888 1.68396847-3.99510469 3.80035966l-.00489531.19964034h7 7c0-2.14219539-1.6839685-3.89107888-3.8003597-3.99510469z"
                                        fill="currentColor" fill-rule="nonzero"/>
                                </g>
                            </svg>
                            <span className="inline-block ml-4">Delete</span>
                        </div>
                    </Menu>
                </div>
            </div>
        </div>
    </div>
}


export default TaskCard
