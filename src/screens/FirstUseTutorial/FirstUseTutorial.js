import React from 'react';
import { useState } from 'react';
import { Page } from '../../../styles/layout';
import { Title, Subtitle } from '../../../styles/typography';
import { Button, ButtonText } from '../../../styles/buttons';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import firstImage from '../../../assets/imgs/Find_food_you_love_vector.png';
import secondaryImage from '../../../assets/imgs/Delivery_vector.png';
import tertiaryImage from '../../../assets/imgs/Live_tracking_vector.png';
import { Image, StyleSheet, Text, View } from 'react-native';

const FirstUseTutorial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const messages = [
    {
      title: 'Find Food You Love',
      description: 'Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep',
      image: {
        height: 294.81,
        width: 225.44,
        image: firstImage
      }
    }, 
    {
      title: 'Fast Delivery',
      description: 'Fast food delivery to your home, office wherever you are',
      image: {
        height: 307,
        width: 241.25,
        image: secondaryImage
      }
    },
    {
      title: 'Live Tracking',
      description: 'Real time tracking of your food on the app once you placed the order',
      image: {
        height: 313.26,
        width: 210.61,
        image: tertiaryImage
      }
    }
  ];

  console.log(activeSlide);

  function _renderItem({ item, index }) {
    return (
      <Image 
        style={{
          ...style.swipeImage, 
          width: item.width,
          height: item.height,
          marginVertical: ((325 - item.height) / 2),
          marginHorizontal: ((300 - item.width) / 2),
        }}
        source={item.image}
        key={index}
      />
    );
  }

  return (
    <Page>
      <View style={style.swipeContainer}>
        <SwiperFlatList
          index={activeSlide}
          showPagination
          scrollEnabled
          pagingEnabled
          onChangeIndex={({ index }) => {setActiveSlide(index)}}
          data={messages.map((message) => message.image)}
          renderItem={_renderItem}
          paginationStyle={{
            position: 'relative',
          }}
          paginationStyleItem={{ 
            height: 8, 
            width: 8,
            backgroundColor: '#D6D6D6',
            marginHorizontal: 4,
          }}
          paginationActiveColor="#FC6011"
        />
      </View>
      
      <Title style={style.messageTitle}>{ messages[activeSlide].title }</Title>
      <Subtitle style={style.messageDescription}>{ messages[activeSlide].description }</Subtitle>
      
      <Button
        style={{ backgroundColor: '#FC6011' }}
        onPress={() => setActiveSlide(activeSlide + 1)}
      >
        <ButtonText style={{ color: '#fff' }}>Next</ButtonText>
      </Button>
    </Page>
  );
}

const style = StyleSheet.create({
  swipeContainer: {
    width: 300,
    height: 350,
  },

  swipeImage: {
    marginVertical: 0,
    borderRadius: 10,
  },

  messageTitle: {
    marginTop: 32,
    height: 37,
  },

  messageDescription: {
    height: 58,
  }
});

export default FirstUseTutorial;