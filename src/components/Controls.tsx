import React, {FC} from "react";
import {ControlButton} from "./ControlButton";
import {useDispatch, useSelector} from "react-redux";
import {resetCountAC, State, updateCountAC} from "../store/reducers/counterReducer";
import {RootState} from "../store/store";

export const Controls: FC = () => {
    const state = useSelector<RootState, State>(state => state.counterState);
    const dispatch = useDispatch();

    return (
        <div className={'controls'}>
            <ControlButton
                disabled={state.count === state.maxValue || state.settingsAreChanged}
                onClick={() => dispatch(updateCountAC())}
                className={'control-btn'}
            >Inc</ControlButton>
            <ControlButton
                disabled={state.count === state.startValue || state.settingsAreChanged}
                onClick={() => dispatch(resetCountAC())}
                className={'control-btn'}
            >Reset</ControlButton>
        </div>
    )
};

