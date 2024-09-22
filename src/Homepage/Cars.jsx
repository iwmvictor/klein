import React, { useState } from "react";

import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import image1 from "./../assets/images/gallery/image (1).jpg";
import image2 from "./../assets/images/gallery/image (2).jpg";
import image3 from "./../assets/images/gallery/image (3).jpg";
import image4 from "./../assets/images/gallery/image (4).jpg";
import image5 from "./../assets/images/gallery/image (5).jpg";
import image6 from "./../assets/images/gallery/image (6).jpg";
import image7 from "./../assets/images/gallery/image (7).jpg";
import image8 from "./../assets/images/gallery/image (8).jpg";
import image9 from "./../assets/images/gallery/image (9).jpg";
import image10 from "./../assets/images/gallery/image (10).jpg";
import image11 from "./../assets/images/gallery/image (11).jpg";
import image12 from "./../assets/images/gallery/image (12).jpg";
import image13 from "./../assets/images/gallery/image (13).jpg";
import image14 from "./../assets/images/gallery/image (14).jpg";
import image15 from "./../assets/images/gallery/image (15).jpg";
import image16 from "./../assets/images/gallery/image (16).jpg";
import image17 from "./../assets/images/gallery/image (17).jpg";
import image18 from "./../assets/images/gallery/image (18).jpg";
import image19 from "./../assets/images/gallery/image (19).jpg";
import image20 from "./../assets/images/gallery/image (20).jpg";
import image21 from "./../assets/images/gallery/image (21).jpg";
import image22 from "./../assets/images/gallery/image (22).jpg";
import image23 from "./../assets/images/gallery/image (23).jpg";
import image24 from "./../assets/images/gallery/image (24).jpg";
import image25 from "./../assets/images/gallery/image (25).jpg";
import image26 from "./../assets/images/gallery/image (26).jpg";
import image27 from "./../assets/images/gallery/image (27).jpg";
import image28 from "./../assets/images/gallery/image (28).jpg";
import image29 from "./../assets/images/gallery/image (29).jpg";
import image30 from "./../assets/images/gallery/image (30).jpg";
import image31 from "./../assets/images/gallery/image (31).jpg";
import image32 from "./../assets/images/gallery/image (32).jpg";
import image33 from "./../assets/images/gallery/image (33).jpg";
import image34 from "./../assets/images/gallery/image (34).jpg";
import image35 from "./../assets/images/gallery/image (35).jpg";
import image36 from "./../assets/images/gallery/image (36).jpg";
import image37 from "./../assets/images/gallery/image (37).jpg";
import image38 from "./../assets/images/gallery/image (38).jpg";
import image39 from "./../assets/images/gallery/image (39).jpg";
import image40 from "./../assets/images/gallery/image (40).jpg";
import image41 from "./../assets/images/gallery/image (41).jpg";
import image42 from "./../assets/images/gallery/image (42).jpg";
import image43 from "./../assets/images/gallery/image (43).jpg";
import image44 from "./../assets/images/gallery/image (44).jpg";
import image45 from "./../assets/images/gallery/image (45).jpg";
import image46 from "./../assets/images/gallery/image (46).jpg";
import image47 from "./../assets/images/gallery/image (47).jpg";
import image48 from "./../assets/images/gallery/image (48).jpg";
import image49 from "./../assets/images/gallery/image (49).jpg";
import image50 from "./../assets/images/gallery/image (50).jpg";
import image51 from "./../assets/images/gallery/image (51).jpg";
import image52 from "./../assets/images/gallery/image (52).jpg";
import image53 from "./../assets/images/gallery/image (53).jpg";
import image54 from "./../assets/images/gallery/image (54).jpg";
import image55 from "./../assets/images/gallery/image (55).jpg";
import image56 from "./../assets/images/gallery/image (56).jpg";
import image57 from "./../assets/images/gallery/image (57).jpg";
import image58 from "./../assets/images/gallery/image (58).jpg";
import image59 from "./../assets/images/gallery/image (59).jpg";
import image60 from "./../assets/images/gallery/image (60).jpg";
import image61 from "./../assets/images/gallery/image (61).jpg";
import image62 from "./../assets/images/gallery/image (62).jpg";
import image63 from "./../assets/images/gallery/image (63).jpg";
import image64 from "./../assets/images/gallery/image (64).jpg";
import image65 from "./../assets/images/gallery/image (65).jpg";
import image66 from "./../assets/images/gallery/image (66).jpg";
import image67 from "./../assets/images/gallery/image (67).jpg";
import image68 from "./../assets/images/gallery/image (68).jpg";
import image69 from "./../assets/images/gallery/image (69).jpg";
import image70 from "./../assets/images/gallery/image (70).jpg";
import image71 from "./../assets/images/gallery/image (71).jpg";
import image72 from "./../assets/images/gallery/image (72).jpg";
import image73 from "./../assets/images/gallery/image (73).jpg";
import image74 from "./../assets/images/gallery/image (74).jpg";
import image75 from "./../assets/images/gallery/image (75).jpg";
import image76 from "./../assets/images/gallery/image (76).jpg";
import image77 from "./../assets/images/gallery/image (77).jpg";
import image78 from "./../assets/images/gallery/image (78).jpg";
import image79 from "./../assets/images/gallery/image (79).jpg";
import image80 from "./../assets/images/gallery/image (80).jpg";
import image81 from "./../assets/images/gallery/image (81).jpg";
import image82 from "./../assets/images/gallery/image (82).jpg";
import image83 from "./../assets/images/gallery/image (83).jpg";
import image84 from "./../assets/images/gallery/image (84).jpg";
import image85 from "./../assets/images/gallery/image (85).jpg";
import image86 from "./../assets/images/gallery/image (86).jpg";
import image87 from "./../assets/images/gallery/image (87).jpg";
import image88 from "./../assets/images/gallery/image (88).jpg";
import image89 from "./../assets/images/gallery/image (89).jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  image45,
  image46,
  image47,
  image48,
  image49,
  image50,
  image51,
  image52,
  image53,
  image54,
  image55,
  image56,
  image57,
  image58,
  image59,
  image60,
  image61,
  image62,
  image63,
  image64,
  image65,
  image66,
  image67,
  image68,
  image69,
  image70,
  image71,
  image72,
  image73,
  image74,
  image75,
  image76,
  image77,
  image78,
  image79,
  image80,
  image81,
  image82,
  image83,
  image84,
  image85,
  image86,
  image87,
  image88,
  image89,
];

const Cars = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const imagesPerPage = 9;

  // Calculate the total number of pages
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Get current images for the page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Handlers for Pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Modal Handlers
  const openModal = (index) => {
    setModalImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextModalImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevModalImage = () => {
    setModalImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="gallery">
      <div className="container">
        <div className="content">
          <div className="heading">
            <div>
              <h2>Discover our showcase</h2>
            </div>
            <div>
              <p>Explore what we have in our showroom waiting for you.</p>
            </div>
          </div>

          <div className="image-grid">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="image-item"
                onClick={() => openModal(indexOfFirstImage + index)}
              >
                <img src={image} alt={`Car ${index + 1}`} />
                <div className="overlay"></div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-icon" onClick={closeModal}>
              <FaTimes />
            </button>
            <img
              src={images[modalImageIndex]}
              alt={`Modal Car ${modalImageIndex + 1}`}
            />
            <div className="navigation">
              <button className="nav">
                <FaArrowLeft className="arrow" onClick={prevModalImage} />
              </button>
              <button className="nav">
                <FaArrowRight className="arrow" onClick={nextModalImage} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cars;
