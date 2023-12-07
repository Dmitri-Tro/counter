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
                styles={count !== maxCount ? 'control-btn' : 'control-btn-disabled'}
                btnIsDisabled={count === maxCount}
                title={'Inc'}
                buttonHandler={updateCount}
            />
            <ControlButton
                styles={count !== 0 ? 'control-btn' : 'control-btn-disabled'}
                btnIsDisabled={count === 0}
                title={'Reset'}
                buttonHandler={resetCount}
            />
        </div>
    )
}

