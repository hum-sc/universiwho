import React, { useState } from 'react'
import styled from 'styled-components'
import MailIcon from '../icons/mail';
import PasswordIcon from '../icons/password';
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  position: relative;
  margin-top: 30px;
  background-color: ${props=>props.background};
  border-radius: 4px;
  width: 100%;
  heigth:50px;
  transition: all 0.1s ease;
  

  & > input {
    background-color:transparent;
    color:${props=>props.primary};
    border: none;
    border-radius: 0.25rem;

    background-color: transparent;
    outline: none;

    padding: 12px 3px 12px 0px;
    padding-left:${props=> props.type=="text" ? "15px": "34px"};
   

    font-size: 16px;

    transition: all 0.2s ease;
    border-bottom:2px solid ${props=>props.secondary};

    z-index: 500;
    ${props =>
        props.focused &&
        `
        border-bottom:2px solid ${props.primary};
      `}
  
  }
  & > label {
    color: ${props=>props.secondary};
    position: absolute;
    top: 15px;
    left:${props=> props.type=="text" ? "15px": "44px"};;
    transition: all 0.2s ease;
    z-index: 500;

    ${props =>
      props.focused &&
      `
      font-size: 13px;
      transform:${props.type=="text" ? "translateY(-23px) translateX(-4px)" :"translateY(-23px) translateX(-34px)"};
      z-index: 501;
      color: ${props.primary};
      background: ${props.background};
      border-radius:4px;
      padding: 0 8px;
    `}

  }
  & >  div {
    position: absolute;
    top: 10px;
    left: 5px;
    transition: all 0.2s ease;
    z-index: 500;
    }
    
`;
/**
 * A Plaid-inspired custom input component
 *
 * @param {string} value - the value of the controlled input
 * @param {string} type - the type of input we'll deal with
 * @param {string} label - the label used to designate info on how to fill out the input
 * @param {function} onChange - function called when the input value changes
 * @param {function} onFocus - function called when the input is focused
 * @param {function} onBlur - function called when the input loses focus
 * @param {function} setRef - function used to add this input as a ref for a parent component
 */

function Input ({
    value,
    type,
    label,
    onChange,
    onFocus,
    onBlur,
    setRef,
    ...props
  }){
      const [focused, setFocused] = useState(false);
      const handleOnFocus = ()=>{
          setFocused(true);
          onFocus();
      }
      const handleOnBlur = () => {
        setFocused(false);
        onBlur();
    };
    const renderLabel = () => label && <label>{label}</label>;

    const isFocused = focused || String(value).length || type === "date";

      return(<>
        <InputContainer
        background={props.background} 
        primary={props.primary} 
        secondary={props.secondary} 
        error={props.error}
        type={type}
        focused={isFocused}
        >
        { type==='email' && <MailIcon class="inputImage"></MailIcon>} 
        {type ==="password" && <PasswordIcon class="inputImage"/>}
        {renderLabel()}
        <input
            value={value}
            type={type}
            onChange={e => onChange(e.target.value)}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            ref={ref => setRef(ref)}
            {...props}
        >
        </input>
        </InputContainer>
      </>);
}
/*
            background={props.background} 
            primary={props.primary} 
            secondary={props.secondary} 
            error={props.error}
            focused={isFocused}
        >
            <MailIcon className></MailIcon>
        {renderLabel()}
        <input
            value={value}
            type={type}
            onChange={e => onChange(e.target.value)}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            ref={ref => setRef(ref)}
            {...props}
        />
        </InputContainer>
        </>
    );
};*/
Input.defaultProps = {
    type: "text",
    label: "",
    onChange: text => {
      console.error(`Missing onChange prop: ${text}`);
    },
    onFocus: () => {},
    onBlur: () => {},
    setRef: () => {}
  };

export default Input;