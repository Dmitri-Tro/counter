import React, {FC, memo} from "react";
import {ControlButton} from "./ControlButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {setSettingsAC, settingsIsChangedAC, State} from "../store/reducers/counterReducer";

type ControlsPropsType = {  }
export const SetterControls: FC<ControlsPropsType> = memo(() => {
    const state = useSelector<RootState, State>(state => state.counterState);
    const dispatch = useDispatch();

    const setOptions = () => {
        dispatch(setSettingsAC(state.tempStartValue, state.tempMaxValue));
        dispatch(settingsIsChangedAC(false));
    };
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
});