import React, {useState} from 'react';
import './components/assets/default.scss';
import MuncherIcon from "./components/icon/MuncherIcon";
import DropdownButton from "./components/button/DropdownButton";

function App() {
    const [showContent, setShowContent] = useState(false);
    const onClick = () => {
        setShowContent(false);
    };
    return (
        <div className="main--content">
            <div className="div__align--center">
                <MuncherIcon onClick={onClick} variant="large"/>
                <DropdownButton icon={<p>Test</p>} showContent={showContent} setShowContent={setShowContent}>
                    <div>
                        <p onClick={onClick}>First</p>
                        <p onClick={onClick}>Second</p>
                    </div>
                </DropdownButton>
            </div>
        </div>
    );
}

export default App;
