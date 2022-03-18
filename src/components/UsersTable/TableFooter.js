import React, { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { LeftArrowIcon, RightArrowIcon } from "../UI/Icons";

function TableFooter() {

    const {state: {
        page,
        perPage
    },
    lastPage, dispatch} = useContext(UsersContext);
    const recordsOnPage = [5, 10, 15, 20];

    function changeRecordHandler(record) {
        dispatch({type: 'CHANGE_PER_PAGE', payload: record})
    }

    return (
        <div className="basic-container flex items-center justify-between py-9">
            <div className="flex gap-4">
                <label>Records on page</label>
                <select value={perPage} onChange={e => changeRecordHandler(e.target.value)} name="recordsOnPage" className="cursor-pointer">
                    {recordsOnPage.map((record, i) => <option key={i} value={record}>{record}</option>)}
                </select>
            </div>
            <div>
                <div className="flex gap-3 items-center">
                    <LeftArrowIcon disabled={page === 1} onClick={() => dispatch({type: 'PREV_PAGE'})} />
                    {
                        [
                            page === lastPage ? page - 1 : page,
                            page === lastPage ? page : page + 1 
                        ].map((p, i) => (
                            <React.Fragment key={i}>
                            {p !== 0 && <div 
                                
                                onClick={() => dispatch({type: 'CHANGE_PAGE', payload: p})}
                                className={`rounded-full cursor-pointer px-3 py-1 font-semibold ${p === page ? 'border-1 text-blue-600 bg-slate-100' : ''}`}
                            >
                                {p}
                            </div>}
                            </React.Fragment>
                        ))
                    }
                    <RightArrowIcon disabled={page === lastPage} onClick={() => dispatch({type: 'NEXT_PAGE'})} />
                </div>
            </div>
        </div>
    );
}

export default TableFooter;