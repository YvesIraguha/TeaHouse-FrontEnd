import React, { Component } from "react";
import "./index.css";
import PieceCard from "./PieceCard";
import { allPiecesHandler } from "../redux/actionsCreators/allPiecesHandler";
import { deleteIndividualPiece } from "../redux/actionsCreators/createDeleteStoryPoem";
import { connect } from "react-redux";
import Item from "./AdminNavBarItem";
import Loading from "../IndividualPiecePage/Loading";
import PageNumber from "../Common/PageNumber/PageNumber";
import NewPiece from "./NewPiece";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { renderResponseOrError } from "../utils/renderToast";
import NoContent from "../Common/NoContent";
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

  onEditPiece = pieceId => {
    const { history } = this.props;
    history.push(`/individual-pieces/edit/${pieceId}`);
  };
  logOut = () => {
    const { history } = this.props;
    localStorage.removeItem("token");
    history.push("/");
  };
  render() {
    const { allPieces: { apiInProgress, allPiecesResponse } = {} } = this.props;
    const { activeContent, page } = this.state;
    return (
      <div className="admin-page row">
        <div className="admin-navbar column">
          <div className="admin-navbar__title row">
            <h1>TEAHOUSE</h1>
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              color="rgba(186, 160, 160,0.8)"
            />
          </div>
          <div>
            <Item
              title="STORIES"
              onClick={this.changeActiveContent}
              type="Short story"
            />
            <Item
              title="POEMS"
              onClick={this.changeActiveContent}
              type="Poem"
            />
            <Item
              title="BOOK SERIES"
              onClick={this.changeActiveContent}
              type="Book series"
            />
            <Item
              title="ISSUES"
              onClick={this.changeActiveContent}
              type="Issues"
            />
          </div>
          <div className="logout-btn" onClick={this.logOut}>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              size="lg"
              color="rgba(0,0,0,0.25)"
            />
            <span className="item__title">LOGOUT</span>
          </div>
        </div>
        <div className="admin-content">
          <div>
            {apiInProgress ? (
              <Loading />
            ) : allPiecesResponse &&
              allPiecesResponse.data &&
              allPiecesResponse.data.individualPieces.length ? (
              <div>
                <h1 className="active-content__title">{activeContent}</h1>
                {allPiecesResponse.data.individualPieces.map((piece, index) => (
                  <PieceCard
                    createdAt={piece.createdAt}
                    title={piece.title}
                    body={piece.body}
                    id={piece.id}
                    onEditPiece={this.onEditPiece}
                    onDeletePiece={this.onDeletePieceHandler}
                    key={piece.id}
                  />
                ))}
              </div>
            ) : (
              <NoContent />
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
