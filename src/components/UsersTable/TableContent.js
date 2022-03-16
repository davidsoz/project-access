import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { DropDownIcon, PlusIcon } from "../UI/Icons";
import TableRow from "./TableRow";

const headings = [
    {
        title: 'USER',
        align: 'justify-start',
        sortable: true,
        width: '80',
        name: 'name'
    }, 
    {
        title: 'ROLE',
        align: 'justify-start',
        sortable: true,
        width: '20',
        name: 'role'
    }, 
    {
        title: 'STATUS',
        align: 'justify-center',
        sortable: true,
        width: '20',
        name: 'active'
    }, 
    {
        title: 'ACTIONS',
        align: 'justify-end',
        sortable: false,
        width: '20',
    }]

function TableContent() {
    const usersContext = useContext(UsersContext);

    function sortHandler(heading) {
        if(heading.sortable) {
            usersContext.dispatch({type: 'SORT', payload: heading.name})
        }
    }

    return (
        <div className="mt-20">
            <div className="border-y-1 border-opacity-10 py-5">
                <div className="relative basic-container flex justify-between">
                    <div className="absolute -top-14 -left-3 cursor-pointer">
                        <PlusIcon />
                    </div>
                    {headings.map((heading, i) => (
                        <div className={`
                                ${i === 0 ? 'ml-20 w-80' : 'w-20'}
                                flex items-center gap-1 text-base font-semibold ${heading.align} cursor-pointer`
                            } 
                            key={i}
                            onClick={() => sortHandler(heading)}
                        >
                            <h5>{heading.title}</h5>
                            {heading.sortable && <DropDownIcon /> }
                        </div>
                    ))}
                </div>
            </div>
            <div>
                {
                    usersContext.state.users.map(user => (
                        <TableRow key={user.id}
                            name={user.name} 
                            email={user.email} 
                            role={user.role}
                            active={user.active}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default TableContent;