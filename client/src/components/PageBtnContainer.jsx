import { useLocation, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useAllBookingsContext } from "../pages/AllBookings";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const PageBtnContainer = () => {
    const { data } = useAllBookingsContext();
    const { bookings, totalBookings, numOfPage, currentPage } = data;
    const pages = Array.from({ length: numOfPage }, (_, index) => {
        return index + 1;
    });

    const { search, pathname } = useLocation();
    const navigate = useNavigate();
    const pageChangeHandler = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set("page", pageNumber);
        navigate(`${pathname}?${searchParams.toString()}`);
    };

    const addPageButton = ({ pageNumber, activeClass }) => {
        return (
          <button
            className={`btn page-btn ${activeClass && 'active'}`}
            key={pageNumber}
            onClick={() => pageChangeHandler(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      };
    
      const renderPageButtons = () => {
        const pageButtons = [];
    
        // Add the first page button
        pageButtons.push(
          addPageButton({ pageNumber: 1, activeClass: currentPage === 1 })
        );
        // Add the dots before the current page if there are more than 3 pages
        if (currentPage > 3) {
          pageButtons.push(
            <span className='page-btn dots' key='dots-1'>
              ....
            </span>
          );
        }
        // one before current page
        if (currentPage !== 1 && currentPage !== 2) {
          pageButtons.push(
            addPageButton({ pageNumber: currentPage - 1, activeClass: false })
          );
        }
    
        // Add the current page button
        if (currentPage !== 1 && currentPage !== numOfPage) {
          pageButtons.push(
            addPageButton({ pageNumber: currentPage, activeClass: true })
          );
        }
    
        // one after current page
        if (currentPage !== numOfPage && currentPage !== numOfPage - 1) {
          pageButtons.push(
            addPageButton({ pageNumber: currentPage + 1, activeClass: false })
          );
        }
        if (currentPage < numOfPage - 2) {
          pageButtons.push(
            <span className=' page-btn dots' key='dots+1'>
              ....
            </span>
          );
        }
    
        // Add the last page button
        pageButtons.push(
          addPageButton({
            pageNumber: numOfPage,
            activeClass: currentPage === numOfPage,
          })
        );
    
        return pageButtons;
      };
    return (
        <Wrapper>
            <button
                className="btn prev-btn"
                onClick={() => {
                    let prevPage = currentPage - 1;
                    if (prevPage < 1) prevPage = numOfPage;
                    pageChangeHandler(prevPage);
                }}
            >
                <HiChevronDoubleLeft />
                prev
            </button>
            <div className='btn-container'>{renderPageButtons()}</div>
            <button
                className="btn next-btn"
                onClick={() => {
                    let prevPage = currentPage + 1;
                    if (prevPage > numOfPage) prevPage = 1;
                    pageChangeHandler(prevPage);
                }}
            >
                <HiChevronDoubleRight />
                next
            </button>
        </Wrapper>
    );
};
export default PageBtnContainer;
