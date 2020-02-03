import React, { useState, useEffect } from "react";
import "./index.css";
import PageNumber from "../Common/PageNumber/PageNumber";
import { connect } from "react-redux";
import { allCollectionsHandler } from "../redux/actionsCreators/allCollectionsHandler";
import Book from "./Book";
import Loading from "../Common/Loading";

const filterPathname = (pathname, history) => {
  if (pathname === "/book-series") {
    return "Book series";
  } else if (pathname === "/issues") {
    return "Images";
  } else {
    return "/not-found";
  }
};
const AllCollectionsPage = props => {
  const [page, setPage] = useState(1);
  const {
    fetchAllCollections,
    location: { pathname },
    history,
    allCollections: { apiInProgress, allCollectionsResponse }
  } = props;

  const filter = filterPathname(pathname);
  useEffect(() => {
    fetchAllCollections(page, filter, history);
  }, [fetchAllCollections, filter, history, page]);

  const loadMoreCollections = direction => {
    const nextPage = page + direction;
    fetchAllCollections(nextPage, filter, history);
    setPage(page + direction);
  };

  return (
    <div className="story-poem-container">
      {apiInProgress ? (
        <Loading />
      ) : allCollectionsResponse &&
        allCollectionsResponse.data &&
        allCollectionsResponse.data.collections ? (
        <div>
          <div className="collections-list row">
            {allCollectionsResponse.data.collections.map(collection => (
              <div key={collection.id}>
                <Book collection={collection} />
              </div>
            ))}
          </div>
          <PageNumber
            onClick={loadMoreCollections}
            currentPage={page}
            totalPages={allCollectionsResponse.data.totalPages}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = ({ allCollections }) => ({ allCollections });

const mapDispatchToProps = dispatch => ({
  fetchAllCollections: (page, genre, history) =>
    dispatch(allCollectionsHandler(page, genre, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCollectionsPage);
