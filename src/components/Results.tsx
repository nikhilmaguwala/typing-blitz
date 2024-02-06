import { motion } from "framer-motion";
import { State } from "../hooks/useEngine";
import { formatPercentage } from "../utils/helpers";

const COUNTDOWN_SECONDS = 60;

const Results = ({
                     state,
                     errors,
                     accuracyPercentage,
                     total,
                     className = "",
                     totalWords,
                 }: {
    state: State;
    errors: number;
    accuracyPercentage: number;
    total: number;
    totalWords: number;
    className?: string;
}) => {
    if (state !== "finish") {
        return null;
    }

    const initial = { opacity: 0 };
    const animate = { opacity: 1 };

    const calculateWPM = (totalWords: number, time: number) => {
        return Math.floor((totalWords * 60) / time);
    }

    return (
        <motion.ul
            initial={initial}
            animate={animate}
            className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}
        >
            <motion.li
                initial={initial}
                animate={animate}
                transition={{duration: 0.3}}
                className="text-xl font-semibold"
            >
                Results
            </motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{duration: 0.3, delay: 0.5}}
            >
                Accuracy: {formatPercentage(accuracyPercentage)}
            </motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{duration: 0.3, delay: 1}}
                className="text-red-500"
            >
                Errors: {errors}
            </motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{duration: 0.3, delay: 1.4}}
            >
                Typed: {total}
            </motion.li>
            <motion.li
                initial={initial}
                animate={animate}
                transition={{duration: 0.3, delay: 1.9}}
            >
                Speed: {calculateWPM(totalWords, COUNTDOWN_SECONDS)} WPM
            </motion.li>
        </motion.ul>
    );
};

export default Results;