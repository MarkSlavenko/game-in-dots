import React from 'react';
import "./style.css";

const SettingsMenu = (props) => {

    return (
        <div className="col-12 settings-menu">
            <form>
                <div className="form-row align-items-center">
                    <div className="col my-1">
                        <select className="custom-select">
                            <option value="0" disabled selected>Pick game mode</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col my-1">
                        <input type="text" className="form-control" placeholder="Enter your name"/>
                    </div>
                    <div className="col my-1">
                        <button type="submit" className="btn">Play</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default SettingsMenu;