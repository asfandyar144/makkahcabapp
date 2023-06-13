// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import { Dimensions } from 'react-native';
// const { width } = Dimensions.get('window');
// const desiredWidthPercentage = 100;
// import axios from 'axios'

// const OurCars = () => {
//   const [carList, setCarList] = useState([]);
//   const getCarList = async () => {
//     try {
//       const response = await axios.get('https://node.cabmakkah.com/api/v1/getCarList')
//       setCarList(response?.data?.data);
//       console.log(response?.data?.data)
//     } catch (error) {
//       console.log("Error in car list", error)

//     }
//   }
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         await getCarList()
//       } catch (error) {
//         // Handle any errors
//       }
//     }

//     fetchData(); // Call the async function
//   }, []);
//   return (
//     <View style={styles.container}>
//       {carList && carList.length > 0 && carList.map((c) => (
//         <React.Fragment key={c.id}>
//           <Text style={styles.text}>{c.carname}</Text>
//           <Image source={{ uri: `https://node.cabmakkah.com/images/${c.img}` }} style={styles.image} />
//         </React.Fragment>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     width: (width * desiredWidthPercentage) / 100,
//   },
//   image: {
//     width: (width * desiredWidthPercentage) / 100,
//     height: 200,
//     marginBottom: 16,
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
// });

// export default OurCars;



import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const desiredWidthPercentage = 100;
import axios from 'axios';

const OurCars = () => {
  const [carList, setCarList] = useState([]);

  const getCarList = async () => {
    try {
      const response = await axios.get('https://node.cabmakkah.com/api/v1/getCarList');
      setCarList(response?.data?.data);
      console.log(response?.data?.data);
    } catch (error) {
      console.log("Error in car list", error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        await getCarList();
      } catch (error) {
        // Handle any errors
      }
    }

    fetchData(); // Call the async function
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {carList &&
        carList.length > 0 &&
        carList.map((c) => (
          <View key={c._id} style={styles.carContainer}>
            <Text style={styles.text}>{c.carname}</Text>
            <Image source={{ uri: `https://node.cabmakkah.com/images/${c.img}` }} style={styles.image} />
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: (width * desiredWidthPercentage) / 100,
  },
  carContainer: {
    marginBottom: 16,
  },
  image: {
    width: (width * desiredWidthPercentage) / 100,
    height: 200,
    marginBottom: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default OurCars;


