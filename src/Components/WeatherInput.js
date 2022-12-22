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
            style={{ width: "200px" }}
            onChange={(e) => setInputVal(e.target.value)}
            onPressEnter={() => setSearchVal(inputVal)}
        />
    );
};

export default WeatherInput;
