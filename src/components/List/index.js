import React from 'react';
import './style.css';

const List = ({ list }) => {
  let listForShow;

  if (list) {
    listForShow = list.map((value) => {
      const [time, date] = value.date.split(';');
      return (
        <li className="list-li" key={value.id}>
          <b>{value.winner}</b>
          <span className="text-right ">
            {date} at {time}
          </span>
        </li>
      );
    });
  } else {
    listForShow = <h4>List is empty!</h4>;
  }

  return (
    <ul className="list-ul">
      {listForShow}
    </ul>
  );
};

export default List;
