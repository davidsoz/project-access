import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import Input from "../UI/Input";

function TableHeader() {
    const usersContext = useContext(UsersContext);

    return (
        <div className="basic-container flex justify-between items-center">
            <h1 className="text-4xl font-bold">Project Access</h1>
            <Input 
                onChange={e => usersContext.dispatch({type: 'SEARCH', payload: e.target.value})} 
                type='search' 
                placeholder='Type to filter the table...'/>
        </div>
    );
}

export default TableHeader;