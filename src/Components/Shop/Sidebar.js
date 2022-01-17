
import React from 'react';

const Sidebar = () => {
    return (
        <div className="col-md-3">
            <div className="sidebar">
                <div className="search-form">
                    <form className="form-inline" action="">
                        <div className="input-group">
                            <input type="text" name="search" placeholder="Search..." />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;
