import React, { Component } from "react";
import App from "../App";
import "./NewsCard.css";

class Card extends Component {
  render() {
    return (
      <div className="container">
        <h3>Most newsworthy name right now: </h3>
        <h3 data-fj="nameFirst" />
        <div className="row">
          <div class="col-md-12 col-sm-12">
            <ul class="newsCards">
              {this.props.articleProp.map(article => (
                <li class="card singleNewsCard">
                  <p>{article.webTitle}</p>
                  <img
                    class="newsCardImage"
                    src={article.fields.thumbnail}
                    alt="AAA"
                  />
                  <a href={article.webUrl} target="_blank">
                    Full article
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*<ul>
          {this.props.personProp.map(person => (
            <li>{person.name}</li>
          ))}
        </ul>*/}
      </div>
    );
  }
}

export default Card;
