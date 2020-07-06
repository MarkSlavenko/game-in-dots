import React from 'react';
import './style.css';

const List = (props) => {
  let list = [];
  let listForShow;

  if (props.list) {
    list = props.list;
      listForShow = list.map((value) => {
        const [time, date] = value.date.split(';');
        return (<li className="list-li" key={value.id}>
          <b>{value.winner}</b>
          <span className="text-right ">
            {date} at {time}
          </span>
        </li>);
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
