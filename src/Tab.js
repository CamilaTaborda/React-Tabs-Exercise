import React from 'react';

const Tab = ({ title, index, changeCurrentTab, active }) => (
  <>
    <button type="button" className={`btn ${active ? 'btn-dark' : 'btn-outline-dark'}`}
      onClick={() => changeCurrentTab(index)}
      style={{ borderRadius: '0.5rem 0.5rem 0 0' }}>
      {title}
    </button>
  </>
);

export default Tab;
//teste