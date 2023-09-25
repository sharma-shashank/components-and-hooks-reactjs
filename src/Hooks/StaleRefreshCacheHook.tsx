import { useEffect, useState } from "react";

const CACHE = {};

const apiFetcher = (url) => fetch(url).then(value => value.json());

export default function useStaleRefreshHook(url: string, defaultValue = []) {
    const [data, setData] = useState(defaultValue);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const cacheId = url;
        if (CACHE[cacheId] !== undefined) {
            setData(CACHE[cacheId]);
            setLoading(false);
        } else {
            setLoading(true);
        }
        apiFetcher(url).then(response => {
            CACHE[url] = response;
            setData(response);
            setLoading(false);
        });  
    }, [url]);
    
    return { isLoading, data };
}