type Props = {
    label: string,
    className: string
    onClick?: () => void;
    type?: string;
    typeIn?: 'submit'
} 
const Button: React.FC<Props> = ({label, onClick, className,typeIn}) =>{
    return(
        <button
            className={className+" uppercase py-2 rounded font-normal text-sm select-none transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none "}
            onClick={onClick}
            type={typeIn}
        >
            {label}
        </button>
    )
}
export default Button