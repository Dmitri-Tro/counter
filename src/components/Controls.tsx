import React, {FC} from "react";
import {ControlButton} from "./ControlButton";


type ControlsPropsType = {
    count: number
    maxCount: number
    updateCount: () => void
    resetCount: () => void
}
export const Controls: FC<ControlsPropsType> = ({count, maxCount, updateCount, resetCount}) => {
    return (
        <div className={'controls'}>
            <ControlButton
                disabled={count === maxCount}
                onClick={updateCount}
            >Inc</ControlButton>
            <ControlButton
                disabled={count === 0}
                onClick={resetCount}
            >Reset</ControlButton>
        </div>
    )
}

