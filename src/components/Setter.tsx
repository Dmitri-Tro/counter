import React, {FC} from "react";
import {SetterControls} from "./SetterControls";
import {SetterDisplay} from "./SetterDisplay";

type SetterPropsType = {
    startInputValue: number
    maxInputValue: number
    onStartValueInputChange: (value: number) => void
    onMaxValueInputChange: (value: number) => void
    setOptions: () => void
    startInputError: boolean
    maxInputError: boolean
    setterChange: boolean
}
export const Setter: FC<SetterPropsType> = ({
                                                startInputValue,
                                                maxInputValue,
                                                onStartValueInputChange,
                                                onMaxValueInputChange,
                                                setOptions,
                                                startInputError,
                                                maxInputError,
                                                setterChange
                                            }) => {
    return (
        <div className={'counter'}>
            <SetterDisplay
                startInputValue={startInputValue}
                onStartValueInputChange={onStartValueInputChange}
                maxInputValue={maxInputValue}
                onMaxValueInputChange={onMaxValueInputChange}
                startInputError={startInputError}
                maxInputError={maxInputError}
            />
            <SetterControls
                setOptions={setOptions}
                startInputError={startInputError}
                maxInputError={maxInputError}
                setterChange={setterChange}
            />
        </div>
    )
}