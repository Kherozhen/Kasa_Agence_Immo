import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

function Collapse ({ title, children }) {
    
    const [isCollapsed, setIsCollapsed] = useState(true);

    const collapseOpen = () => {
        setIsCollapsed(!isCollapsed);
    };
    
    return (
        
        <div className="collapses">
            <h2>{title}</h2>
            <button onClick={collapseOpen}>
                {isCollapsed ? <FaAngleUp  /> : <FaAngleDown  />}
            </button>
            {!isCollapsed && <p>{children}</p>}
        </div>
           
    )

};

export default Collapse;