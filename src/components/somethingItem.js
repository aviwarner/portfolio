import React from "react"

const SomethingItem = ({ clickHandler, active, post }) => {
    return (
        <div
            onClick={clickHandler}
            className={
                `somethings-item ${active ? ' somethings-item--active' : ''}`
            }
        >
            <p>{post.title}</p>
            {active ? <p>{post.text}</p> : <></>}
        </div>
    )
}

export default SomethingItem;