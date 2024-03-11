import "./Button.css";

type Props = {
    href: string,
    className: string,
    label: string
}

const Button: React.FC<Props> = ({ href, className, label }) => {
    return (
        <a href={href} className={"btn-default" + className}> {label} </a>
    )
}

export default Button;