import React, { useContext, useMemo, useEffect, useCallback } from 'react';
import { MyContext } from '../contexts/MyContext';
import styles from '../styles/Upload.module.css';
import { useDropzone } from 'react-dropzone';
import imageLogo from '../Assets/image.svg';

function UploadPage() {
	const { setIsUploading, setUploadedImage, setUploaded } = useContext(MyContext);

	// const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
	// 	// console.log(acceptedFiles);
	// 	// console.log(rejectedFiles);
	// }, []);

	const onDropAccepted = useCallback((acceptedFiles) => {
		console.log(acceptedFiles[0]);
		setUploadedImage(acceptedFiles[0]);
		setIsUploading(true);
		// setUploaded(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, open } = useDropzone({
		accept: {
			'image/*': ['.png', '.jpeg', '.jpg'],
		},
		onDropAccepted,
	});

	// const handleClick = () => {
	// 	setIsUploading(true);
	// 	// setUploaded(true);
	// };

	const styleDropzone = useMemo(
		() => `${styles.dropzone} ${isFocused ? styles.focused : ''} ${isDragAccept ? styles.accept : ''} ${isDragReject ? styles.reject : ''}`,
		[isFocused, isDragAccept, isDragReject]
	);

	// useEffect(() => {
	// 	console.log(getInputProps());
	// }, []);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Upload Your Image</h1>
			<div {...getRootProps({ className: styleDropzone })}>
				<input {...getInputProps()} />
				<div className={`${styles.flex} ${styles.imageContainer}`}>
					<img src={imageLogo} alt='imageLogo' />
					<p className={styles.desc}>Drag & Drop your image here</p>
					{/* {isDragAccept ? 'Drag Actice' : 'Drop files here'} */}
				</div>
			</div>
			<p className={styles.textColor}>Or</p>
			<button type='button' onClick={open} className={styles.btn}>
				Choose a File
			</button>
		</div>
	);
}

export default UploadPage;
