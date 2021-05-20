import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const App = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const images = {
    img1: (
      <Image
        source={require('./components/img/menu.png')}
        style={{width: 25, height: 25}}
      />
    ),
    img2: (
      <Image
        source={require('./components/img/male.png')}
        style={{width: 80, height: 80}}
      />
    ),
    img3: (
      <Image
        source={require('./components/img/female.png')}
        style={{width: 58, height: 87}}
      />
    ),
  };

  const inputs = {
    heightInput: (
      <TextInput
        placeholder="Enter height in meters"
        placeholderTextColor="#fff"
        style={styles.input}
        onChangeText={height => setHeight(height)}
      />
    ),
    weightInput: (
      <TextInput
        placeholder="Your weight in kg"
        placeholderTextColor="#fff"
        style={[styles.input, {marginLeft: 25, width: 130}]}
        onChangeText={weight => setWeight(weight)}
      />
    ),
    ageInput: (
      <TextInput
        placeholder="Your age"
        placeholderTextColor="#fff"
        style={[styles.input, {marginLeft: 25, width: 130}]}
      />
    ),
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {images.img1}
        <Text style={styles.headerText}>BMI CALCULATOR</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity style={styles.innerContainers}>
          {images.img2}
          <Text style={styles.iconText}>MALE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerContainers}>
          {images.img3}
          <Text style={styles.iconText}>FEMALE</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: 30,
          paddingTop: 10,
          width: 360,
          height: 150,
          backgroundColor: '#2E5964',
          borderRadius: 3,
        }}>
        <Text style={styles.iconText}>HEIGHT</Text>
        {inputs.heightInput}
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          justifyContent: 'space-around',
        }}>
        <View style={[styles.innerContainers, {height: 200}]}>
          <Text style={styles.iconText}>WEIGHT</Text>
          {inputs.weightInput}
        </View>
        <View style={[styles.innerContainers, {height: 200}]}>
          <Text style={styles.iconText}>AGE</Text>
          {inputs.ageInput}
        </View>
      </View>
      <Button
        title="Calculate Your BMI"
        onPress={() => setBmi(weight / (height * height))}
      />
      <Text style={[styles.headerText, {paddingLeft: 10, margin: 20}]}>
        Your BMI : {bmi.toFixed(2)}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00183A',
  },
  header: {
    height: 120,
    flexDirection: 'row',
    paddingTop: 70,
    paddingLeft: 20,
    backgroundColor: '#00316E',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingLeft: 70,
  },
  innerContainers: {
    width: 170,
    height: 170,
    backgroundColor: '#2E5964',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  iconText: {
    fontSize: 22,
    color: '#fff',
    paddingTop: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    color: '#fff',
    borderColor: '#fff',
    height: 40,
    width: 200,
    margin: 20,
    marginLeft: 75,
    paddingLeft: 10,
  },
});

// //state example
// class App extends React.Component {
//   state = {count: 0};

//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text style={{fontSize: 40}}>{this.state.count}</Text>
//         <Button
//           title="Update"
//           onPress={() => {
//             this.setState({count: this.state.count + 1});
//           }}
//         />
//       </View>
//     );
//   }
// }

// // useState Hook basic example
// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button title="(-) Update" onPress={() => setCount(count - 1)} />
//       <Text style={{fontSize: 40}}>{count}</Text>
//       <Button title="(+) Update" onPress={() => setCount(count + 1)} />
//     </View>
//   );
// };

export default App;
