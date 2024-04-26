import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

function Collapse ({ title, children}) {
    
    const [isCollapsed, setIsCollapsed] = useState(true);

    const collapseOpen = () => {
        setIsCollapsed(!isCollapsed);
    };
    

    return (
        <div>
            <button className="buttonCollapse" onClick={collapseOpen}>
                {title} {isCollapsed ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {!isCollapsed && <div>{children}</div>}
        </div>
    )

};

export default Collapse;