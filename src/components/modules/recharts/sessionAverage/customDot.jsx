/**
 * Return custom linechart dot
 * @returns {JSX.Element}
 */
export function CustomDot({cx, cy}) {
    return (
        <svg>
            <circle cx={cx} cy={cy} r={8} stroke="#FFFFFF0" fill="#FFFFFF75" />
            <circle cx={cx} cy={cy} r={4} stroke="white" fill="white" />
            <rect x={cx} y={0} width="321" height="295" fill="#00000020" />
        </svg>
    );
}