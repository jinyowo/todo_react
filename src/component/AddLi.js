import React from 'react';
import PropTypes from 'prop-types';

const AddLi =({onCreate}) => {

    return(
        <div className="input-group input-group-lg">
            <input type="text" className="form-control" placeholder="할 일을 입력해주세요" value={text}/>
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={() => onCreate({text})}>등록</button>
            </span>
        </div>
    );
}

AddLi.propTypes = {
    onCreate: PropTypes.func
};

AddLi.defaultProps = {
    onCreate: () => console.warn('onCreate not defined')
};

export default AddLi;