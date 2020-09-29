import React, {useState} from 'react';
import './components/assets/default.scss';
import MuncherIcon from "./components/icon/MuncherIcon";
import DropdownButton from "./components/button/DropdownButton";
import {TextInput} from "./components";
import TextInputDropdown from "./components/input/TextInputDropdown";

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
                    <MuncherIcon onClick={onClick} variant="large"/>
                    <TextInput/>
                    <DropdownButton icon={<p>Test</p>} showContent={showContent} setShowContent={setShowContent}>
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
        </div>
    );
}

export default App;
