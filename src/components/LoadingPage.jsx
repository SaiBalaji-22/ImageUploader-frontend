import React, { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';
import styles from '../styles/LoadingPage.module.css';

function LoadingPage() {
	const { setIsUploading, setUploaded } = useContext(MyContext);

	// const handleClick = () => {
	// 	setIsUploading(false);
	// 	setUploaded(true);
	// };

	return (
		<div className={styles.container}>
			<h1>LoadingPage</h1>
		</div>
	);
}

export default LoadingPage;
