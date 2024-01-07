import { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

Modal.setAppElement("#root");

const Project = ({ projectData }) => {
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const openModal = (index) => {
    setModalImageIndex(index);
  };

  const closeModal = () => {
    setModalImageIndex(null);
  };

  return (
    <div className="project">
      <h4>{projectData.title}</h4>
      <div className="swiperContainer">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {projectData.images.map((image, index) => (
            <SwiperSlide
              key={index}
              className={modalImageIndex !== null ? "modalOpen" : ""}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                onClick={() => openModal(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal
        isOpen={modalImageIndex !== null}
        onRequestClose={closeModal}
        contentLabel="Image Carousel Modal"
        Style
        as
        needed
        style={{
          overlay: {
            position: "fixed",
          },
          content: {
            position: "absolute",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            backgroundColor: "#1f271b",
            maxWidth: "100%",
            opacity: "1",
            padding: "10px",
          },
        }}
      >
        <Swiper
          initialSlide={modalImageIndex}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="modalSwiper"
        >
          {projectData.images.map((image, index) => (
            <SwiperSlide key={index} className="modalSwiperSlide">
              <img src={image} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="modalButton" onClick={closeModal}>
          Close Image
        </button>
      </Modal>
      <p>{projectData.description}</p>
      <h5>Tech Stack:</h5>
      <p> {projectData.techStack}</p>
      {projectData.disclaimer && (
        <p className="disclaimer">{projectData.disclaimer}</p>
      )}
      {projectData.hostedLink && (
        <a
          href={projectData.hostedLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}
      {projectData.githubLink && (
        <a
          href={projectData.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      )}
      {projectData.githubLinkBackend && (
        <>
          <a
            href={projectData.githubLinkBackend}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Backend Code
          </a>
          <a
            href={projectData.githubLinkFrontend}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Frontend Code
          </a>
        </>
      )}
    </div>
  );
};

export default Project;
