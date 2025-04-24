import React from 'react'
import {FileNode} from "./FileNode";

const fileStructure = [
    {
        id: 1,
        name: "src",
        type: "folder",
        children: [
            {
                id: 2,
                name: "components",
                type: "folder",
                children: [
                    {
                        id: 3,
                        name: "Header.js",
                        type: "file"
                    },
                    {
                        id: 4,
                        name: "Footer.js",
                        type: "file"
                    }
                ]
            },
            {
                id: 5,
                name: "App.js",
                type: "file"
            },
            {
                id: 6,
                name: "index.js",
                type: "file"
            }
        ]
    }
];
const File = () => {
    return (
        <div style = {{padding : 20, marginLeft:20}}>
            <h2>File Structure</h2>
            {fileStructure.map((item) =>(
                    <FileNode key = {item.id} node={item} />
                )
            )}
        </div>
    )
}
export default File
