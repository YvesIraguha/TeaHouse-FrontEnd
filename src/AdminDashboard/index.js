import React, { Component } from "react";
import "./index.css";
import PieceCard from "./PieceCard";
import { allPiecesHandler } from "../redux/actionsCreators/allPiecesHandler";
import { deleteIndividualPiece } from "../redux/actionsCreators/createStoryPoem";
import { connect } from "react-redux";
import Item from "./AdminNavBarItem";
import Loading from "../IndividualPiecePage/Loading";
import PageNumber from "../Common/PageNumber/PageNumber";
import NewPiece from "./NewPiece";
import { renderResponseOrError } from "../utils/renderToast";
class AdminDashboard extends Component {
  state = { page: 1, activeContent: "Short story" };
  componentDidMount = () => {
    const { fetchAllPieces, history } = this.props;
    const { page, activeContent } = this.state;
    fetchAllPieces(page, activeContent, history);
  };

  loadMorePieces = direction => {
    const { fetchAllPieces, history } = this.props;
    const { page, activeContent } = this.state;
    const nextPage = page + direction;
    fetchAllPieces(nextPage, activeContent, history);
    this.setState({ page: nextPage });
  };

  changeActiveContent = nextActiveContent => {
    const { fetchAllPieces, history } = this.props;
    const { page } = this.state;
    fetchAllPieces(page, nextActiveContent, history);
    this.setState({ activeContent: nextActiveContent });
  };

  onDeletePieceHandler = pieceId => {
    const { deleteStoryPoem, history } = this.props;
    deleteStoryPoem(pieceId, history);
  };

  componentWillReceiveProps = nextProps => {
    const { deletedPiece } = nextProps;
    if (
      deletedPiece.deletePieceResponse &&
      deletedPiece.deletePieceResponse !==
        this.props.deletedPiece.deletePieceResponse
    ) {
      renderResponseOrError(deletedPiece.deletePieceResponse);
    }
  };

  render() {
    const { allPieces: { apiInProgress, allPiecesResponse } = {} } = this.props;
    const { activeContent, page } = this.state;
    return (
      <div className="admin-page row">
        <div className="admin-navbar">
          <Item
            title="STORIES"
            onClick={this.changeActiveContent}
            type="Short story"
          />
          <Item title="POEMS" onClick={this.changeActiveContent} type="Poem" />
          <Item
            title="COLLECTIONS"
            onClick={this.changeActiveContent}
            type="Collection"
          />
        </div>
        <div className="admin-content">
          <div>
            {apiInProgress ? (
              <Loading />
            ) : allPiecesResponse &&
              allPiecesResponse.data &&
              allPiecesResponse.data.individualPieces ? (
              <div>
                <p className="title">{activeContent}</p>
                {allPiecesResponse.data.individualPieces.map((piece, index) => (
                  <PieceCard
                    title={piece.title}
                    body={piece.body}
                    id={piece.id}
                    onClick={this.onDeletePieceHandler}
                    key={piece.id}
                  />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          {allPiecesResponse &&
          allPiecesResponse.data &&
          allPiecesResponse.data.individualPieces ? (
            <PageNumber
              onClick={this.loadMorePieces}
              currentPage={page}
              totalPages={allPiecesResponse.data.totalPages}
            />
          ) : null}
        </div>
        <NewPiece />
      </div>
    );
  }
}
const mapStateToProps = ({ allPieces, deletedPiece }) => ({
  allPieces,
  deletedPiece
});

const mapDispatchToProps = dispatch => ({
  fetchAllPieces: (page, genre, history) =>
    dispatch(allPiecesHandler(page, genre, history)),
  deleteStoryPoem: (pieceId, history) =>
    dispatch(deleteIndividualPiece(pieceId, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
