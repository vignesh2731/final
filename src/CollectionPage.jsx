import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function CollectionPage() {
  const [collections, setCollections] = useState([]);
  const [newCollection, setNewCollection] = useState('');
  const [collectionImages, setCollectionImages] = useState([
    [], [], [], [], [], [], [], []
  ]);

  const handleAddCollection = () => {
    if (newCollection.trim() !== '') {
      setCollections([...collections, newCollection]);
      setNewCollection('');
      setCollectionImages([...collectionImages, []]); 
    }
  };

  const handleRemoveCollection = (index) => {
    const updatedCollections = [...collections];
    updatedCollections.splice(index, 1);
    setCollections(updatedCollections);
    const updatedImages = [...collectionImages];
    updatedImages.splice(index, 1);
    setCollectionImages(updatedImages);
  };

  const onDrop = (acceptedFiles, index) => {
    const updatedImages = [...collectionImages];
    updatedImages[index] = acceptedFiles;
    setCollectionImages(updatedImages);
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="collection-page">
      <h1>Add your collection here</h1>
      <input
        type="text"
        placeholder="Enter collection name"
        value={newCollection}
        onChange={(e) => setNewCollection(e.target.value)}
      />
      <button onClick={handleAddCollection}>Add</button>

      <h2>Your Collections</h2>
      <div className="collection-grid">
        {collections.map((collection, index) => (
          <div key={index} className="collection-item">
            <p>{collection}</p>
            <div className="image-dropzone">
              <div {...getRootProps()} {...getInputProps()} />
              {collectionImages[index].map((file, fileIndex) => (
                <img key={fileIndex} src={URL.createObjectURL(file)} alt="Collection Image" />
              ))}
            </div>
            <button onClick={() => handleRemoveCollection(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;