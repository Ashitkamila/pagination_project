import React, { useState } from "react";

import "./Pagination.css";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
    loading,
    lastPostIndex
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    const nextPageHandle = (e)=>{
       setCurrentPage(currentPage+1)
    }

    const previousPageHandle = (e)=>{
        setCurrentPage(currentPage-1)
        
    }
    return (
        <div className='pagination'>
            {currentPage===1? loading:<button className="last_btn" onClick={(e)=>previousPageHandle(e)}>Previous</button>}
            
            {pages.map((page, index) => {
                return (
                    <React.Fragment>
                         <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </button>
                
                    </React.Fragment>
                   
                );
                
            })}
            {currentPage === 13 ? loading :  <button className="last_btn" onClick={(e)=>nextPageHandle(e)}>Next</button>}
           
        </div>
    );
};

export default Pagination;
