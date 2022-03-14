import { DropDownIcon, PlusIcon } from "../UI/Icons";

const headings = [
    {
        title: 'USER',
        align: 'left',
        sortable: true,
        width: '320px'
    }, 
    {
        title: 'ROLE',
        align: 'center',
        sortable: true,
        width: '100px'
    }, 
    {
        title: 'STATUS',
        align: 'center',
        sortable: true,
        width: '100px'
    }, 
    {
        title: 'ACTIONS',
        align: 'right',
        sortable: false,
        width: '100px'
    }]

function TableContent() {

    return (
        <div className="mt-20">
            <div className="border-y-1 border-opacity-10 py-5">
                <div className="relative basic-container flex justify-between">
                    <div className="absolute -top-14 -left-3 cursor-pointer">
                        <PlusIcon />
                    </div>
                    {headings.map((heading, i) => (
                        <div className={`
                                ${i === 0 ? 'ml-20' : ''}
                                flex items-center gap-1 text-base font-semibold 
                                w-${heading.width} text-${heading.align} cursor-pointer`
                            } 
                            key={i}
                        >
                            <h5>{heading.title}</h5>
                            {heading.sortable && <DropDownIcon /> }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TableContent;