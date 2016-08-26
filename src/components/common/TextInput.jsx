import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';


const TextInput = ({name, label, onChange, placeHolder, value, error, type}) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }
    return (
        <div className= {/*wrapperClass*/ ""}>
            {/*<label htmlFor={name}>{label}</label>*/}
            <div className="">
                <TextField 
                    type= {type ? type : "text"}
                    name= {name}
                    /*className="form-control"*/
                    floatingLabelText={label}
                    /*placeHolder={placeHolder}*/
                    errorText={error}
                    value={value}
                    onChange={onChange}/>
                {/*error && <div className="alert alert-danger">{error}</div>*/}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    placeholder : PropTypes.string,
    error : PropTypes.string,
    placeHolder : PropTypes.string
};

export default TextInput;