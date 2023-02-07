import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomSearchTextInput from '../../../../components/CustomSearchTextInput';
import {normalize} from '../../../../utils/dimensions';
import {useSelector} from 'react-redux';
import {images} from '../../../../utils/images';
const {height, width} = Dimensions.get('screen');
const Jewelary = () => {
  const {CategoryList} = useSelector((store: any) => store.categoryReducer);
  const [text, setText] = useState('');
  const _renderItem = ({item, index}: any) => {
    return (
      <View style={styles.containerRender}>
        <Image source={{uri: item?.image}} style={styles.renderImg} />
        <View>
          <Text numberOfLines={1} style={styles.titleStyle}>
            {item?.title}
          </Text>
          <Text style={styles.descStyle} numberOfLines={1}>
            {item?.description}
          </Text>
          <View style={styles.priceView}>
            <Text style={styles.priceColor}>${item.price}</Text>
            <View style={styles.ratingView}>
              <Text style={styles.ratetxt}>{item.rating.rate}</Text>
              <Image style={styles.rateImg} source={images.star} />
            </View>
          </View>
        </View>
      </View>
    );
  };
  const HandleChangeText = (text: any) => {
    console.log('onchange', text);
    setText(text);
  };
  let filterData = CategoryList?.filter((item: any) =>
    item?.title.toLowerCase().includes(text.toLowerCase()),
  );
  const _listEmptyComponent = () => {
    return (
      <View style={styles.listEmpty}>
        <Text style={styles.noResult}>{'No result Found'}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomSearchTextInput
        placeholder="Search by Product,Brand & more..."
        onChangeText={HandleChangeText}
      />
      <FlatList
        data={filterData}
        renderItem={_renderItem}
        ListEmptyComponent={_listEmptyComponent()}
      />
    </SafeAreaView>
  );
};

export default Jewelary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainHead: {
    backgroundColor: '#e1e1e1',
    height: normalize(120),
  },
  renderImg: {
    height: normalize(90),
    width: normalize(90),
    resizeMode: 'contain',
  },
  containerRender: {
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: 'light-grey',
    margin: normalize(6),
    padding: normalize(5),
    borderRadius: normalize(5),
    marginTop: normalize(10),
  },
  titleStyle: {
    width: (width * 2) / 3,
    fontSize: 18,
    fontWeight: '600',
  },
  descStyle: {
    width: (width * 2) / 3,
    textAlign: 'justify',
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(10),
  },
  headerView: {
    flexDirection: 'row',
  },
  priceColor: {
    color: 'green',
    fontSize: 18,
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratetxt: {
    fontSize: 18,
  },
  rateImg: {
    height: normalize(20),
    width: normalize(25),
  },
  listEmpty: {
    marginTop: normalize(50),
    alignItems: 'center',
  },
  noResult: {
    textAlign: 'center',
    color: 'red',
  },
});
