import React, { Fragment } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination: React.FC<{ changePage: any, latestRates: Array<string>, pagination: any }> = ({ changePage, latestRates, pagination }) => {
    return (
        <Fragment>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={Math.ceil(
                    latestRates?.length / pagination?.limit
                )}
                onPageChange={changePage}
                containerClassName={"paginationButtons"}
                previousLinkClassName={"previousButton"}
                nextLinkClassName={"nextButton"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </Fragment>
    )
}

export default Pagination;