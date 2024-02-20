import React, { ChangeEvent, FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeTempMaxValueAC,
    changeTempStartValueAC,
    settingsIsChangedAC,
    startValueErrorAC,
    State,
    valueErrorAC,
} from "store/reducers/counterReducer";
import { RootState } from "store/store";

export const SetterDisplay: FC = () => {
    const state = useSelector<RootState, State>((state) => state.counterState);
    const dispatch = useDispatch();

    const startValueInputHandler = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeTempStartValueAC(e.currentTarget.value));
            dispatch(settingsIsChangedAC(true));
            dispatch(startValueErrorAC());
            dispatch(valueErrorAC());
        },
        [dispatch],
    );
    const maxValueInputHandler = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeTempMaxValueAC(e.currentTarget.value));
            dispatch(settingsIsChangedAC(true));
            dispatch(valueErrorAC());
        },
        [dispatch],
    );
    return (
        <div className={"display"}>
            <div>
                <span>Max value</span>
                <input
                    className={"setter-input"}
                    style={state.valueError ? { backgroundColor: "red" } : {}}
                    type={"number"}
                    value={state.tempMaxValue}
                    onChange={maxValueInputHandler}
                />
            </div>
            <div>
                <span>Start value</span>
                <input
                    className={"setter-input"}
                    style={state.valueError || state.startValueError ? { backgroundColor: "red" } : {}}
                    type={"number"}
                    value={state.tempStartValue}
                    onChange={startValueInputHandler}
                />
            </div>
        </div>
    );
};
