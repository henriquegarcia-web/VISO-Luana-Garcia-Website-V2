import React, { useRef, useState } from "react";
import * as S from "./style";
import * as G from "../../../../globalStyles";
import * as I from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "react-lazy-load-image-component/src/effects/blur.css";

import Modal from "react-bootstrap/Modal";

import { FiTarget } from "react-icons/fi";

import { services } from "../../../../data/services";

const index = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handleOpenModal = (image, title, modalContent) => {
    setModalShow(true);
    setModalInfo({ image, title, modalContent });
  };

  return (
    <S.ServicesContainer>
      <G.SectionHeader>
        <div>
          <FiTarget />
        </div>
        Serviços
      </G.SectionHeader>
      <G.SectionContent className="services__container">
        <S.SwiperContainer>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            modules={[Pagination, Navigation]}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
          >
            {services.map(
              ({
                image,
                placeholderImage,
                title,
                description,
                modalContent,
              }) => (
                <SwiperSlide>
                  <Slide
                    handleOpen={() =>
                      handleOpenModal(image, title, modalContent)
                    }
                    image={image}
                    placeholderImage={placeholderImage}
                    title={title}
                    description={description}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
          <div className="carousel__button prev" ref={navigationPrevRef}>
            <I.FiChevronLeft />
          </div>
          <div className="carousel__button next" ref={navigationNextRef}>
            <I.FiChevronRight />
          </div>
        </S.SwiperContainer>
      </G.SectionContent>

      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalInfo={modalInfo}
      />
    </S.ServicesContainer>
  );
};

export default index;

// -------------------------------------------- COMPONENTE DO SLIDE

const ModalComponent = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <S.ModalContent>
        <div className="modal__header">
          <h2>{props.modalInfo.title}</h2>
          <I.FiX onClick={props.onHide} />
        </div>
        <div className="modal__image_banner">
          <img src={props.modalInfo.image} alt="" />
        </div>
        <div className="modal__content">{props.modalInfo.modalContent}</div>
      </S.ModalContent>
    </Modal>
  );
};

const Slide = ({ image, placeholderImage, title, description, handleOpen }) => {
  return (
    <S.Slide onClick={handleOpen}>
      <div className="slide__image">
        <LazyLoadImage
          src={image}
          width={"100%"}
          height={"100%"}
          PlaceholderSrc={placeholderImage}
          effect="blur"
        />
      </div>

      <div className="slide__title">{title}</div>

      <div className="slide__description">{description}</div>

      <button>Mais informações</button>
    </S.Slide>
  );
};
