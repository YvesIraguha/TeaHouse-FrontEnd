import React, { useState, useEffect } from "react";
import "./index.css";
import { allPiecesHandler } from "../redux/actionsCreators/allPiecesHandler";
import { deleteIndividualPiece } from "../redux/actionsCreators/createDeleteStoryPoem";
import { connect } from "react-redux";
import Loading from "../IndividualPiecePage/Loading";
import PageNumber from "../Common/PageNumber/PageNumber";
import { renderResponseOrError } from "../utils/renderToast";
import NoContent from "../Common/NoContent";
import { mapCategoryToTitle } from "../utils/categoryToTitle";
import MediaCard from "./PieceCard";
import Grid from "@material-ui/core/Grid";

const IndividualPieces = ({
  fetchAllPieces,
  history,
  activeContent,
  deleteStoryPoem,
  deletedPiece,
  allPieces,
}) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchAllPieces(page, activeContent, history);
  }, [activeContent, page, fetchAllPieces, history]);

  const loadMorePieces = (direction) => {
    const nextPage = page + direction;
    fetchAllPieces(nextPage, activeContent, history);
    setPage(nextPage);
  };

  const onDeletePieceHandler = (pieceId) => {
    deleteStoryPoem(pieceId, history);
  };

  useEffect(() => {
    if (
      deletedPiece?.deletePieceResponse !== deletedPiece.deletePieceResponse
    ) {
      renderResponseOrError(deletedPiece.deletePieceResponse);
    }
  }, [deletedPiece]);

  const onEditPiece = (pieceId) => {
    history.push(`/individual-pieces/edit/${pieceId}`);
  };

  const { apiInProgress, allPiecesResponse = {} } = allPieces;
  return (
    <div>
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
                {allPiecesResponse.data.individualPieces.map((piece, index) => (
                  <Grid item xs={12} md={4} lg={4}>
                    <MediaCard
                      createdAt={piece.createdAt}
                      title={piece.title}
                      body={piece.body}
                      id={piece.id}
                      onEditPiece={onEditPiece}
                      onDeletePiece={onDeletePieceHandler}
                      key={piece.id}
                    />
                  </Grid>
                ))}
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
          onClick={loadMorePieces}
          currentPage={page}
          totalPages={allPiecesResponse.data.totalPages}
        />
      ) : null}
    </div>
  );
};
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
