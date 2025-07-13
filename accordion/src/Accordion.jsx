import React, { useState } from 'react';
import questions from './data';
import './Accordion.css'
function Accordion() {
  const [selected, setSelected] = useState(null);
  const [isMultiSelect, setMultiSelect] = useState(false);
  const [multiArr, setMultiArr] = useState([]);

  function handleSingleSelection(id) {
    if (id === selected) {
      setSelected(null);
      return;
    }
    setSelected(id);
  }

  function handleMultiClickButton() {
    setMultiSelect(prev => !prev);
    setMultiArr([]);
    setSelected(null);

  }


  function handleMultiSelection(id) {
  if (multiArr.includes(id)) {
    const updatedArr = multiArr.filter(item => item !== id);
    setMultiArr(updatedArr); 
  } else {
    setMultiArr([...multiArr, id]);  
  }
}


  return (
    <div className="accordion">
      <button className="multi-sel" onClick={handleMultiClickButton}>{isMultiSelect ? 'Disable Multiselection' : 'Enable Multiselection'}</button>
      <div className="accordion-data">
        {
          questions.map(item => (
            <div className='accordion-item' key={item.id}>
              <div className="question" onClick={isMultiSelect
                ? () => handleMultiSelection(item.id)
                : () => handleSingleSelection(item.id)}
              >
                <p>{item.question}</p>
                <span>
                  {isMultiSelect
                    ? (multiArr.includes(item.id) ? '-' : '+')
                    : (selected === item.id ? '-' : '+')}
                </span>
              </div>

              {(isMultiSelect
                ? multiArr.includes(item.id)
                : selected === item.id) && (
                  <div className='answers'>
                    <p>{item.answer}</p>
                  </div>
                )}

            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Accordion;
