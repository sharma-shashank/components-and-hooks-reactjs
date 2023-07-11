import { useEffect } from 'react';
import './../index.css'
const InfiniteScroll = ({ list, setPage }) => {

    const onScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
            setPage(page => page+1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [list])

    return (<>
        <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center',  flexDirection: 'column'}} className="wrapper">
            {list?.length && list.map((item, i) => (<img key={`img-${i}`} style={{marginTop: '5px', height: '50%', width: '50%', objectFit: 'cover', display: 'flex'}} src={item.download_url} alt={item.author}/>))}
        </div>
    </>);
}

export default InfiniteScroll;