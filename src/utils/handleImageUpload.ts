import { storage } from '../../firebase.config';
import { getDownloadURL, uploadBytesResumable, ref } from 'firebase/storage';
export const handleImageUpload = async ({
  file,
  maxFileSizeInMB,
}: {
  file: File;
  maxFileSizeInMB: number;
}) => {
  let imageUploadUrl = '';
  const { size } = file;
  if (size > maxFileSizeInMB * 1024 * 1024) {
    throw new Error('File size too large');
  }
  const storageRef = ref(storage, file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    'state_changed',
    null,
    () => {
      throw new Error('file upload error');
    },
    async () => {
      const uploadUrl = await getDownloadURL(uploadTask.snapshot.ref);
      imageUploadUrl = uploadUrl;
    }
  );

  return imageUploadUrl;
};
