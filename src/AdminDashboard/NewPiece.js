import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewPiece extends Component {
  state = { hideLinks: true };

  showHideLinks = () => {
    const { hideLinks } = this.state;
    this.setState({ hideLinks: !hideLinks });
  };

  render() {
    const { hideLinks } = this.state;
    return (
      <div className="new__piece">
        <ul className={`${hideLinks ? "hide__links" : "display__links"}`}>
          <li>
            <Link to="/create">New story/poem</Link>
          </li>
          <li>
            <Link to="/createCollection">New book/issue</Link>
          </li>
        </ul>
        <p
          onClick={this.showHideLinks}
          className={`${hideLinks ? "display__links" : "hide__links"}`}
        >
          New piece
        </p>
      </div>
    );
  }
}

export default NewPiece;
