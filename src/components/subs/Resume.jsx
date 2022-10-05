import React from 'react';
import PDF from '../assets/ryanr_resume.pdf';

export default function Resume() {
    return (
        <>
            <object className="resume" data={PDF} type="application/pdf" />
        </>
    )
}