import { SearchIcon } from "./Icons";

function Input({Icon, ...otherProps}) {
  return (
    <div className="relative w-72">
      {Icon && <Icon className='absolute top-1/2 -translate-y-1/2 left-2 w-4'/>}
        <input
            placeholder="type the value..."
            {...otherProps}
            className={
                `w-full  ${Icon ? 'pl-8 pr-2' : 'px-2'} py-2 text-gray-700 bg-white border 
                border-solid border-gray-200 rounded-lg focus:text-gray-700 
                focus:bg-white focus:border-blue-600 focus:outline-none 
                ${otherProps.className || ''}` 
            }
        />
        {/* {otherProps.type === 'search' && <SearchIcon className='absolute left-2 top-3.5' />} */}
    </div>
  );
}

export default Input;
