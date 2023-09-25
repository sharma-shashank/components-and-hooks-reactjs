import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from 'react-icons/di';
import './File.css';

const fileIcons = {
    js: <DiJavascript1/>,
    css: <DiCss3Full/>,
    html: <DiHtml5/>,
    jsx: <DiReact/>,
}

export const File = ({ name }) => {

    const getFileType = (input) => fileIcons[input?.split('.')[1]];

    return (
        <li>
            <span className='file'>{getFileType(name)}</span>
            <span className='file'>{name}</span>
        </li>
    );
}