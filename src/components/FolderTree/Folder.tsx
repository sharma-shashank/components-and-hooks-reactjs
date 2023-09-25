import { AiFillFolder } from 'react-icons/ai'
import './Folder.css';
import { ReactNode } from 'react';

interface IFolder {
    name: string;
    children: ReactNode;
}

export const Folder = ({ name, children }: IFolder) => {

    return (
        <ul>
            <li>
                <AiFillFolder />
                <span>{name}</span>
            </li>
            {children}
        </ul>
    );
}