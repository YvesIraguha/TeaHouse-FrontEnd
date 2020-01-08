import React, { Component } from "react";
import "./index.css";
import StoryPoemCard from "./StoryPoemCard";
import PageNumber from "./PageNumber";
import { connect } from "react-redux";
import { allPiecesHandler } from "../redux/actionsCreators/allPiecesHandler";
import Loading from "./Loading";
import convertToHtml from "../utils/stringToHtml";

class AllPiecesPage extends Component {
  state = { page: 1 };
  componentDidMount = () => {
    const {
      fetchAllPieces,
      location: { pathname },
      history
    } = this.props;
    const { page } = this.state;
    const filter = pathname === "/poems" ? "Poem" : "Short story";
    fetchAllPieces(page, filter, history);
  };

  componentWillReceiveProps = nextProps => {
    const {
      location: { pathname },
      history
    } = nextProps;
    const { fetchAllPieces } = this.props;
    if (pathname !== this.props.location.pathname) {
      const filter = pathname === "/poems" ? "Poem" : "Short story";
      fetchAllPieces(1, filter, history);
    }
  };

  loadMoreArticles = direction => {
    const {
      fetchAllPieces,
      location: { pathname },
      history
    } = this.props;
    const { page } = this.state;
    const nextPage = page + direction;
    const filter = pathname === "/poems" ? "Poem" : "Short story";
    fetchAllPieces(nextPage, filter, history);
    this.setState({ page: nextPage });
  };

  render() {
    const {
      allPieces: { apiInProgress, allPiecesResponse }
    } = this.props;
    const { page } = this.state;
    return (
      <div className="story-poem-container">
        {apiInProgress ? (
          <Loading />
        ) : allPiecesResponse &&
          allPiecesResponse.data &&
          allPiecesResponse.data.individualPieces ? (
          <div className="stories-list row">
            {allPiecesResponse.data.individualPieces.map((piece, index) => (
              <StoryPoemCard piece={piece} key={piece.id} />
            ))}
          </div>
        ) : (
          ""
        )}
        {allPiecesResponse &&
        allPiecesResponse.data &&
        allPiecesResponse.data.totalPages ? (
          <PageNumber
            onClick={this.loadMoreArticles}
            currentPage={page}
            totalPages={allPiecesResponse.data.totalPages}
          />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = ({ allPieces }) => ({ allPieces });

const mapDispatchToProps = dispatch => ({
  fetchAllPieces: (page, genre, history) =>
    dispatch(allPiecesHandler(page, genre, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPiecesPage);
