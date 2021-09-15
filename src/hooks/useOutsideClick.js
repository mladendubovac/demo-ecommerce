import { useEffect, useState } from 'react';

export const OutsideClick = (ref) => {
	const [isClicked, setIsClicked] = useState();

	useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsClicked(true);
            }
            return setIsClicked(false);
        }

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);

	return isClicked;
};
