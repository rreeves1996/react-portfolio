import React from "react";

export default function Project(props) {
    return (
        <div className={props.side === "Solo" ? "slide solo-slide" : "slide group-slide"} data-id={props.id}>
            <a href={props.github}>
                <div className="slide-content">
                    <img src={props.img} alt="slide-preview" />
                    <div className="slide-title">{props.title}</div>
                    <div className="slide-text"><h6>{props.side === "Solo" ? (
                            <>
                                {props.text}
                            </>
                        ) : (
                            <>
                                <a href={props.repo}>Repository link</a>
                            </>
                        )}
                        </h6>
                    </div>
                </div>
            </a>
        </div>
    )
}