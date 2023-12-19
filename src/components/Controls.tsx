import React, {FC} from "react";
import {ControlButton} from "./ControlButton";

type ControlsPropsType = {
    count: number
    maxCount: number
    updateCount: () => void
    resetCount: () => void
    startInputValue: number
    setterChange: boolean
}
export const Controls: FC<ControlsPropsType> = ({
                                                    count,
                                                    maxCount,
                                                    updateCount,
                                                    resetCount,
                                                    startInputValue,
                                                    setterChange
                                                }) => {
    return (
        <div className={'controls'}>
            <ControlButton
                disabled={count === maxCount || setterChange}
                onClick={updateCount}
                className={'control-btn'}
            >Inc</ControlButton>
            <ControlButton
                disabled={count === startInputValue || setterChange}
                onClick={resetCount}
                className={'control-btn'}
            >Reset</ControlButton>
        </div>
    )
}

