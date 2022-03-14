import { SearchIcon } from "./Icons";

function Input(props) {
  return (
    <div className="relative w-72">
        <input
            placeholder="type the value..."
            {...props}
            className={
                `w-full ${props.type === 'search' ? 'pl-8' : 'px-2'} text-gray-700 bg-white border 
                border-solid border-gray-300 rounded focus:text-gray-700 
                focus:bg-white focus:border-blue-600 focus:outline-none 
                ${props.className || ''}` 
            }
        />
        {props.type === 'search' && <SearchIcon className='absolute left-2 top-1.5' />}
    </div>
  );
}

export default Input;
