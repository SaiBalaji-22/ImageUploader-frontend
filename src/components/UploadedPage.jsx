import React, { useContext, useEffect, useState } from 'react';
import styles from '../styles/UploadedPage.module.css';
import { MyContext } from '../contexts/MyContext';
import { BsCheckCircleFill } from 'react-icons/bs';

function UploadedPage() {
	const { uploadedImage } = useContext(MyContext);
	const [link, setLink] = useState('https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent');
	const [copied, setCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText(link);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};

	useEffect(() => {
		console.log(uploadedImage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className={styles.container}>
			<BsCheckCircleFill className={styles.checkIcon} />
			<h3 className={styles.message}> Uploaded Successfully! </h3>
			<img className={styles.image} src={URL.createObjectURL(uploadedImage)} alt='img'></img>
			<div className={styles.clipboardContainer}>
				<span className={styles.linkText}>{link}</span>
				<button className={styles.btn} onClick={handleCopy}>
					{copied ? 'Copied' : 'Copy Link'}
				</button>
			</div>
		</div>
	);
}
// BsCheckCircleFill
export default UploadedPage;
