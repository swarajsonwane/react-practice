import React, { useState } from 'react';
export const FileNode = ({node}) => {
    const [expand, setExpand] = useState(false);

    const isFolder = node.type === 'folder';

    return (
        <div style={{marginLeft : "20px"}}>
            <div onClick={() => isFolder && setExpand(!expand)} style = {{cursor : isFolder ? 'pointer' : 'default', fontWeight : isFolder ? 'bold':'normal'}}>
                {isFolder ? (expand ? '📂' : '📁') : '📄'} {node.name}
            </div>

            {expand && isFolder && node.children && (
                <div>
                    {node.children.map( child =>(
                        <FileNode key = {child.id} node = {child}/>
                    ))}
                </div>
            )}
        </div>

    );
};