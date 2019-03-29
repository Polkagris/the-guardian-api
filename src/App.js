import React, { Component } from "react";
import "./App.css";
import NewsCard from "./Components/NewsCard";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hello World",
      persons: [],
      articles: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });

    axios
      .get(
        `https://content.guardianapis.com/search?page-size=5&q=donald%20trump&api-key=eb629ccb-3584-4e4b-923f-6216f43ddac7&show-fields=thumbnail`
      ) //https://content.guardianapis.com/search?page-size=5&q=donald%20trump&api-key=eb629ccb-3584-4e4b-923f-6216f43ddac7&show-fields=thumbnail
      .then(res => {
        const articles = res.data.response.results;
        const summary = res.data.response.body;
        this.setState({ articles: articles });
        console.log(summary);
      });
  }
  handleSubmit = event => {
    event.preventDefault();

    axios
      .get(
        `https://content.guardianapis.com/search?page-size=5&q=${
          this.state.searchTerm
        }&api-key=eb629ccb-3584-4e4b-923f-6216f43ddac7&show-fields=thumbnail`
      ) //https://content.guardianapis.com/search?page-size=5&q=donald%20trump&api-key=eb629ccb-3584-4e4b-923f-6216f43ddac7&show-fields=thumbnail
      .then(res => {
        const articles = res.data.response.results;
        const summary = res.data.response.body;
        this.setState({ articles: articles });
        console.log(summary);
      });
  };

  setSearch(thing) {
    this.setState({ searchTerm: thing });
  }

  render() {
    return (
      <div className="App">
        <h1>The Guardian API</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={event => this.setSearch(event.target.value)}
            placeholder="search here"
          />
          <button type="submit">Search</button>
        </form>
        <NewsCard
          parentGift={this.state.value}
          personProp={this.state.persons}
          articleProp={this.state.articles}
        />
      </div>
    );
  }
}

export default App;
