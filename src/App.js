import {useContext, useEffect } from "react";
import { fetchUsers } from "./api";
import UsersContext from "./contexts/UsersContext";
import Users from "./pages/Users";

function App() {
  const {
    state: {
      page, 
      perPage, 
      order, 
      sort, 
      search
    },
    dispatch
  } = useContext(UsersContext);

  useEffect(() => {
    fetchUsers({
      _page: page,
      _limit: perPage,
      _order: order,
      _sort: sort,
      q: search,
    })
    .then(res => dispatch({type: 'SET_USERS', payload: res}))
  }, [dispatch, page, perPage, order, sort, search])

  return (
    <div className="App pt-24 font-titillium">
		    <Users />
    </div>
  );
}

export default App;
