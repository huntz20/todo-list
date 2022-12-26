import React from "react";
import classNames from "classnames";

const Alert = ({type, children, show}) => {
    if (!show) return null;
    return <div className={classNames("px-4 py-3 rounded relative mb-4", [type])} role="alert">
        {children}
    </div>
}

export default Alert
