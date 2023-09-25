export const FolderStruct: Array<any> = [
    {
        type: 'folder',
        name: 'src',
        childrens: [
            {
                type: 'file',
                name: 'index.js',
                childrens: [],
            },
            {
                type: 'file',
                name: 'constants',
                childrens: [],
            },
            {
                type: 'folder',
                name: 'components',
                childrens: [
                    {
                        type: 'folder',
                        name: 'container',
                        childrens: [
                            {
                                type: 'file',
                                name: 'button.jsx',
                                childrens: [] 
                            },
                            {
                                type: 'file',
                                name: 'text.jsx',
                                childrens: [] 
                            },
                            {
                                type: 'file',
                                name: 'text.css',
                                childrens: [] 
                            },
                            {
                                type: 'file',
                                name: 'text.html',
                                childrens: [] 
                            },
                        ]
                    }
                ],
            }
        ]
    },
    {
        type: 'file',
        name: 'mock.js',
        childrens: []
    }
]