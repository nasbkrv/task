import React from 'react'

export default function StepsRectangle(props) {
    return (
        <>
            <div className="step-rectangle">
                <div className="card-content-wrap">
                    <div className="step-number">
                        <p>{props.number}</p>
                    </div>
                    <div className="step-description">
                        <h3>{props.step}</h3>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
