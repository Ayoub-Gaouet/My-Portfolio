interface GradientTitleProps {
    text: string;
}
export default function GradientTitle({text}: GradientTitleProps) {
    return (
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#6781DD] to-[#374577] text-transparent bg-clip-text mb-10">
            {/*Apprenez à me connaître*/}
            {text}
        </h2>
    )
}

