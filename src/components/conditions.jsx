import cocktails from './data.js';

import React, {useState} from 'react'; 

function Checkbox(props) { 
  
  const [checked, setChecked] = useState(false); 
  const checkedText = props.onText; 
  const uncheckedText = props.offText; 
  const togglePreference = props.togglePreference; 
  const cocktails = props.cocktails; 
  
  const handleChange = () => { 
    
    setChecked(!checked); togglePreference(cocktails); 
    
  }; 
  
  return ( 
    
    <div>
    
      
      
      <p>
        {checked ? checkedText : uncheckedText}
      </p> 
      
    </div>
      
  ); 

}; 


export {Checkbox};