import axios from "axios";
import { useEffect, useRef, useState } from "react";

const AbortApiController = (url, page) => {

	const cancelToken = useRef(null);
	const [data, setData] = useState([]);
	const [reason, setReason] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const abortContol = async () => {
			if (cancelToken.current) {
				const str = 'cancled due to new request!';
				cancelToken.current.cancel(str);
			}
			setLoading(true);
			cancelToken.current = axios.CancelToken.source();
			try {
				let response = await axios.get(url, {
					cancelToken: cancelToken.current.token
				});
				setData(prev => [...prev, ...response.data]);
				setLoading(false);
				return response.data;
			} catch (error) {
				setReason(error.message);
				setLoading(false);
			}
		}
		abortContol();
	}, [page]);

	return { data, reason, loading };
}

export default AbortApiController;