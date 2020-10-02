import React from 'react'
import { Button } from 'react-bootstrap'

export default function OrangeButton() {
    const focusEmailInput = () => document.querySelectorAll('.form-input')[0].focus();

    return (
        <>
            <div className="orange-btn-wrap">
                <Button
                    className="orange-btn"
                    onClick={focusEmailInput}
                >
                    Lorem Ipsum Dolor Sit Amet
                    </Button>
            </div>
        </>
    )
}