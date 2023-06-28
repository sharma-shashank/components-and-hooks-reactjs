import axios from "axios";
import { useEffect, useRef, useState } from "react";

const AbortApiController = (url) => {

    const cancelToken = useRef(null);
    const [data, setData] = useState([]);
    const [reason, setReason] = useState('');

    useEffect(() => {
        const abortContol = async () => {
            if (cancelToken.current) {
            const str = 'cancled due to new request!';
            cancelToken.current.cancel(str);
        }
        cancelToken.current = axios.CancelToken.source();
        try {
            let _data = await axios.get(url, {
                cancelToken: cancelToken.current.token
            });
            setData(_data.data);
            return _data.data;
        } catch (error){
            setReason(error.message);
        }
    }
    abortContol();
    }, [url]);

    return { data, reason };
}

export default AbortApiController;