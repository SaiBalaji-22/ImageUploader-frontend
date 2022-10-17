import React, { useContext, useMemo, useEffect, useCallback } from 'react';
import { MyContext } from '../contexts/MyContext';
import styles from '../styles/Upload.module.css';
import { useDropzone } from 'react-dropzone';

function UploadPage() {
	const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
		console.log(acceptedFiles);
		console.log(rejectedFiles);
	}, []);
	const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, open } = useDropzone({
		accept: {
			'image/*': [],
		},
		onDrop,
	});

	const { setIsUploading, setUploaded } = useContext(MyContext);

	// const handleClick = () => {
	// 	setIsUploading(true);
	// 	// setUploaded(true);
	// };

	const styleDropzone = useMemo(
		() => `${styles.dropzone} ${isFocused ? styles.focused : ''} ${isDragAccept ? styles.accept : ''} ${isDragReject ? styles.reject : ''}`,
		[isFocused, isDragAccept, isDragReject]
	);

	// useEffect(() => {
	// });

	// useEffect(() => {
	// 	console.log(getRootProps({ className: styleDropzone }));
	// 	console.log(styleDropzone);
	// }, [isFocused, isDragAccept, isDragReject]);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Upload Your Image</h1>
			<div {...getRootProps({ className: styleDropzone })}>
				<input {...getInputProps()} />
				<p className={styles.desc}>Drag & Drop your image here</p>
				{isDragAccept ? 'Drag Actice' : 'Drop files here'}
			</div>
			<p>Or</p>
			<button type='button' onClick={open}>
				Choose a File
			</button>
		</div>
	);
}

export default UploadPage;