import { Formik } from "formik";
import { useContext } from "react";
import { addUsers } from "../../api";
import UsersContext from "../../contexts/UsersContext";
import { AvatarIcon, CloseIcon, EmailIcon } from "../UI/Icons";
import Input from "../UI/Input";
import Select from "../UI/Select";

function UserDetalesForm({closeModal}) {
    const {dispatch} = useContext(UsersContext);
    function submitHandler(values) {
        return addUsers(values)
        .then(result => {
            dispatch({type: 'ADD_USER', payload: result});
        });
    }
    return (
        <div className="flex gap-3 flex-col p-8 rounded-xl bg-white">
            <div className="flex justify-between items-center pb-4">
                <div>
                    <h3 className="font-semibold">Invite new user</h3>
                    <h4 className="text-xs opacity-50">Fill in all the fields</h4>
                </div>
                <div>
                    <CloseIcon onClick={() => closeModal()} className='cursor-pointer'/>
                </div>
            </div>
            <Formik
            initialValues={{name: '', email: '', role: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address*';
                }

                if(!values.name) {
                    errors.name = 'Required*';
                }

                if(!values.role) {
                    errors.role = 'Required*';
                } else {
                    if(!['Admin', 'User'].includes(values.role)){
                        errors.role = 'Role must be either Admin or User'
                    }
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                submitHandler(values)
                    .finally(() => {
                        setSubmitting(false);
                        closeModal();
                    });
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="relative">
                    {/* <AvatarIcon className='absolute z-50 top-3.5 left-2 opacity-50' /> */}
                    <Input
                        placeholder='Full Name'
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        Icon={AvatarIcon}
                    />
                    <div className={`${errors.name && touched.name ? 'visible' : 'invisible'} text-xs h-3 text-red-500`}>
                        {errors.name}
                    </div>
                </div>
                <div>
                    <Input
                        placeholder='E-mail'
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        Icon={EmailIcon}
                    />
                    <div className={`${errors.email && touched.email ? 'visible' : 'invisible'} text-xs h-3 text-red-500`}>
                        {errors.email}
                    </div>
                </div>
                <div>
                    <Select
                        Icon={EmailIcon} 
                        name='role'
                        value={values.role}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='cursor-pointer py-2 pl-7 w-72 text-gray-700 bg-white border focus:text-gray-700 
                        focus:bg-white focus:border-blue-600 focus:outline-none
                        border-solid border-gray-200 rounded-lg' 
                        placeholder='Role' 
                        options={['Role', 'Admin', 'User']}
                    />
                    <div className={`${errors.role && touched.role ? 'visible' : 'invisible'} text-xs h-3 text-red-500`}>
                        {errors.role}
                    </div>
                </div>
                <button className="py-3 bg-blue-500 mt-3 text-white rounded-xl cursor-pointer" type="submit" disabled={isSubmitting}>
                    Send invitation
                </button>
                </form>
            )}
            </Formik>
        </div>
        // <div className="flex gap-3 flex-col p-8 rounded bg-white">
        //     <Input />
        //     <Input />
        //     <Input />
        //     <button>Send Invitation</button>
        // </div>
    )
}

export default UserDetalesForm;