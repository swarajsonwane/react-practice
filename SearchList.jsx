import React, {useMemo, useState} from 'react'
import bigData from "../data";

const SearchList = () => {
    const [search , setSearch] = useState("");
    const filteredItems = useMemo(() => {
        console.log("Filtering items...");
        return  bigData.filter(item => item.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }, [search]);


    return (
        <div>
            <input type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>

            <p>
                Results: {filteredItems.length}
            </p>
            <ul>
                {filteredItems.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}
export default SearchList;


//useMemo is a React hook that memoizes (caches) a
// computed value and only recomputes it when its dependencies change.
// so it will not render the filteredItems every time the component re-renders.
// useMemo avoids unnecessary recalculation when state/props change.
//
//     Doesn’t prevent re-renders, but prevents expensive logic from re-running.
//
//     Great for:
//
// Filtering/searching huge data
//
// Sorting
//
// Heavy calculations (e.g. date diffs, aggregations)
//
// Passing stable props to memoized child components
