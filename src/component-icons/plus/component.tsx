import * as React from 'react';

export interface PlusIconProps {
    className?: string;
}

export default function PlusIcon(props: PlusIconProps) {
    return (
        <svg
            className={props.className !== undefined ? props.className : ''}
            version="1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 626 626"
        >
            <path d="M235 117.5V235H0v156h235v235h156V391h235V235H391V0H235v117.5z" />
        </svg>
    );
}
