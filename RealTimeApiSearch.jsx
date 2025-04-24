import React, { useState, useCallback, useMemo } from 'react';

const RealTimeAPISearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const cache = useMemo(() => new Map(), []);

    const fetchUsers = useCallback(async (searchTerm) => {
        if (cache.has(searchTerm)) {
            setResults(cache.get(searchTerm));
            return;
        }

        setLoading(true);
        setError('');
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            const filtered = data.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setResults(filtered);
            cache.set(searchTerm, filtered); // store in cache
        } catch (err) {
            setError('Something went wrong. Try again!');
        } finally {
            setLoading(false);
        }
    }, [cache]);

    const onChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        clearTimeout(window._debounceAPI);
        window._debounceAPI = setTimeout(() => fetchUsers(value), 500);
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>🔍 User Search (with Debounce, Loading & Cache)</h2>
            <input
                type="text"
                placeholder="Search users..."
                value={query}
                onChange={onChange}
                style={{ padding: 8, width: 250 }}
            />

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!loading && !error && results.length > 0 && (
                <ul>
                    {results.map(user => <li key={user.id}>{user.name}</li>)}
                </ul>
            )}

            {!loading && query && results.length === 0 && <p>No results found</p>}
        </div>
    );
};

export default RealTimeAPISearch;
