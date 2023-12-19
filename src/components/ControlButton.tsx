import React, {ComponentPropsWithoutRef, FC} from "react";


type ControlButtonPropsType = ComponentPropsWithoutRef<'button'> & {variant?:'primary'}
export const ControlButton: FC<ControlButtonPropsType> = ({children,className,...restProps}) => {
    return (
        <button
            className={`${className}`}
            {...restProps}
        >
            {children}
        </button>
    )
}