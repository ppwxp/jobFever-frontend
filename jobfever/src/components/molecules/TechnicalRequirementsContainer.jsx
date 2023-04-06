import {StyledContainer} from "./TechnicalRequirementsContainer.styles";
import * as React from "react";
import {StyledSortButton} from "../atoms/StyledSortButton";
import {languageIcons, languageLabels} from "../../constants/constans";

const TechnicalRequirementsContainer = ({pressedButtons, setPressedButtons, setInput}) => {

    const handleButtonClick = (value, index) => {
        if (pressedButtons.includes(index)) {
            setPressedButtons(pressedButtons.filter((pressedIndex) => pressedIndex !== index));
        } else {
            setPressedButtons([...pressedButtons, index]);
        }

        setInput(prev => ({
            ...prev,
            technicalRequirements: pressedButtons.includes(index)
                ? prev.technicalRequirements.filter(item => item !== value)
                : [...prev.technicalRequirements, value]
        }));
    }

    return (
        <StyledContainer>
            {languageIcons.map((icon, index) => (
                <div key={`${icon}-${index}`}>
                    <StyledSortButton
                        id={index}
                        value={languageLabels[index]}
                        onClick={() => handleButtonClick(languageLabels[index], index)}
                        color={pressedButtons.includes(index) ? 'rgba(171, 36, 36)' : 'white'}
                    >
                        {icon}
                    </StyledSortButton>
                    <div>{languageLabels[index]}</div>
                </div>
            ))}
        </StyledContainer>
    );
};

export default TechnicalRequirementsContainer;