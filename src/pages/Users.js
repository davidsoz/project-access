import TableHeader from "../components/UsersTable/TableHeader";
import TableFooter from "../components/UsersTable/TableFooter";
import TableContent from "../components/UsersTable/TableContent";

function Users({users}) {
    return (
        <div>
            <TableHeader />
            <TableContent />
            <TableFooter />
        </div>
    );
}

export default Users;