import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useState } from "react";

const WeatherInput = ({ setSearchVal }) => {
    const [inputVal, setInputVal] = useState("");

    return (
        <Input
            placeholder="Search city"
            bordered
            value={inputVal}
            suffix={<SearchOutlined />}
            style={{ width: "400px", marginTop: '20px' }}
            onChange={(e) => setInputVal(e.target.value)}
            onPressEnter={() => {
                setInputVal('')
                setSearchVal(inputVal)
            }}
        />
    );
};

export default WeatherInput;
