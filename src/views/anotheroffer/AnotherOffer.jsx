import React from 'react'

import AntoheroffersStyle from './AnotherOffer.module.scss'

const AnotherOffer = () => {
    return (
        <div className={AntoheroffersStyle.content}>
            <h1 className={AntoheroffersStyle.title}>
                Try Shelpful FREE for 3 days, we’re sure we’ll make a difference by then.
            </h1>
            <h3 className={AntoheroffersStyle.message}>
                There’s no commitment, pressure, or obligation.
            </h3>
            <button className={AntoheroffersStyle.action}>
                Try for FREE
            </button>
        </div>
      )
}

export default AnotherOffer
