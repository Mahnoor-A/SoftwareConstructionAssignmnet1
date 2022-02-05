import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ImageBackground } from 'react-native-web';


const studentcard = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#97D49B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#E4A58F',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 35,
    top: 25,
    border: '3px solid #f3f3f3'
    
  },
  profilepicture: {
    left: 0,
    top: 50,
    position: 'relative',
    height: 200,
    width: 200,
    marginRight:6
  },
  space: {
    padding: 10
  },
  label: {
    fontWeight: 'bold',
    paddingTop: 50,
    top: 20,
    margin: 30
  },
  list: {
    margin: 30,
    flexDirection: 'column'
  }
});

export default function App() {
  return (
    <View studentcard={studentcard.layout}>  
    {/*Layout that put everything in center */}

      <View style={studentcard.card}> 
      {/* user card with flex direction row */}
  
        <Image
          style={studentcard.profilepicture}
          source={require('./assets/profilepicture.jpg')}
        />

        <View style={studentcard.list}> 
        {/* list is flex direction column */}

          <Text style={ studentcard.space}>
          <Text style={ studentcard.label}>Name: </Text>              Mahnoor Amjad</Text>

          <Text style={ studentcard.space}>
          <Text style={ studentcard.label}>Degree: </Text>            BSSE(A)</Text>
         
          <Text style={ studentcard.space}>
          <Text style={ studentcard.label}>Regitration no: </Text>19-ARID-1195</Text>

          <Text style={ studentcard.space}>
          <Text style={ studentcard.label}>Semester: </Text>        5th</Text>

          <Text style={ studentcard.space}>
          <Text style={ studentcard.label}>Course: </Text>            Software Construction</Text>

          <Text style={ studentcard.space}>
          <Text style={ studentcard.label}>University: </Text>      PMAS-Arid Agriculture University, Rawalpindi</Text>

          <StatusBar studentcard="auto" />

        </View>
  
      </View>
  
    </View>
  );
}

