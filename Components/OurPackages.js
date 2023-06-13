import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity, Linking  } from 'react-native';
import { Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';



const { width } = Dimensions.get('window');
const desiredWidthPercentage = 100;
const desiredWidthPercentageHalf = 90;
const desiredWidthPercentageTable = 45;
import axios from 'axios'

const OurPackages = () => {

  const openWhatsAppChat = () => {
    const phoneNumber = '+966590566102'; // Replace with the desired phone number
    const message = 'Hello! I am interested in booking a cab.'; // Replace with the desired message
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    Linking.openURL(url)
      .catch(() => {
        console.log('Failed to open WhatsApp');
      });
  };

  const navigation = useNavigation();
  const handleBookNow = () => {
    navigation.navigate('BookingConfirmation'); // Navigate to the BookingConfirmationScreen
  };

  const [packageList, setPackageList] = useState([]);
  const getPackageList = async () => {
    try {
      console.log("Get PACKAGE LIST CALLED")
      const response = await axios.get('https://node.cabmakkah.com/api/v1/getPackageList')
      setPackageList(response?.data?.data);
      console.log(response?.data?.data)
    } catch (error) {
      console.log("Error in car list", error)

    }
  }
  useEffect(() => {
    console.log("Use Effect called")
    async function fetchData() {
      try {
        await getPackageList()
      } catch (error) {
        // Handle any errors
      }
    }

    fetchData(); // Call the async function
  }, []);
  

  return (
    <View style={styles.container}>
      {packageList && packageList.length > 0 && packageList.map((p) => {
        return <React.Fragment key={p._id}>
          <View style={styles.package}>
            <View style={styles.headerContainer}>
              <Text style={styles.titlePackage}>{p.name}</Text>
              <Text style={styles.titleCity}>{p.cityName}</Text>
            </View >
            <View style={styles.slider}>
              <Swiper style={styles.slider} showsButtons={true} nextButtonColor="red" showsPagination={false} autoplay={true} autoplayTimeout={3}>
                {
                  p.place0 && <View style={styles.slide}>
                    <Image source={{ uri: `https://node.cabmakkah.com/images/${p.placeImg0}` }} style={styles.image1} />
                    <Text style={styles.slideText} numberOfLines={6}>{p.packagedescription0}</Text>
                  </View>
                }
                {
                  p?.place1 && <View style={styles.slide}>
                    <Image source={{ uri: `https://node.cabmakkah.com/images/${p.placeImg1}` }} style={styles.image1} />
                    <Text style={styles.slideText} numberOfLines={6}>{p.packagedescription1}</Text>
                  </View>
                }
                {
                  p?.place2 && <View style={styles.slide}>
                    <Image source={{ uri: `https://node.cabmakkah.com/images/${p.placeImg2}` }} style={styles.image1} />
                    <Text style={styles.slideText} numberOfLines={6}>{p.packagedescription2}</Text>
                  </View>
                }
                {
                  p?.place3 && <View style={styles.slide}>
                    <Image source={{ uri: `https://node.cabmakkah.com/images/${p.placeImg3}` }} style={styles.image1} />
                    <Text style={styles.slideText} numberOfLines={6}>{p.packagedescription3}</Text>
                  </View>
                }
              </Swiper>
            </View>
            <View style={styles.tableContainer}>
              <View style={styles.tableRow}>
                <Text style={styles.tableData}>Duration</Text>
                <Text style={styles.tableData}>{p.duration} Hours</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableData}>Start Time</Text>
                <Text style={styles.tableData}>{p.startTime}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableData}>End Time</Text>
                <Text style={styles.tableData}>{p.endTime}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableData}>Average Fare</Text>
                <Text style={styles.tableData}>{p.fare}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableData}>Number Of Passengers</Text>
                <Text style={styles.tableData}>{p.numberOfPassanger}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.bookButton} onPress={openWhatsAppChat}>
                <Text style={styles.bookButtonText}>Book Package</Text>
              </TouchableOpacity>
            </View>
          </View>
        </React.Fragment>
      })}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  package: {
    width: (width * desiredWidthPercentageHalf) / 100,
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 8,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  titlePackage: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  titleCity: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 15,
  },
  slider: {
    height: 350,
    marginBottom: 16,

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    width: (width * desiredWidthPercentageHalf) / 100,
    resizeMode: 'cover',
    height: 250,
  },
  slideText: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    height: 150,
    backgroundColor: '#f7f7f7',
    width: '100%',
  },
  tableContainer: {
    width: (width * desiredWidthPercentageHalf) / 100,
    marginBottom: 15,
  },
  tableRow: {
    flexDirection: 'row',
    width: (width * desiredWidthPercentage) / 100,
  },
  tableData: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    width: (width * desiredWidthPercentageTable) / 100,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 5,
  },
  bookButton: {
    backgroundColor: '#ffc61a',
    padding: 10,
  },
  buttonWrapper: {
    Color: 'red', // Customize the button wrapper color
  },
});


export default OurPackages;







// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
// import { Dimensions } from 'react-native';
// import Swiper from 'react-native-swiper';
// import axios from 'axios';

// const { width } = Dimensions.get('window');
// const desiredWidthPercentage = 100;
// const desiredWidthPercentageHalf = 90;
// const desiredWidthPercentageTable = 45;

// const OurPackages = () => {
//   const [packageList, setPackageList] = useState([]);

//   const getPackageList = async () => {
//     try {
//       console.log("Get PACKAGE LIST CALLED");
//       const response = await axios.get('https://node.cabmakkah.com/api/v1/getPackageList');
//       setPackageList(response?.data?.data);
//       console.log(response?.data?.data);
//     } catch (error) {
//       console.log("Error in car list", error);
//     }
//   };

//   useEffect(() => {
//     console.log("Use Effect called");
//     async function fetchData() {
//       try {
//         await getPackageList();
//       } catch (error) {
//         // Handle any errors
//       }
//     }

//     fetchData(); // Call the async function
//   }, []);

//   const handleTextLayout = (event) => {
//     const { height } = event.nativeEvent.layout;
//     // You can use the height value here as needed
//   };

//   return (
//     <View style={styles.container}>
//       {packageList && packageList.length > 0 && packageList.map((p) => {
//         return (
//           <React.Fragment key={p._id}>
//             <View style={styles.package}>
//               <View style={styles.headerContainer}>
//                 <Text style={styles.titlePackage}>{p.name}</Text>
//                 <Text style={styles.titleCity}>{p.cityName}</Text>
//               </View>
//               <View style={styles.slider}>
//                 <Swiper style={styles.slider} showsButtons={true} showsPagination={false} autoplay={true} autoplayTimeout={3} activeDotColor="white">
//                   {p.place0 && (
//                     <View style={styles.slide}>
//                       <Image source={{ uri: `https://node.cabmakkah.com/images/${p.placeImg0}` }} style={styles.image1} />
//                       <Text
//                         style={styles.slideText}
//                         onLayout={handleTextLayout}
//                       >
//                         {p.packagedescription0}
//                       </Text>
//                     </View>
//                   )}
//                   {p.place1 && (
//                     <View style={styles.slide}>
//                       <Image source={{ uri: `https://node.cabmakkah.com/images/${p.placeImg1}` }} style={styles.image1} />
//                       <Text
//                         style={styles.slideText}
//                         onLayout={handleTextLayout}
//                       >
//                         {p.packagedescription1}
//                       </Text>
//                     </View>
//                   )}
//                   {p.place2 && (
//                     <View style={styles.slide}>
//                       <Image source={{ uri: `https://node.cabmakkah.com/images/${p.placeImg2}` }} style={styles.image1} />
//                       <Text
//                         style={styles.slideText}
//                         onLayout={handleTextLayout}
//                       >
//                         {p.packagedescription2}
//                       </Text>
//                     </View>
//                   )}
//                   {p.place3 && (
//                     <View style={styles.slide}>
//                       <Image source={{ uri: `https://node.cabmakkah.com/images/${p.placeImg3}` }} style={styles.image1} />
//                       <Text
//                         style={styles.slideText}
//                         onLayout={handleTextLayout}
//                       >
//                         {p.packagedescription3}
//                       </Text>
//                     </View>
//                   )}
//                 </Swiper>
//               </View>
//               <View style={styles.tableContainer}>
//                 <View style={styles.tableRow}>
//                   <Text style={styles.tableData}>Duration</Text>
//                   <Text style={styles.tableData}>{p.duration} Hours</Text>
//                 </View>
//                 <View style={styles.tableRow}>
//                   <Text style={styles.tableData}>Start Time</Text>
//                   <Text style={styles.tableData}>{p.startTime}</Text>
//                 </View>
//                 <View style={styles.tableRow}>
//                   <Text style={styles.tableData}>End Time</Text>
//                   <Text style={styles.tableData}>{p.endTime}</Text>
//                 </View>
//                 <View style={styles.tableRow}>
//                   <Text style={styles.tableData}>Average Fare</Text>
//                   <Text style={styles.tableData}>{p.fare}</Text>
//                 </View>
//                 <View style={styles.tableRow}>
//                   <Text style={styles.tableData}>Number Of Passengers</Text>
//                   <Text style={styles.tableData}>{p.numberOfPassanger}</Text>
//                 </View>
//               </View>
//               <View>
//                 <TouchableOpacity style={styles.bookButton}>
//                   <Text style={styles.bookButtonText}>Book Package</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </React.Fragment>
//         );
//       })}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#f7f7f7',
//   },
//   package: {
//     width: (width * desiredWidthPercentageHalf) / 100,
//     alignItems: 'center',
//     backgroundColor: 'white',
//     marginTop: 10,
//     borderRadius: 8,
//     padding: 16,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'rgba(0, 0, 0, 0.3)',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 4,
//       },
//       android: {
//         elevation: 8,
//       },
//     }),
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   titlePackage: {
//     flex: 1,
//     fontSize: 20,
//     fontWeight: 'bold',
//     paddingLeft: 15,
//   },
//   titleCity: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     paddingRight: 15,
//   },
//   slider: {
//     height: 300,
//     marginBottom: 16,
//   },
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image1: {
//     width: (width * desiredWidthPercentageHalf) / 100,
//     resizeMode: 'cover',
//     height: 200,
//   },
//   slideText: {
//     fontSize: 14,
//     color: 'black',
//     marginTop: 10,
//     backgroundColor: '#f7f7f7',
//     width: '100%',
//   },
//   tableContainer: {
//     width: (width * desiredWidthPercentageHalf) / 100,
//     marginBottom: 15,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     width: (width * desiredWidthPercentage) / 100,
//   },
//   tableData: {
//     borderBottomWidth: 1,
//     borderTopWidth: 1,
//     width: (width * desiredWidthPercentageTable) / 100,
//     borderLeftWidth: 1,
//     borderRightWidth: 1,
//     paddingLeft: 5,
//   },
//   bookButton: {
//     backgroundColor: '#ffc61a',
//     padding: 10,
//   },
//   bookButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// export default OurPackages;
