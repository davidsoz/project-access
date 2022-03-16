import Avatar from "../UI/Avatar";
import { AdminKeyIcon, RemoveIcon, SetupIcon, SwitchOff, SwitchOn } from "../UI/Icons";

function TableRow({name, email, role, active}) {
    return (
        <div className="flex basic-container items-center justify-between border-b py-8">
            <div className="flex items-center">
                <div className="w-20">
                    <Avatar />
                </div>
                <div className="w-80">
                    <div className="font-semibold">{name}</div>
                    <div className="opacity-60">{email}</div>
                </div>
            </div>
            <div className="w-20">
                <div className="flex items-center gap-3">
                    <div>{role}</div>
                    {role === 'Admin' ? <AdminKeyIcon /> : null}
                </div>
            </div>
            <div className="w-20 text-center">
                {active ? <SwitchOn className="inline-block" /> : <SwitchOff className="inline-block" />}
            </div>
            <div className="w-20 flex justify-end gap-3">
                {active ? <SetupIcon /> : null}
                <RemoveIcon />
            </div>
        </div>
    );
}

export default TableRow;