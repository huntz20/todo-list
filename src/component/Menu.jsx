import React from "react";
import classNames from "classnames";


/**
 *
 * @param children
 * @param show
 * @param {string} isNegative - if position offset from screen it will be translated
 * @return {JSX.Element|null}
 * @constructor
 */
const Menu = ({children, show, isNegative}) => {
    if (!show) return null;
    return  <div className={classNames("absolute bg-white rounded-lg flex flex-col p-4 w-[20vw] shadow-md", {'translate-x-[-100%]': isNegative})}>
        {children}
    </div>
}

export default Menu
