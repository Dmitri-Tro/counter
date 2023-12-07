import React, {FC} from "react";


type ControlButtonPropsType = {
    title: string
    buttonHandler: () => void
    styles: string
    btnIsDisabled: boolean
}
export const ControlButton: FC<ControlButtonPropsType> = ({title, buttonHandler, styles, btnIsDisabled}) => {
    return (
        <button
            disabled={btnIsDisabled}
            className={styles}
            onClick={buttonHandler}
        >
            {title}
        </button>
    )
}