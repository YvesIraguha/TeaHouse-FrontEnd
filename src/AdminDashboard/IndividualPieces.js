import React, { Component } from "react";
import "./index.css";
import { allPiecesHandler } from "../redux/actionsCreators/allPiecesHandler";
import { deleteIndividualPiece } from "../redux/actionsCreators/createDeleteStoryPoem";
import { connect } from "react-redux";
import Loading from "../IndividualPiecePage/Loading";
import PageNumber from "../Common/PageNumber/PageNumber";
import { renderResponseOrError } from "../utils/renderToast";
import NoContent from "../Common/NoContent";
import { mapCategoryToTitle } from "../utils/categoryToTitle";
import MediaCard from "./Card";
import Grid from "@material-ui/core/Grid";

class IndividualPieces extends Component {
  state = { page: 1, activeContent: "Short story" };
  componentDidMount = () => {
    const { fetchAllPieces, history } = this.props;
    const { page, activeContent } = this.state;
    fetchAllPieces(page, activeContent, history);
  };

  loadMorePieces = (direction) => {
    const { fetchAllPieces, history } = this.props;
    const { page, activeContent } = this.state;
    const nextPage = page + direction;
    fetchAllPieces(nextPage, activeContent, history);
    this.setState({ page: nextPage });
  };

  changeActiveContent = (nextActiveContent) => {
    const { fetchAllPieces, history } = this.props;
    const { page } = this.state;
    fetchAllPieces(page, nextActiveContent, history);
    this.setState({ activeContent: nextActiveContent });
  };

  onDeletePieceHandler = (pieceId) => {
    const { deleteStoryPoem, history } = this.props;
    deleteStoryPoem(pieceId, history);
  };

  componentWillReceiveProps = (nextProps) => {
    const { deletedPiece } = nextProps;
    if (
      deletedPiece.deletePieceResponse &&
      deletedPiece.deletePieceResponse !==
        this.props.deletedPiece.deletePieceResponse
    ) {
      renderResponseOrError(deletedPiece.deletePieceResponse);
    }
  };

  onEditPiece = (pieceId) => {
    const { history } = this.props;
    history.push(`/individual-pieces/edit/${pieceId}`);
  };

  render() {
    const { allPieces: { apiInProgress, allPiecesResponse } = {} } = this.props;
    const { activeContent, page } = this.state;
    return (
      <div className="admin-page row">
        <div className="admin-content">
          <div>
            {apiInProgress ? (
              <Loading />
            ) : allPiecesResponse &&
              allPiecesResponse.data &&
              allPiecesResponse.data.individualPieces.length ? (
              <div>
                <h1 className="active-content__title">
                  {mapCategoryToTitle(activeContent)}
                </h1>
                <div>
                  <Grid container spacing={3}>
                    {allPiecesResponse.data.individualPieces.map(
                      (piece, index) => (
                        <Grid item xs={12} md={4} lg={3}>
                          <MediaCard
                            createdAt={piece.createdAt}
                            title={piece.title}
                            body={piece.body}
                            id={piece.id}
                            onEditPiece={this.onEditPiece}
                            onDeletePiece={this.onDeletePieceHandler}
                            key={piece.id}
                          />
                        </Grid>
                      )
                    )}
                  </Grid>
                </div>
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
      </div>
    );
  }
}
const mapStateToProps = ({ allPieces, deletedPiece }) => ({
  allPieces,
  deletedPiece,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPieces: (page, genre, history) =>
    dispatch(allPiecesHandler(page, genre, history)),
  deleteStoryPoem: (pieceId, history) =>
    dispatch(deleteIndividualPiece(pieceId, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndividualPieces);
