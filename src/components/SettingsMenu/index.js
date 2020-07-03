import React from 'react';
import "./style.css";

const SettingsMenu = (props) => {

    let options = [];
    if (props.modes) {
        options = props.modes.map(option =>
            <option value="option">{option}</option>
        )
    }

    return (
        <div className="col-12 settings-menu">
            <form>
                <div className="form-row align-items-center">
                    <div className="col my-1">
                        <select className="custom-select">
                            {options}
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