import React, {useState} from 'react';
import './components/assets/default.scss';
import DropdownButton from "./components/button/DropdownButton";
import {Button, Input} from "./components";
import TextInputDropdown from "./components/input/TextInputDropdown";
import Icon from "./components/icon/Icon";

function App() {
    const [showContent, setShowContent] = useState(false);
    const [showInputContent, setShowInputContent] = useState(false);
    const onClick = () => {
        setShowContent(false);
        setShowInputContent(false);
    };
    const handleInputChange = (input) => {
        console.log(input);
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

            </div>
        </div>
    );
}

export default App;
