var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
        <div>
            
            <h1 className="text-center">Author:</h1>
            <p>
               This is a weather application build on React. I have built this for the Complete React Web App Developer Course.
            </p>
            <a href="https://github.com/JairoHernandez/ReactWeather" target="_blank">github repo</a>
        </div>
    );
};

module.exports = About;