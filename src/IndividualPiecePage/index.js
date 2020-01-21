import React, { Component } from "react";
import "./index.css";
import { individualPieceHandler } from "../redux/actionsCreators/individualPieceHandler";
import { connect } from "react-redux";
import stringToHtml from "../utils/stringToHtml";
import Loading from "./Loading";
class IndividualPiecePage extends Component {
  componentDidMount = () => {
    const {
      fetchIndividualPiece,
      match: {
        params: { id }
      },
      history
    } = this.props;
    fetchIndividualPiece(id, history);
  };

  render() {
    const { apiInProgress, individualPieceResponse } = this.props;
    return (
      <div className="piece-container">
        {apiInProgress ? (
          <Loading />
        ) : individualPieceResponse &&
          individualPieceResponse.individualPiece ? (
          <div className="piece-content">
            <div className="story-head">
              <h3>
                {individualPieceResponse.individualPiece.author.toUpperCase()}
              </h3>
              <div className="head-separator" />
              <h3>
                {individualPieceResponse.individualPiece.title.toUpperCase()}
              </h3>
            </div>
            <div className="piece-body">
              {stringToHtml(individualPieceResponse.individualPiece.body)}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ individualPiece }) => ({
  ...individualPiece
});

const mapDispatchToProps = dispatch => ({
  fetchIndividualPiece: (pieceId, history) =>
    dispatch(individualPieceHandler(pieceId, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualPiecePage);
