var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title"> About</h1>
            <p className="page-title">
               This is a weather application build on React. 
               I have built this for the Complete React Web App Developer Course.
            </p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <li>
                    <a href="https://github.com/JairoHernandez/ReactWeather" target="_blank">React Github Repo</a>
                    - This was the JavaScript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> 
                    - Used Open Weather to search for weather data by city name.

                </li>
            </ul>
        </div>
    );
};

module.exports = About;