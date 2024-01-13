import React, {FC, memo} from "react";
import {Controls} from "./Controls";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {State} from "../store/reducers/counterReducer";


type CounterPropsType = {  }
export const Counter: FC<CounterPropsType> = memo(() => {
    const state = useSelector<RootState, State>(state => state.counterState);

    return (
        <div className={'counter'}>
            <div className={'display'}>
                {(state.startValueError || state.valueError) && <span style={{'color': 'red'}}>Incorrect value!</span>}
                {!(state.startValueError || state.valueError) && state.settingsAreChanged && <span>Enter values and press "Set"</span>}
                {!(state.startValueError || state.valueError) && !state.settingsAreChanged &&
                    <span className={state.count !== state.maxValue ? 'display-count' : 'display-count_max'}>{state.count}</span>}
            </div>
            <Controls />
        </div>
    )
});