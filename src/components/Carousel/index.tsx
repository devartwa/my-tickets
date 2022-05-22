/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect, useState, useRef } from 'react';
import { ImageSource } from 'react-native-image-viewing/dist/@types';
import ImageView from 'react-native-image-viewing';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import {
  ImageContainer,
  MiniImages,
  PressableContainer,
  PressableContainerImage,
  PressableImage,
  ScrollImages,
} from './styles';

interface Props {
  imagesArray: Array<string>;
}

export function Carousel({ imagesArray }: Props) {
  const [indexImage, setIndexImage] = useState(0);
  const [modal, setModal] = useState(false);
  const [imagesDone, setImagesDone] = useState([]);
  const newImages: ImageSource[] | { uri: string }[] = [];
  const inputScroll = useRef(null);
  const theme = useTheme();

  const changeImageList = () => {
    imagesArray.forEach((i) => newImages.push({ uri: i }));

    if (newImages.length === imagesArray.length) {
      return setImagesDone(newImages);
    }
    return null;
  };

  useLayoutEffect(() => {
    changeImageList();
  }, [imagesArray]);

  const handleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const modalImages = () => (
    <ImageView
      images={imagesDone}
      imageIndex={indexImage}
      visible={modal}
      onRequestClose={handleModal}
      doubleTapToZoomEnabled
      swipeToCloseEnabled
    />
  );

  const scrollToPageNext = () => {
    inputScroll.current.scrollTo({
      x: 48 * indexImage,
      y: 0,
      animated: true,
    });
  };

  const scrollToPagePrev = () => {
    inputScroll.current.scrollTo({
      x: 48 * indexImage - 48,
      y: 0,
      animated: true,
    });
  };

  return (
    <React.Fragment>
      <PressableContainer onPress={handleModal}>
        <PressableImage source={{ uri: imagesArray[indexImage] }} />
      </PressableContainer>
      <ImageContainer>
        <PressableContainer
          onPress={() => {
            if (indexImage > 0) {
              setIndexImage(indexImage - 1);
              scrollToPagePrev();
            }
          }}
        >
          <Feather name="chevron-left" size={24} color={theme.colors.primary} />
        </PressableContainer>
        <ScrollImages
          showsHorizontalScrollIndicator={false}
          overScrollMode="never"
          snapToInterval={48}
          decelerationRate="fast"
          ref={inputScroll}
          scrollEnabled={false}
          horizontal
        >
          {imagesArray.map((image, index) => (
            <PressableContainerImage
              onPress={() => setIndexImage(index)}
              isActive={index === indexImage ? true : false}
              key={image}
            >
              <MiniImages source={{ uri: image }} />
            </PressableContainerImage>
          ))}
        </ScrollImages>
        <PressableContainer
          onPress={() => {
            if (indexImage < imagesArray.length - 1) {
              setIndexImage(indexImage + 1);
              scrollToPageNext();
            }
          }}
        >
          <Feather
            name="chevron-right"
            size={24}
            color={theme.colors.primary}
          />
        </PressableContainer>
      </ImageContainer>
      {modalImages()}
    </React.Fragment>
  );
}
