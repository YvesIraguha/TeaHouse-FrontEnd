import React, { Component } from "react";
import "./index.css";
import StoryPoemCard from "./StoryPoemCard";
import PageNumber from "../Common/PageNumber/PageNumber";
import { connect } from "react-redux";
import { allPiecesHandler } from "../redux/actionsCreators/allPiecesHandler";
import Loading from "../Common/Loading";
import NoContent from "../Common/NoContent";

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

  loadMorePieces = direction => {
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

  fetchOnePiece = pieceId => {
    const { history } = this.props;
    history.push(`/individual-pieces/${pieceId}`);
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
          allPiecesResponse.data.individualPieces.length ? (
          <div className="stories-list row">
            {allPiecesResponse.data.individualPieces.map((piece, index) => (
              <StoryPoemCard
                piece={piece}
                key={piece.id}
                onClick={this.fetchOnePiece}
              />
            ))}
          </div>
        ) : (
          <NoContent />
        )}
        {allPiecesResponse &&
        allPiecesResponse.data &&
        allPiecesResponse.data.totalPages ? (
          <PageNumber
            onClick={this.loadMorePieces}
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
