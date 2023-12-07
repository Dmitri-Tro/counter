import React, {FC} from "react";
import {Controls} from "./Controls";


type CounterPropsType = {
    count: number
    maxCount: number
    updateCount: () => void
    resetCount: () => void
}
export const Counter: FC<CounterPropsType> = ({count, maxCount, updateCount, resetCount}) => {
    return (
        <div className={'counter'}>
            <div className={count !== maxCount ? 'counter-display': 'counter-display_max'}>{count}</div>
            <Controls
                count = {count}
                maxCount = {maxCount}
                updateCount = {updateCount}
                resetCount = {resetCount}
            />
        </div>
    )
}