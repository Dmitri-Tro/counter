import React, {FC} from "react";
import {Controls} from "./Controls";


type CounterPropsType = {
    count: number
    maxCount: number
    updateCount: () => void
    resetCount: () => void
    startInputError: boolean
    maxInputError: boolean
    startInputValue: number
    setterChange: boolean
}
export const Counter: FC<CounterPropsType> = ({
                                                  count,
                                                  maxCount,
                                                  updateCount,
                                                  resetCount,
                                                  startInputError,
                                                  maxInputError,
                                                  startInputValue,
                                                  setterChange
                                              }) => {

    return (
        <div className={'counter'}>
            <div className={'display'}>
                {(startInputError || maxInputError) && <span style={{'color': 'red'}}>Incorrect value!</span>}
                {!(startInputError || maxInputError) && setterChange && <span>Enter values and press "Set"</span>}
                {!(startInputError || maxInputError) && !setterChange &&
                    <span className={count !== maxCount ? 'display-count' : 'display-count_max'}>{count}</span>}
            </div>
            <Controls
                count={count}
                maxCount={maxCount}
                updateCount={updateCount}
                resetCount={resetCount}
                startInputValue={startInputValue}
                setterChange={setterChange}
            />
        </div>
    )
}