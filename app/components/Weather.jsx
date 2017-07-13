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
            errorMessage: undefined, // clear previous errors at page loading
            location: undefined,  // good to clear data to avoid data lingering
            temp: undefined // around which could cause unexpected results
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
    componentDidMount: function() {
        // http://localhost:3000/#/?location=Austin&_k=93bb42 we are pulling out query 'location'.
        var location = this.props.location.query.location;

        if  (location && location.length > 0) {
            this.handleSearch(location);
            // will remove query string in browser after weather has been successfully searched.
            // which will prevent loading the same temperature/city at browser refresh.
            window.location.hash = '#/'; 
        }
    },

    // Makes 'Get Weather' page display temp/city when you top right corner search.
    componentWillReceiveProps: function(newProps) {
        // http://localhost:3000/#/?location=Austin&_k=93bb42 we are pulling out query 'location'.
        var location = newProps.location.query.location;

        if  (location && location.length > 0) {
            this.handleSearch(location);
            // will remove query string in browser after weather has been successfully searched.
            // which will prevent loading the same temperature/city at browser refresh.
            window.location.hash = '#/'; 
        } 
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
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;