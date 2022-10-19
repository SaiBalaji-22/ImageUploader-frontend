import React, { useContext } from 'react';
import { useEffect } from 'react';
import { MyContext } from '../contexts/MyContext';
import styles from '../styles/LoadingPage.module.css';
import axios from 'axios';

function LoadingPage() {
	const API_URL = '';
	const { setIsUploading, setUploaded, uploadedImage, setUploadedImage } = useContext(MyContext);

	useEffect(() => {
		// axios.post(`${API_URL}/upload`, {});
		setTimeout(() => {
			setIsUploading(false);
			setUploaded(true);
		}, 5000);
		// return () => {
		// 	// setUploadedImage({});
		// };
	}, []);

	return (
		<div className={styles.container}>
			<h3 className={styles.message}>Uploading...</h3>
			<div className={styles.loaderWrapper}>
				<div className={styles.loader}></div>
			</div>
		</div>
	);
}

export default LoadingPage;
