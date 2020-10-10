import React, {useState} from 'react';
import './components/assets/default.scss';
import DropdownButton from "./components/button/DropdownButton";
import {Button, Input} from "./components";
import TextInputDropdown from "./components/input/TextInputDropdown";
import Icon from "./components/icon/Icon";
import RangeSlider from "./components/slider/RangeSlider";

function App() {
    const [showContent, setShowContent] = useState(false);
    const [showInputContent, setShowInputContent] = useState(false);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000);
    const onClick = () => {
        setShowContent(false);
        setShowInputContent(false);
    };
    const handleInputChange = (input) => {
        console.log(input);
    }
    const handleSliderChange = (values) => {
        setMin(values[0]);
        setMax(values[1]);

    }
    return (
        <div className="main--content">
            <div className="container">
                <div className="div__align--center">
                    <Button onClick={onClick} size="large">
                        <Icon name="muncher" size="large"/>
                    </Button>
                    <Input/>
                    <DropdownButton drop="nav" element={<p>Test</p>} showContent={showContent}
                                    setShowContent={setShowContent}>
                        <div>
                            <p onClick={onClick}>First</p>
                            <p onClick={onClick}>Second</p>
                        </div>
                    </DropdownButton>
                </div>
            </div>
            <div className="container">
                <TextInputDropdown focus={true}
                                   showContent={showInputContent}
                                   setShowContent={setShowInputContent}
                                   handleInputChange={handleInputChange}>
                    <div>
                        <p onClick={onClick}>First</p>
                        <p onClick={onClick}>Second</p>
                    </div>
                </TextInputDropdown>
            </div>

            <div className="container">
                <RangeSlider min={10} max={1000} handleChange={handleSliderChange}>
                    Current min: {min} Current max: {max}
                </RangeSlider>
            </div>
        </div>
    );
}

export default App;
