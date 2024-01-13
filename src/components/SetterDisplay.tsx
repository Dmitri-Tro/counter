import React, {ChangeEvent, FC, memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    changeTempMaxValueAC,
    changeTempStartValueAC,
    settingsIsChangedAC, startValueErrorAC,
    State, valueErrorAC
} from "../store/reducers/counterReducer";
import {RootState} from "../store/store";

type SetterDisplayProps = {  }

export const SetterDisplay: FC<SetterDisplayProps> = memo(() => {

    const state = useSelector<RootState, State>(state => state.counterState);
    const dispatch = useDispatch();

    const startValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTempStartValueAC(Number(e.currentTarget.value)));
        dispatch(settingsIsChangedAC(true));
        dispatch(startValueErrorAC());
        dispatch(valueErrorAC());
    };
    const maxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTempMaxValueAC(Number(e.currentTarget.value)));
        dispatch(settingsIsChangedAC(true));
        dispatch(valueErrorAC());
    };
    return (
        <div className={'display'}>
            <div>
                <span>Max value</span>
                <input
                    className={"setter-input"}
                    style={state.valueError ? {backgroundColor: 'red'} : {}}
                    type={"number"}
                    value={state.tempMaxValue}
                    onChange={maxValueInputHandler}
                />
            </div>
            <div>
                <span>Start value</span>
                <input
                    className={'setter-input'}
                    style={state.valueError || state.startValueError ? {backgroundColor: 'red'} : {}}
                    type={"number"}
                    value={state.tempStartValue}
                    onChange={startValueInputHandler}
                />
            </div>
        </div>
    )
});