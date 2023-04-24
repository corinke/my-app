
import React, { useState } from "react";
import PropTypes from 'prop-types';
import cocktails from './data.js'

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