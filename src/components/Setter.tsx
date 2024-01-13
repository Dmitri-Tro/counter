import React, {FC, memo} from "react";
import {SetterControls} from "./SetterControls";
import {SetterDisplay} from "./SetterDisplay";

type SetterPropsType = {}
export const Setter: FC<SetterPropsType> = memo(() => {
    return (
        <div className={'counter'}>
            <SetterDisplay/>
            <SetterControls/>
        </div>
    )
});