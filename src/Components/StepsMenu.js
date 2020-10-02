import React from 'react'
import StepsRectangle from './StepsRectangle'

export default function StepsMenu() {
    return (
        <>
            <div className="rectangle-wrap">
                <div className="card-wrap">
                    <StepsRectangle className="step-rectangle" number='1' step="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur" />
                    <span className="blue-arrow"></span>
                </div>
                <div className="card-wrap" >
                    <StepsRectangle number='2' step="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur" />
                    <span className="blue-arrow "></span>
                </div>
                <div className="card-wrap" >
                    <StepsRectangle number='3' step="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur" />
                </div>
            </div>
        </>
    )
}