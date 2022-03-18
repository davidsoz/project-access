import { KeyIcon } from "./Icons";

function Select({options = [], Icon, ...otherProps}) {
    return (
        <div className="relative">
            <KeyIcon className='absolute top-4 left-2' />
            <select {...otherProps}>
                {options.map((option, i) => <option key={i}>{option}</option>)}
            </select>
        </div>
    )
}

export default Select;