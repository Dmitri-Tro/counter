import React, {FC, useCallback} from "react";
import {ControlButton} from "./ControlButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {setSettingsAC, settingsIsChangedAC, State} from "../store/reducers/counterReducer";

export const SetterControls: FC = () => {
    const state = useSelector<RootState, State>(state => state.counterState);
    const dispatch = useDispatch();

    const setOptions = useCallback(() => {
        dispatch(setSettingsAC(state.tempStartValue, state.tempMaxValue));
        dispatch(settingsIsChangedAC(false));
    }, [dispatch, state.tempStartValue, state.tempMaxValue]);
    return (
        <div className={'controls'}>
            <ControlButton
                disabled={state.valueError || state.valueError || !state.settingsAreChanged}
                onClick={setOptions}
                className={'control-btn'}
            >
                Set options
            </ControlButton>
        </div>
    )
};