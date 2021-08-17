import React, { Component } from "react";

// import the 'Axios' Module
import axios from "axios";

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          name: "Samsung 138 cm (55 inches) Crystal 4K Series 1",
          subtitle: "Samsung 138 cm",
          description: `Resolution : Crystal 4K UHD (3840 x 2160) resolution | Refresh Rate : 60 Hertz
          Connectivity: 3 HDMI ports to connect set top box, Blu-ray speakers or a gaming console | 1 USB ports to connect hard drives or other USB devices`,
          imgurl: "../../images/samsung.jpg",
        },
        {
          name: "Samsung 138 cm (55 inches) Crystal 4K Series 2",
          subtitle: "Samsung 138 cm",
          description: `Resolution : Crystal 4K UHD (3840 x 2160) resolution | Refresh Rate : 60 Hertz
            Connectivity: 3 HDMI ports to connect set top box, Blu-ray speakers or a gaming console | 1 USB ports to connect hard drives or other USB devices`,
          imgurl: "../../images/samsung.jpg",
        },
        {
          name: "Samsung 138 cm (55 inches) Crystal 4K Series 3",
          subtitle: "Samsung 138 cm",
          description: `Resolution : Crystal 4K UHD (3840 x 2160) resolution | Refresh Rate : 60 Hertz
            Connectivity: 3 HDMI ports to connect set top box, Blu-ray speakers or a gaming console | 1 USB ports to connect hard drives or other USB devices`,
          imgurl: "../../images/samsung.jpg",
        },
      ],
      users: [],
      date: new Date(),
    };

    //this.tick = this.tick.bind(this);
    this.handleComments = this.handleComments.bind(this);
  }
  componentDidMount() {
    // we are supposed to make API calls

    // Example for fetchAPI()
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // updatig the state
        this.setState({ ...this.state, users: data });
        console.log(this.state.users);
      });

    // Example for AXIOS
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log("Executed API using Axios");
      console.log(res);
    });

    this.timerID = setInterval(() => this.tick, 1000);
  }
  componentWillUnmount() {
    console.log(this.timerID);
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  handleComments() {
    console.log("Handle Comments");
    console.log(this.state);
  }
  render() {
    console.log(this.state.date);
    let allBlogs = this.state.blogs.map((item, index) => {
      return (
        <div className="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{item.subtitle}</h6>
              <p class="card-text">{item.description}</p>
              <a href="#" class="card-link">
                More
              </a>
              <a href="#" class="card-link" onClick={this.handleComments}>
                Comments
              </a>
            </div>
          </div>
        </div>
      );
    });
    return (
      <>
        <section className="container">
          <div className="row">
            <h1>Blogs</h1>
            {allBlogs}
          </div>
        </section>
      </>
    );
  }
}

export default Blogs;
