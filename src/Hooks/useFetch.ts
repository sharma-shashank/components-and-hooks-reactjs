import axios from "axios";
import { useCallback, useEffect, useState } from "react"

const useFetch = (page: Number) => {
    const [isLoading, setLoading] = useState<Boolean>(false);
    const [list, setList] = useState<Array<any>>([]);
    const [error, setError] = useState(null);

    const sendQuery = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
            console.log('res -- ', response);
            setList(prevList => [...prevList, ...response.data]);
            setLoading(false);
        } catch(e) {
            setLoading(false);
            setError(e);
        } finally {
            setLoading(false);
            setError(null);
            // setList(list);
        }
    }, [page]);

    useEffect(() => {sendQuery()}, [sendQuery, page]);

    // sendQuery();

//     useEffect(() => {
//     const fetchITems = async () => {
//         try {
//             setLoading(true);
//             setError(null);
//             const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
//             console.log('res -- ', response);
//             setList(perv => [...perv, ...response.data]);
//             setLoading(false);
//         } catch(e) {
//             setLoading(false);
//             setError(e);
//         } 
//     }
//     fetchITems();
// }, [page]);

    return { isLoading, error, list };
}

export default useFetch;