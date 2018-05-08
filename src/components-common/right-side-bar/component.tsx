import * as React from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '~/images/icons/close/component';

import './style.css';

export interface RightSideBarProps {
    children?: any;
    className?: string;
    closeRouteTo: string;
}

export default function RightSideBar(props: RightSideBarProps) {
    return (
        <div className={`right-side-bar ${props.className !== undefined ? props.className : ''}`}>
            <div className="right-side-bar-header">
                <Link className="right-side-bar-header-btn" to={props.closeRouteTo}>
                    <CloseIcon />
                </Link>
            </div>
            {props.children}
        </div>
    );
}
