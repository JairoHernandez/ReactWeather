var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

    getInitialState: function() {
    //   return { location: 'Maimi', temp: 88 };
        return { isLoading: false };
    },
    handleSearch: function(location) {
        
        var that = this;
        this.setState({
            isLoading: true, 
            errorMessage: undefined // clear previous errors at page loading
        });

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({  // Use 'that' since 'this' is lost in this function.
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(e) {
            that.setState({
                isLoading: false,   
                errorMessage: e.message
            });
        });
        
        // console.log(location);
        // this.setState({
        //     location: location,
        //     temp: 23
        // });
    },
    render: function() {

        var {isLoading, temp, location, errorMessage} = this.state; // access those in handleSearch

        function renderMessage() {
            if (isLoading) { // browser loading
                return <h3 className="text-center">Fetching weather....</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;