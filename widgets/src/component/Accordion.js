import React, { useState } from 'react';

export default ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const onTitleClick = (index) => {
    if (activeIndex !== index) {
      setOpen(true);
    } else {
      setOpen(!open)
    }

    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {
    const active = open && activeIndex === index ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  });

  return <div className='ui styled accordion'>{renderedItems}</div>
};
