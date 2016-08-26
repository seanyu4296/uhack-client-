import React, {PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
    return (
        <div className="form-group">
            {/*<label htmlFor={name}>{label}</label>*/}
            <div className="field">
                <SelectField     
                    name={name} 
                    value={value}
                    onChange={onChange}
                    hintText={defaultOption}
                    autoWidth={true}
                    >
                    {/*<MenuItem value={""} primaryText={""}/>  */}
                    {options.map((option)=> {
                        return <MenuItem key= {option.value} value={option.value} primaryText= {option.text} />;
                    })}
                </SelectField>
                {error && <div className="alert alert-danger" >{error}</div>}            
            </div>
        </div>
    );
};


SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    error : PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;