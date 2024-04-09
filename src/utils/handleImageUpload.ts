// export const handleImageUpload = (file: File) => {

//     const uploadToFirebase = async (file: File) => {
//         let downloadUrl: string;
//         const storageRef = ref(stroage, file.name);
//         const uploadTask = uploadBytesResumable(storageRef, file);
//          await uploadTask.on(
//           'state_changed',
//           null,
//           (error) => {
//             console.log(error);
//           },
//           () => {
//             getDownloadURL(uploadTask.snapshot.ref).then(
//               (fireStoreFileUrl) => (downloadUrl = fireStoreFileUrl)
//               return downloadUrl;
//             );
//           }
//         );
//       };
//       const handleUploadImage = () => {
//         const input = document.createElement('input');
//         input.type = 'file';
//         input.accept = 'image/png, image/jpeg';
//         input.click();
//         setHasFileError(false);
//         input.addEventListener('change', (e: any) => {
//           const file = e.target.files[0];
//           const { size } = file;
//           console.log({ size, file, maxFileSizeInMB });
//           if (size > maxFileSizeInMB * 1024 * 1024) {
//             setHasFileError(true);
//             return;
//           }
//           const url = uploadToFirebase(file);
//           console.log(url);
//         });
//       };

// };
