export default function StarIcon({ width = 18, height = 18, fillColor = '#FFC633', className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 17"
            fill="none"
            className={className}
        >
            <path d="M9.04682 0.255005L11.666 5.89491L17.8393 6.6431L13.2848 10.8769L14.4809 16.9793L9.04682 13.956L3.61278 16.9793L4.80885 10.8769L0.254359 6.6431L6.42761 5.89491L9.04682 0.255005Z" fill={fillColor} />
        </svg>
    )

}