import React, {useState} from 'react'

export default function SearchFilter() {

    const[query, setQuery] = useState("");
    const [items, setItems] = useState(["apple", "banana", "orange", "grape", "kiwi"]);

    const filteredItems = items.filter(item => item.toLocaleLowerCase().includes(query.toLocaleLowerCase()));

    return (
        <div>
            <input type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>
            <ul>
                {filteredItems.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}
