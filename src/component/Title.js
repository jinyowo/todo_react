import React, {Component} from 'react';
import PropTypes from 'prop-types';
// class Title extends Component {
//     render() {
//         return (
//             <div className="page-header">
//                 <h1>{this.props.text}</h1>
//             </div>
//         );
//     }
// }
/**
 * 순수 함수 형태로 리팩토링
 * @param text
 * @constructor
 */
const Title = ({text}) => (
    <div className="page-header">
        <h1>{text}</h1>
    </div>
);

Title.propTypes = {
    text: PropTypes.string
};

export default Title;