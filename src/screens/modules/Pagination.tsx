import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';
export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    callingApi(page);
  }, [page]);

  const callingApi = ({page}: any) => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?page=${page}`)
      .then((resp: any) => {
        console.log('====>>', resp.data);
        const ApiData = resp.data;
        setData([...data, ...ApiData]);
        setIsLoading(false);
      });
  };
  const _renderItem = ({item, index}: any) => {
    console.log('+++++', item);
    return (
      <View style={styles.renderStyle}>
        <Text style={{color: 'black'}}>{item.title}</Text>
      </View>
    );
  };
  const _onEndReached = () => {
    setPage(page + 1);
  };
  const renderFooter = () => {
    return (
      <View style={{paddingBottom: 30, zIndex: 1, backgroundColor: 'yellow'}}>
        <ActivityIndicator animating size="large" color={'red'} />
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'aqua'}}>
      <View>
        <FlatList
          data={data}
          renderItem={_renderItem}
          onEndReached={_onEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
        {/* {isLoading && <ActivityIndicator size={'large'} color="red" />} */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  renderStyle: {
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
