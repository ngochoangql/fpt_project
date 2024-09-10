import React from "react";
import "./Input.scss";
function Input({label,onChange,type,placeholder,imageUrl}) {
  return (
    <div>
      <div className="input">
        <input onChange={(e) => onChange(label,e.target.value)} className="input__field input__field--orange" type={type} placeholder={placeholder}/>
        <img className="input__image" src={imageUrl} />
      </div>
      <hr className="input__line"/>
    </div>
  );
}

export default Input;
