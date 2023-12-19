import React, {FC} from "react";
import {ControlButton} from "./ControlButton";

type ControlsPropsType = {
    setOptions: () => void
    setterChange: boolean
    startInputError: boolean
    maxInputError: boolean
}
export const SetterControls: FC<ControlsPropsType> = ({
                                                          setOptions,
                                                          startInputError,
                                                          maxInputError,
                                                          setterChange
                                                      }) => {
    return (
        <div className={'controls'}>
            <ControlButton
                disabled={startInputError || maxInputError || !setterChange}
                onClick={setOptions}
                className={'control-btn'}
            >Set options</ControlButton>
        </div>
    )
}