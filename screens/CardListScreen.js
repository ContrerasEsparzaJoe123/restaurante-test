import React, {useState, useEffect, Component} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import {data} from '../model/data';
import Card from '../components/Card';
import NewApi from '../apis/Restaurantes';

const CardListScreen = ({navigation}) => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    getRestaurantes();
  }, []);

  /*  const getRestaurantes = async () => {
    const response = NewApi.get('posts');
    console.log((await response).data);
  };*/

  function getRestaurantes() {
    NewApi.get('posts')
      .then(async function (response) {
        setRes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!res) {
    return null;
  }

  const renderItem = ({item}) => {
    return (
      <Card
        itemData={item}
        onPress={() => navigation.navigate('CardItemDetails', {itemData: item})}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={res}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'key' + index}
      />
    </View>
  );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
});
