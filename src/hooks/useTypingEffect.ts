import { useState, useEffect } from 'react';

export const useTypingEffect = (texts: string[], speed: number = 100, delay: number = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        const handleTyping = () => {
            const currentText = texts[currentIndex];

            if (!isDeleting) {
                setDisplayText(currentText.substring(0, displayText.length + 1));

                if (displayText === currentText) {
                    timeout = setTimeout(() => setIsDeleting(true), delay);
                } else {
                    timeout = setTimeout(handleTyping, speed);
                }
            } else {
                setDisplayText(currentText.substring(0, displayText.length - 1));

                if (displayText === '') {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                } else {
                    timeout = setTimeout(handleTyping, speed / 2);
                }
            }
        };

        timeout = setTimeout(handleTyping, speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex, texts, speed, delay]);

    return displayText;
};
