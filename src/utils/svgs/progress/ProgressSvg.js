import "./ProgressSvg.css"

export default function ProgressSvg() {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="progressbar">
            <defs>
                <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#DA22FF" />
                    <stop offset="100%" stopColor="#9733EE" />
                </linearGradient>
            </defs>
            <circle className="circle" cx="80" cy="80" r="70" strokeLinecap="round" />
        </svg>
    );
}