import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {

    const [ darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if (darkMode) { //checking to see if local storage is true or false
            document.body.classList.add('dark-mode'); //if its true add dark mode
        } else {
            document.body.classList.remove('dark-mode'); //if its false remove dark mode
        }
    }, [ darkMode ]); // darmode in the dependecy array to only run when that changes

    return [ darkMode, setDarkMode ]
};

export default useDarkMode;