import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/open")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res });
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <>
        {this.state.data.map((data) => (
          <div className="page">
            <div className="card">
              <img className="images" src={data.imgsrc} alt="img" />
              <h1>{data.content}</h1>
              <h2>{data.para}</h2>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default App;
