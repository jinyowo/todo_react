import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddLi extends Component {

    onClickAddBtn() {
        this.props.handleAddedData(this.inputBox.value);
        this.inputBox.value = '';
        this.inputBox.focus();
    }

    render() {
        return(
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="할 일을 입력해주세요" ref={(input) => {this.inputBox = input;}}/>
                <span className="input-group-btn">
		        	      <button className="btn btn-primary" type="button" onClick={this.onClickAddBtn.bind(this)}>등록</button>
		    	      </span>
            </div>
        );
    }
}

AddLi.propTypes = {
    handleAddedData: PropTypes.func.isRequired
};

export default AddLi;