import { useEffect, useState } from 'react';
import './../index.css'

const MultiSelectDorpDown = () => {
    const [selectedValue, setValue] = useState([]);

    const handelChange = (selectedOptions: Array<any>) => {}    

    return (
        <form>
            <select multiple={true} value={selectedValue} onChange={() => handelChange(selectedValue)}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
            </select>
        </form>
    );
}

export default MultiSelectDorpDown;