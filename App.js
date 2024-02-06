import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';


export default function App() {
  return (
      <View style={styles.container}>
        <ImageBackground 
        source={imgFondo} //Llamada a la const de la ruta.
        style={styles.fondo}>
        
          {/* <Image
                source={require('./logImages/fondoImgBbva.jpg')}
                style={styles.fondo}
                /> */}

          <View style={styles.container0}>
            <View style={{flex: 1, alignItems: 'flex-start', padding: 15,}}><Text></Text></View>
            <View style={{flex: 1, alignItems: 'center', padding: 15,}}><Text style={{fontSize: 25, color: 'white',}}>BBVA</Text></View>
            <View style={{flex: 1, alignItems: 'flex-end', padding: 15,}}><Image
                source={require('./logImages/logMenu.jpg')}
                style={styles.imgSubmenu}
              /></View>
            
          </View>

          <View style={styles.container2}>
            
            <TouchableOpacity style={styles.logoUsr}>
              <Text style={styles.saludo}>US</Text> 
              </TouchableOpacity>
            <Text style={styles.saludo}>Hola Usuario</Text>
            
            <TouchableOpacity>
            <Text style={styles.cambioUsuario}>Cambiar usuario</Text> 
              </TouchableOpacity>
            
            <TouchableOpacity style={styles.boton}>
              <Text style={styles.botonText}>Iniciar sesión</Text> 
              </TouchableOpacity>
          </View>

          <View style={styles.container3}>
            <View>
              <Image
                source={require('./logImages/logToken.jpg')}
                style={styles.imgSubmenu2}
              />
            </View>
            <View>
              <Image
                  source={require('./logImages/logQR.jpg')}
                  style={styles.imgSubmenu2}
                />
            </View>
            <View>
              <Image
                  source={require('./logImages/logAyuda.jpg')}
                  style={styles.imgSubmenu2}
                />
            </View>
          </View>

        </ImageBackground>

        <StatusBar style="auto" />
      </View>
  );
}

const colorEmpresa = 'blue'; //blue (#0000ff)
const colorBoton = '#1e90ff'; //dodgerblue (#1e90ff)
const imgFondo = require('./logImages/fondoImgBbva1.jpg'); //Imagen de fondo
//const imgFondo = {uri: './logImages/fondoImgBbva1.jpg'};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: colorEmpresa,
    //alignItems: 'center',
    //justifyContent: 'flex-start',
  },
  fondo: {
    flex: 1,
    resizeMode: 'cover',
    //alignItems: 'center',
    //justifyContent: 'flex-start',
  },
  container0: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    //backgroundColor: colorEmpresa,
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 50,
  },
  container3: {
    flex: 3,
    flexDirection: 'row',
    //backgroundColor: colorEmpresa,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 15,
    //marginTop: 80,
  },
  logoUsr: {
    backgroundColor: '#00008b', //darkblue (#00008b)
    padding: 15, //Relleno
    marginVertical: 10,
    borderRadius: 35,
  },
  saludo: {
    fontSize: 25,
    color: 'white',
  },
  cambioUsuario: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#61dafb',
  },
  boton: {
    //alignItems: 'center',
    backgroundColor: colorBoton,
    padding: 15,
    marginTop: 20,
    borderRadius: 2,
  },
  botonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  imgSubmenu: {
    height: 20,
    width: 30,
    resizeMode: 'stretch',
  },
  imgSubmenu2: {
    height: 120,
    width: 120,
    resizeMode: 'stretch',
  }
});
