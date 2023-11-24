import React, { useRef, useState } from "react";
import Button from "../../Components/Buttons/Button";
import { constValue } from "../../AppConfig";
import Flavanoids from "../../Components/Flavanoids/Flavanoids";
import Gamma from "../../Components/Gamma/Gamma";

const Home = () => {
    const { buttonType, FlavanoidsMeasureButtonText, GammaMeasureButtonText } = constValue;
    const [visibleFlavanoids, setVisibleFlavanoids] = useState(false);
    const [visibleGamma, setVisibleGamma] = useState(false);
    const flavanoidsRef = useRef(null);
    const gammaRef = useRef(null);

    const clickHandle = (data) => {
        if (data == FlavanoidsMeasureButtonText) {
            flavanoidsRef.current.style.backgroundColor = "#00A36C";
            gammaRef.current.style.backgroundColor = "";
            setVisibleFlavanoids(true);
            setVisibleGamma(false);
        } else {
            gammaRef.current.style.backgroundColor = "#00A36C";
            flavanoidsRef.current.style.backgroundColor = "";
            setVisibleFlavanoids(false);
            setVisibleGamma(true);
        }
    }
    return (
        <>
            <div className="buttonContainer">
                <Button type={buttonType} value={FlavanoidsMeasureButtonText} clickHandle={clickHandle} buttonRef={flavanoidsRef} />&nbsp;&nbsp;
                <Button type={buttonType} value={GammaMeasureButtonText} clickHandle={clickHandle} buttonRef={gammaRef} />
            </div>

            {visibleFlavanoids || visibleGamma ?
                <div className="tableContainer">
                    <div className="tableSubContainer">
                        {visibleFlavanoids && <Flavanoids />}
                        {visibleGamma && <Gamma />}
                    </div>
                </div> : null
            }
        </>
    )
}

export default Home;