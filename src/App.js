import { useState, useEffect } from 'react';
import './App.css';
import UploadedPage from './components/UploadedPage';
import LoadingPage from './components/LoadingPage';
import UploadPage from './components/UploadPage';
import { MyContext } from './contexts/MyContext';

function App() {
	const [isUploading, setIsUploading] = useState(false);
	const [uploaded, setUploaded] = useState(false);
	const [uploadedImage, setUploadedImage] = useState();

	useEffect(() => {
		// console.log('Component Mounted');
	});

	return (
		<MyContext.Provider value={{ setIsUploading, setUploaded, uploadedImage, setUploadedImage }}>
			<div className='App-container'>
				{!isUploading && !uploaded ? <UploadPage /> : null}
				{isUploading && !uploaded ? <LoadingPage /> : null}
				{!isUploading && uploaded ? <UploadedPage /> : null}
			</div>
		</MyContext.Provider>
	);
}

export default App;
