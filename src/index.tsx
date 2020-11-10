import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import GeoLocation from '@react-native-community/geolocation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#06C',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  btnGeo: {
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FC0',
    borderRadius: 5,
  },
  btnGeoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  simpleContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  simpleText: {
    fontSize: 14,
    color: '#fff',
  },
});

const App: React.FC = () => {
  const [position, setPosition] = useState({
    lat: null,
    lng: null,
  });

  const requestGeoLocation = async () => {
    GeoLocation.getCurrentPosition(
      (pos) => {
        const {latitude, longitude} = pos.coords;
        setPosition({
          lat: latitude,
          lng: longitude,
        });
      },
      (err) => {
        Alert.alert('Erro', 'Permissão de acesso não autorizada!');
      },
    );
  };

  /*
  const requestGeoLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão de Geolocalização',
          message: 'Deseja permitir a sua Geolocalização?',
          buttonNegative: 'Não',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Você pode usar a geolocalização');
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };
  */
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FBS</Text>
      <TouchableOpacity onPress={requestGeoLocation} style={styles.btnGeo}>
        <Text style={styles.btnGeoText}>Ativar Geolocalização</Text>
      </TouchableOpacity>
      <View style={styles.simpleContainer}>
        <Text style={styles.simpleText}>Latitude: {position.lat}</Text>
        <Text style={styles.simpleText}>Longitude: {position.lng}</Text>
      </View>
    </View>
  );
};

export default App;
