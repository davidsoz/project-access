import Input from "../UI/Input";

function TableHeader() {

    return (
        <div className="container flex justify-between items-center">
            <h1 className="text-4xl font-titillium font-bold">Project Access</h1>
            <Input type='search' placeholder='Type to filter the table...'/>
        </div>
    );
}

export default TableHeader;