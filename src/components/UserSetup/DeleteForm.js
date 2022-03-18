import { useContext } from "react";
import { deleteUser } from "../../api";
import UsersContext from "../../contexts/UsersContext";
import { AvatarIcon, CloseIcon } from "../UI/Icons";

function DeleteForm({selectedUser, closeModal}) {
    const {dispatch} = useContext(UsersContext);

    function submitHandler() {
        return deleteUser(selectedUser.id)
        .then(() => {
            dispatch({type: 'DELETE_USER', payload: selectedUser.id});
            closeModal();
        });
    }

    return (
        <div className="flex flex-col p-8 bg-white rounded-xl gap-4">
            <div className="flex justify-between items-center">
                <h2 className="font-semibold">Delete User</h2>
                <CloseIcon onClick={() => closeModal()} className='cursor-pointer'/>
            </div>
            <div className="w-72 h-8 border-1 rounded-lg flex justify-between items-center px-2">
                <div className="flex items-center gap-1">
                    <AvatarIcon />
                    <div>
                        {selectedUser.name}
                    </div>
                </div>
                <div className={`${selectedUser.active ? 'text-blue-600' : 'text-gray-300'} font-semibold top-1 right-2`}>{selectedUser.active ? 'Active' : 'Inactive'}</div>
            </div>
            <button onClick={submitHandler} className="py-3 bg-red-500 text-white rounded-xl cursor-pointer" type="submit">
                Delete
            </button>
        </div>
    )
}

export default DeleteForm;