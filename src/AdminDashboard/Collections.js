import React, { useState, useEffect } from "react";
import "./index.css";
import { allCollectionsHandler } from "../redux/actionsCreators/allCollectionsHandler";
import { connect } from "react-redux";
import Loading from "../IndividualPiecePage/Loading";
import PageNumber from "../Common/PageNumber/PageNumber";
import NoContent from "../Common/NoContent";
import { mapCategoryToTitle } from "../utils/categoryToTitle";
import CollectionCard from "./CollectionCard";
import Grid from "@material-ui/core/Grid";

const Collections = ({
  fetchAllCollections,
  history,
  activeContent,
  allCollections,
}) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchAllCollections(page, activeContent, history);
  }, [activeContent, page, fetchAllCollections, history]);

  const loadMoreCollections = (direction) => {
    const nextPage = page + direction;
    fetchAllCollections(nextPage, activeContent, history);
    setPage(nextPage);
  };

  const { apiInProgress, allCollectionsResponse = {} } = allCollections;

  return (
    <div className="admin-content">
      <div>
        {apiInProgress ? (
          <Loading />
        ) : allCollectionsResponse?.data?.collections.length ? (
          <div>
            <h1 className="active-content__title">
              {mapCategoryToTitle(activeContent)}
            </h1>
            <div>
              <Grid container spacing={3}>
                {allCollectionsResponse.data.collections.map((collection) => (
                  <Grid item xs={12} md={4} lg={3} key={collection.id}>
                    <CollectionCard collection={collection} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        ) : (
          <NoContent />
        )}
      </div>
      {allCollectionsResponse?.data?.individualCollections ? (
        <PageNumber
          onClick={loadMoreCollections}
          currentPage={page}
          totalPages={allCollectionsResponse.data.totalPages}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ allCollections }) => ({ allCollections });

const mapDispatchToProps = (dispatch) => ({
  fetchAllCollections: (page, genre, history) =>
    dispatch(allCollectionsHandler(page, genre, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
