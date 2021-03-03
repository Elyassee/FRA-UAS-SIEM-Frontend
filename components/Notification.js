import React from 'react';

/**
 * App
 *
 * Simple react js fetch example
 */
class Notification extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('https://my-json-server.typicode.com/Elyassee/JsonData/Alert')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
          <div className = "wrapper">
          <div class="notification">
                <ul>
                    {items.reverse().map(item => (
                      <div  className="post">
              <h3>{item.timestamp}</h3>
              <br></br>
              <h4>{item.ip}</h4> 
              <br></br>
              <p>{item.numbofAlerts} Alerts </p>
              <p>type of Alert: {item.typeOfAlert}</p>
              <p>System Alert: {item.message}</p>
              </div>
                    ))}
                </ul>
            </div>
            </div>
        );

    }

}

export default Notification;