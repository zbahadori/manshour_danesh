import React, { Fragment } from 'react'

export default function Search() {
    return (
        <Fragment>
            <div className="search d-inline-block align-middle">
                <form action="." method="POST">
                    <input type="search" className="form-control" placeholder="جستجو کنید" />
                    <button className="btn btn-empty"><i className="icon-magnifier"></i></button>
                </form>
            </div>
        </Fragment>
    )
}
