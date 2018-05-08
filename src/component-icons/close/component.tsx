import * as React from 'react';

export interface CloseIconProps {
    className?: string;
}

export default function CloseIcon(props: CloseIconProps) {
    return (
        <svg
            className={props.className !== undefined ? props.className : ''}
            version="1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
        >
            <path d="M59.7 59.8C26.9 92.6 0 120 0 120.5s87.9 88.9 195.2 196.2L390.5 512 195.2 707.3C87.9 814.6 0 903 0 903.5c0 1.3 119.2 120.5 120.5 120.5.5 0 88.9-87.9 196.2-195.2L512 633.5l195.3 195.3C814.6 936.1 903 1024 903.5 1024c1.3 0 120.5-119.2 120.5-120.5 0-.5-87.9-88.9-195.2-196.2L633.5 512l195.3-195.3C936.1 209.4 1024 121 1024 120.5 1024 119.2 904.8 0 903.5 0c-.5 0-88.9 87.9-196.2 195.2L512 390.5 316.7 195.2C209.4 87.9 121 0 120.5 0c-.6 0-27.9 26.9-60.8 59.8z" />
        </svg>
    );
}
