import { useEffect, useState } from "react";
import Avatar from "./components/UI/Avatar";
import CheckBox from "./components/UI/CheckBox";
import DropDown from "./components/UI/DropDown";
import { PlusIcon } from "./components/UI/Icons";
import Input from "./components/UI/Input";
import Users from "./pages/Users";

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
  },[])

  return (
    <div className="App pt-24">
		<Users />
    </div>
  );
}

export default App;
