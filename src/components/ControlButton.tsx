import React, {ComponentPropsWithoutRef, FC, memo} from "react";


type ControlButtonPropsType = ComponentPropsWithoutRef<'button'> & {variant?:'primary'}
export const ControlButton: FC<ControlButtonPropsType> = memo(({children,className,...restProps}) => {
    return (
        <button
            className={`${className}`}
            {...restProps}
        >
            {children}
        </button>
    )
});