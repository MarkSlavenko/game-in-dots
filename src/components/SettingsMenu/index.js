import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const SettingsMenu = (props) => {
  const [name, changeName] = useState();
  const [gameMode, changeMode] = useState();
  const [playName, changePlayName] = useState('PLAY');
  const didMountRef = useRef(false);

  let options = [];
  const { modes } = props;
  if (modes) {
    options = modes.map((option) => (
      <option key={option} value={option}>
        {option.split('Mode')}
      </option>
    ));
  }

  const handleChangeMode = (event) => {
    changeMode(event.target.value);
  };

  useEffect(() => { //  callback to set gameMode and setMessage after selecting the mode
    if (didMountRef.current) {
      props.setMode(gameMode);
    } else {
      didMountRef.current = true;
    }
  }, [gameMode]);

  const handleChangeName = (event) => {
    changeName(event.target.value);
  };

  const formOnSubmit = (event) => {
    changePlayName('PLAY AGAIN');
    event.preventDefault();
    props.startGame(name);
  };

  return (
    <div className="col-12 settings-menu">
      <form onSubmit={formOnSubmit}>
        <div className="form-row align-items-center">
          <div className="col my-1">
            <select className="custom-select" value={gameMode || ''} onChange={handleChangeMode} required>
              <option value="" hidden>Pick game mode</option>
              {options}
            </select>
          </div>
          <div className="col my-1">
            <input
              onChange={handleChangeName}
              value={name || ''}
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="col my-1">
            <button type="submit" className="btn">{playName}</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingsMenu;
