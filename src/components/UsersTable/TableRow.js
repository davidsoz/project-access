import Avatar from "../UI/Avatar";
import { AdminKeyIcon, RemoveIcon, SetupIcon, SwitchOff, SwitchOn } from "../UI/Icons";

function TableRow({user, onRemoveClick}) {
    return (
        <div className="flex basic-container items-center justify-between border-b py-8">
            <div className="flex items-center">
                <div className="w-20">
                    <Avatar />
                </div>
                <div className="w-80">
                    <div className="font-semibold">{user.name}</div>
                    <div className="opacity-60">{user.email}</div>
                </div>
            </div>
            <div className="w-20">
                <div className="flex items-center gap-3">
                    <div>{user.role}</div>
                    {user.role === 'Admin' ? <AdminKeyIcon /> : null}
                </div>
            </div>
            <div className="w-20 text-center">
                {user.active ? <SwitchOn className="inline-block cursor-pointer" /> : <SwitchOff className="inline-block cursor-pointer" />}
            </div>
            <div className="w-20 flex justify-end gap-3">
                {user.active ? <SetupIcon /> : null}
                <RemoveIcon className='cursor-pointer' onClick={() => onRemoveClick(user)} />
            </div>
        </div>
    );
}

export default TableRow;