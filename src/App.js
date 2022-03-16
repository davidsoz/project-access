import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import UsersContext from "./contexts/UsersContext";
import { buildUsersFetchUrl } from "./helpers";
import Users from "./pages/Users";

function App() {
  const usersContext = useContext(UsersContext);

  const isMounted = useRef(false);
  const deps = useMemo(() => ['search', 'page', 'perPage', 'sort', 'order'].map(el => usersContext.state[el]), [usersContext.state]);

  const fetchUsers = useCallback( () => {
    fetch(buildUsersFetchUrl('http://localhost:8000/users', usersContext.state))
    .then(res => {console.log(res.headers.get('X-Total-Count')); return res.json()})
    .then(data => {
      usersContext.dispatch({type: 'SET_USERS', payload: data});
    });
  });

  useEffect(() => {
    fetchUsers()
  },[])

  useEffect(() => {
    if(isMounted.current) {
      fetchUsers();
    } else {
      isMounted.current = true;
    }
  },deps);

  return (
    <div className="App pt-24 font-titillium">
		    <Users />
    </div>
  );
}

export default App;
