import React, {ChangeEvent, FC} from "react";

type SetterDisplayProps = {
    startInputValue: number
    onStartValueInputChange: (value: number) => void
    maxInputValue: number
    onMaxValueInputChange: (value: number) => void
    startInputError: boolean
    maxInputError: boolean
}

export const SetterDisplay: FC<SetterDisplayProps> = ({
                                                          startInputValue,
                                                          onStartValueInputChange,
                                                          maxInputValue,
                                                          onMaxValueInputChange,
                                                          startInputError,
                                                          maxInputError
                                                      }) => {
    const startValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onStartValueInputChange(Number(e.currentTarget.value))
    }
    const maxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onMaxValueInputChange(Number(e.currentTarget.value))
    }

    return (
        <div className={'display'}>
            <div>
                <span>Max value</span>
                <input
                    className={"setter-input"}
                    style={maxInputError ? {backgroundColor: 'red'} : {}}
                    type={"number"}
                    value={maxInputValue}
                    onChange={maxValueInputHandler}
                />
            </div>
            <div>
                <span>Start value</span>
                <input
                    className={'setter-input'}
                    style={startInputError ? {backgroundColor: 'red'} : {}}
                    type={"number"}
                    value={startInputValue}
                    onChange={startValueInputHandler}
                />
            </div>
        </div>
    )
}