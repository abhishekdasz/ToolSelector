import React, { useState } from 'react'
import jsondata from './formdata.json'

const FormInput = () => {
const [formContent, setFormContent] = useState(jsondata.human_review.form_data.form_content)
  const handleInputs = (index, e) => {
    const { value } = e.target;
    const updated = formContent.map((item, i) =>
      i === index ? { ...item, text_box_val: value } : item
    );
    setFormContent(updated);
  };

const handleChange = (index, e) => {
  const { type, value, checked } = e.target;
  setFormContent(formContent =>
    formContent.map((item, i) =>
      i === index
        ? type === "checkbox"
          ? { ...item, checked: checked ? "true" : "false" }
          : { ...item, text_box_val: value }
        : item
    )
  );
};


const handleSubmit = () => {
  console.log(formContent)
}
  return (
    <div className='formSection'>
      <div className="formContainer">
        {
          formContent.map((item, index) => {
            switch(item.form_type)
            {
              case "TEXT_BOX" :
                return (
                  <div key={index} className='textBox'>
                    <label className="form-label"> {item.lable_name} </label>
                    <input type="text" name={item.text_box_name} value={item.text_box_val} onChange={e => handleChange(index, e)}/>
                  </div>
                )
              case "TEXT_AREA" :
                return (
                  <div key={index} className='textArea'>
                    <label className="form-label"> {item.lable_name} </label>
                    <textarea name={item.text_box_name} value={item.text_box_val} onChange={e => handleInputs(index, e)} />
                  </div>
                )
              case "CHECK_BOX" :
                return (
                  <div key={index} className='checkbox'>
                    <label className="form-label"> {item.lable_name} </label>
                    <input type="checkbox" defaultChecked={item.checked === 'true'} onChange={e => handleChange(index, e)} />
                  </div>
                )
              default:
                return null;
            }
          })
        }
      </div>
      <div className='btns'>
        <button onClick={handleSubmit}> Submit </button>
      </div>
    </div>
  )
}

export default FormInput