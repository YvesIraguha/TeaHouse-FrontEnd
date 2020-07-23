import React, { Component } from "react";
import "./index.css";
import PieceCard from "./PieceCard";
import { allCollectionsHandler } from "../redux/actionsCreators/allCollectionsHandler";
// import { deleteIndividualPiece } from "../redux/actionsCreators/createDeleteStoryPoem";
import { connect } from "react-redux";
import Loading from "../IndividualPiecePage/Loading";
import PageNumber from "../Common/PageNumber/PageNumber";
import NewPiece from "./NewPiece";
import { renderResponseOrError } from "../utils/renderToast";
import NoContent from "../Common/NoContent";
import { mapCategoryToTitle } from "../utils/categoryToTitle";
import MediaCard from "./Card";
import Grid from "@material-ui/core/Grid";

class Collections extends Component {
  state = { page: 1, activeContent: "Short story" };
  componentDidMount = () => {
    const { fetchAllCollections, history } = this.props;
    const { page, activeContent } = this.state;
    fetchAllCollections(page, activeContent, history);
  };

  loadMoreCollections = (direction) => {
    const { fetchAllCollections, history } = this.props;
    const { page, activeContent } = this.state;
    const nextPage = page + direction;
    fetchAllCollections(nextPage, activeContent, history);
    this.setState({ page: nextPage });
  };

  changeActiveContent = (nextActiveContent) => {
    const { fetchAllCollections, history } = this.props;
    const { page } = this.state;
    fetchAllCollections(page, nextActiveContent, history);
    this.setState({ activeContent: nextActiveContent });
  };

  render() {
    const {
      allCollections: { apiInProgress, allCollectionsResponse } = {},
    } = this.props;
    const { page } = this.state;
    return (
      <div className="admin-page row">
        <div className="admin-content">
          <div>
            {apiInProgress ? (
              <Loading />
            ) : allCollectionsResponse &&
              allCollectionsResponse.data &&
              allCollectionsResponse.data.collections.length ? (
              <div>
                <div className="collections-list row">
                  {allCollectionsResponse.data.collections.map((collection) => (
                    <div key={collection.id}>
                      {/* <Book collection={collection} /> */}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <NoContent />
            )}
          </div>
          {allCollectionsResponse &&
          allCollectionsResponse.data &&
          allCollectionsResponse.data.individualCollections ? (
            <PageNumber
              onClick={this.loadMoreCollections}
              currentPage={page}
              totalPages={allCollectionsResponse.data.totalPages}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ allCollections }) => ({ allCollections });

const mapDispatchToProps = (dispatch) => ({
  fetchAllCollections: (page, genre, history) =>
    dispatch(allCollectionsHandler(page, genre, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
