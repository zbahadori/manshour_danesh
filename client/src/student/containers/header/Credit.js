import React, { Fragment } from 'react'

export default function Credit(props) {
    return (
        <Fragment>
            <div className="credit d-inline-block align-middle">
                <p>اعتبار {props.amount} تومان</p>
            </div>
        </Fragment>
    )
}
