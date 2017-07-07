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
    debugger;
    return (
        <div>
            <Nav/>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    <h1>MAIN</h1>
                    {props.children}
                </div>
            </div>            
        </div>
    );
};

// If you forget this you will get 'Error: The root route must render a single element'
module.exports = Main; 