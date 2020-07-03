import React from 'react';
import "./style.css";

const SettingsMenu = (props) => {

    let options = [];
    if (props.modes) {
        options = props.modes.map((option, index)=>
            <option key={"option" + index} value={option}>{option}</option>
        )
    }

    const handleChangeMode = (event) => {
        const mode = event.target.value;
        props.setMode(mode);
    };

    return (
        <div className="col-12 settings-menu">
            <form>
                <div className="form-row align-items-center">
                    <div className="col my-1">
                        <select className="custom-select" onChange={handleChangeMode}>
                            <option value="" disabled selected hidden>Pick game mode</option>
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