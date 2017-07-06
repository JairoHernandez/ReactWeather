var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <Nav/>
//                 <h1>Main Component</h1>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <h1>Main Component</h1>
            {props.children}
        </div>
    );
};

// If you forget this you will get 'Error: The root route must render a single element'
module.exports = Main; 