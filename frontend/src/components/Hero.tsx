import tokyo01frontImage from "../assets/tokyo01-front.svg";

function Hero() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold text-white animate-float">
                Welcome To <span className="text-primary animate-pulse">MY WORLD</span>
            </h1>

            <p className="text-muted-foreground text-center max-w-md mx-auto mt-3">
                Hello, World!
            </p>
        </div>
    )
}

export default Hero;