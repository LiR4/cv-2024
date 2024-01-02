
import style from './style/header.module.css';

interface Props {
    name: string;
}

export default function Header (props: Props) {
    return (
        <div>
            <p>{props.name}</p>
        </div>
    );
}