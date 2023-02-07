import {
  ActivityIndicator,
  Button,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderSearchTextInput from '../../../components/HeaderSearchTextInput';
import CustomSearchTextInput from '../../../components/CustomSearchTextInput';
import {normalize} from '../../../utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
// import {getCategoryApi, getHomeApi} from './action';
import {FlatList} from 'react-native-gesture-handler';
import {getCategoryApi, getHomeApi} from './action';
import CategoryReducer from './reducer';
import {ALL_CATEGORY} from '../../../utils/types';
import {getCategoryList} from './Electronics/action';
import {images} from '../../../utils/images';
import Loader from '../../../components/Loader';
import {debounce} from 'lodash';
import {clockRunning} from 'react-native-reanimated';
const {width} = Dimensions.get('screen');
const HomeScreen = () => {
  const [text, setText] = useState('');
  const [loader, setLoader] = useState<boolean>(false);
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const [Homedata, setHomeData] = useState<any>([]);
  const [categoryData, setCategoryData] = useState([]);
  // const {CATEGORY_DATA} = useSelector((store: any) => store.homeReducer);
  // const {HOME_DATA} = useSelector((store: any) => store.homeReducer);
  useEffect(() => {
    // console.log('first usefect');
    setLoader(true);
    dispatch(
      getCategoryApi(
        (response: any) => {
          // console.log('fdddds>>>>>>>>>??????', response?.status);
          setCategoryData(response?.data);
          if (response?.status === 200) {
            setLoader(false);
          }
        },
        (errorAPI: any) => {
          console.log('errrorr', errorAPI);
          // setCode(errorAPI.response?.data?.statusCode);
          setLoader(false);
        },
      ),
    );
    setLoader(false);
  }, []);

  useEffect(() => {
    setLoader(true);
    dispatch(
      getHomeApi(
        (response: any) => {
          console.log('fdddds>>>>>>>>>??????', response?.data);
          setHomeData(response?.data);
          if (response?.status === 200) {
            setLoader(false);
          }
        },
        (errorAPI: any) => {
          console.log('errrorr', errorAPI);
          setLoader(false);
        },
      ),
    );
    // setLoader(false);
  }, []);

  // const HandleChangeText = (text: any) => {
  //   setText(text);
  // };

  //  const debounceFunction=debounce((HandleChangeText,500)=>{

  //  },100)

  const handleSearch = debounce(text => {
    setText(text);
    console.log('debounce--------------------------88&&&&&&');
    setLoader(false);
  }, 1000);

  let filterData = Homedata?.filter((item: any) => {
    return item?.title.toLowerCase().includes(text.toLowerCase());
  });

  const categoryList = (item: any, index: any) => {
    console.log('item index', item, index);
    switch (index) {
      case 0:
        navigation.navigate(
          'Electronics',
          dispatch(getCategoryList('electronics')),
        );
        break;
      case 1:
        navigation.navigate('Jewelary', dispatch(getCategoryList('jewelery')));
        break;
      default:
        break;
    }
  };

  const _renderItem = ({item, index}: any) => {
    // console.log('cfgvhjkl;', item);
    return (
      <View style={styles.categoryList}>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            categoryList(item, index);
          }}>
          <Text style={styles.categoryTxt}>{item}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const _homeRender = ({item}: any) => {
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
            <Text style={styles.priceColor}>${item?.price}</Text>
            <View style={styles.ratingView}>
              <Text style={styles.ratetxt}>{item?.rating?.rate}</Text>
              <Image style={styles.rateImg} source={images?.star} />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const _listEmptyComponent = () => {
    return (
      <View style={styles.listEmpty}>
        <Text style={styles.noResult}>{'No result Found'}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainHead}>
        <HeaderSearchTextInput />
        <CustomSearchTextInput
          placeholder="Search by Product,Brand & more..."
          // value={text}
          onChangeText={(text: any) => {
            setLoader(true);
            handleSearch(text);
          }}
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={categoryData}
        renderItem={_renderItem}
        horizontal
      />
      <FlatList
        data={filterData}
        renderItem={_homeRender}
        ListEmptyComponent={_listEmptyComponent}
      />
      {loader && <Loader isVisible />}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainHead: {
    backgroundColor: '#e1e1e1',
    height: normalize(120),
  },
  categoryList: {
    height: normalize(30),
    justifyContent: 'space-evenly',
    paddingHorizontal: normalize(15),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  categoryTxt: {
    fontSize: 18,
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
    marginTop: normalize(15),
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
  indicator: {
    position: 'absolute',
    right: normalize(180),
    top: normalize(250),
  },
});
