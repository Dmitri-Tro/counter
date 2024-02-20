import React, { FC } from "react";
import { SetterControls } from "./SetterControls";
import { SetterDisplay } from "./SetterDisplay";

type SetterPropsType = {};
export const Setter: FC<SetterPropsType> = () => {
    return (
        <div className={"counter"}>
            <SetterDisplay />
            <SetterControls />
        </div>
    );
};
