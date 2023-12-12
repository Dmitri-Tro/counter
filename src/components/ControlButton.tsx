import React, {ComponentPropsWithoutRef, FC, ReactNode} from "react";


type ControlButtonPropsType = ComponentPropsWithoutRef<'button'> & {variant?:'primary'}
export const ControlButton: FC<ControlButtonPropsType> = ({children,className,...restProps}) => {
    return (
        <button
            className={`control-btn ${className}`}
            {...restProps}
        >
            {children}
        </button>
    )
}