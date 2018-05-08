import * as React from 'react';

export interface MinusIconProps {
    className?: string;
}

export default function MinusIcon(props: MinusIconProps) {
    return (
        <svg
            className={props.className !== undefined ? props.className : ''}
            version="1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2000 2000"
        >
            <path d="M0 1000v250h2000V750H0v250z" />
        </svg>
    );
}
