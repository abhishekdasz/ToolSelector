import React, { useState, useEffect } from 'react';
import tabcontent from './fjson';
import './FormInput.css'

const FormInput = () => {
  const formContent = tabcontent[0]?.human_review?.form_data?.form_content || [];
  const actionBtns = tabcontent[0]?.human_review?.action_dtls?.action_list || [];

  const initialState = {};
  formContent.forEach(item => {
    if (item.form_type === 'TEXT_BOX' || item.form_type === 'TEXT_AREA') {
      const key = item.text_box_name;
      const val = item.text_box_val;
      initialState[key] = val;
    }
  });

  const [formData, setFormData] = useState(initialState);

  // ✅ Log initial tabcontent on first render
  useEffect(() => {
    console.log('Initial tabcontent:', JSON.stringify(tabcontent, null, 2));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ✅ Handle Proceed click
  const handleProceed = () => {
    const updatedContent = formContent.map(item => {
      if (item.form_type === 'TEXT_BOX' || item.form_type === 'TEXT_AREA') {
        return {
          ...item,
          text_box_val: formData[item.text_box_name] || ''
        };
      }
      return item;
    });

    const updatedTabContent = {
      ...tabcontent[0],
      human_review: {
        ...tabcontent[0].human_review,
        form_data: {
          ...tabcontent[0].human_review.form_data,
          form_content: updatedContent
        }
      }
    };

    console.log('Updated tabcontent after Proceed:', JSON.stringify([updatedTabContent], null, 2));
  };

  return (
    <div className='hitlTab'>
      <div className='formInputs'>
        {formContent.map((item, index) => {
          const key = `${item.form_type}_${index}`;
          switch (item.form_type) {
            case 'TEXT_BOX':
              return (
                <div className="mb-3" key={key}>
                  <label className="form-label">{item.lable_name}</label>
                  <input
                    type="text"
                    className="form-control"
                    name={item.text_box_name}
                    value={formData[item.text_box_name] || ''}
                    onChange={handleInputChange}
                  />
                </div>
              );

            case 'CHECK_BOX':
              return (
                <div className="form-check mb-3" key={key}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked={item.checked === 'true'}
                    id={`check_${index}`}
                  />
                  <label className="form-check-label" htmlFor={`check_${index}`}>
                    {item.lable_name}
                  </label>
                </div>
              );

            case 'TEXT_AREA':
              return (
                <div className="mb-3" key={key}>
                  <label className="form-label">{item.lable_name}</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name={item.text_box_name}
                    value={formData[item.text_box_name] || ''}
                    onChange={handleInputChange}
                  />
                </div>
              );

            default:
              return null;
          }
        })}
      </div>

      <div className='btns'>
        {actionBtns.map((item, index) => {
          switch (item) {
            case 'Reject':
              return (
                <button className='cancelBtn' key={index}>
                  Regenerate
                </button>
              );

            case 'Approve':
              return (
                <button className='btn-success' key={index} onClick={handleProceed}>
                  Proceed
                </button>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default FormInput;
