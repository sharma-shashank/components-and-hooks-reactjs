import { File } from './File';
import { Folder } from './Folder';

interface IFolders {
    struct: Array<IFolderStruct>
}

interface IFolderStruct {
    type: string;
    name: string;
    childrens: Array<IFolderStruct>
}

export const Tree = ({ struct }: IFolders) => {

    return (
        <ul>
            {struct.length ? struct.map((item, i) => {
                if (item.type === 'file') {
                    return (<File name={item.name} key={'file-' + i}/>);
                } else {
                    return (
                    <Folder name={item.name} key={'folder-' + i}>
                        <Tree struct={item.childrens}/>
                    </Folder>);
                }
            }) : ''}
        </ul>
    );
}

const TreeNode = () => {

}