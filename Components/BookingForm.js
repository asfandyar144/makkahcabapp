
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ScrollView, ActivityIndicator, WebView, Alert } from 'react-native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const desiredWidthPercentage = 100;
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown';
import CountryCodePicker from './CountryCodePicker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [whatsapp, setWhatsapp] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [routesList, setRoutesList] = useState([]);
  const [carsList, setCarList] = useState([]);
  const [carInfo, setCarInfo] = useState({});
  const [disableSubmit, setDisableSubmit] = useState(true);
  const handleDropdownSelect = (option) => {
    console.log("sELECTED iTEM")
    console.log(option.pickUpLocation);
    let pickUp = option.pickUpLocation;
    let dropOff = option.dropOffLocation;
    const result = routesList.filter((r) => {
      if (r.pickUpLocation == pickUp && r.dropOffLocation == dropOff) {
        return r.result;
      }
    });
    console.log(result);
    setCarList(result)
    setSelectedOption(`${pickUp}->${dropOff}`);
  };

  const handleFormSubmit = async () => {
    console.log("Form submit called")
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      console.log(Number(`${whatsapp}`))
      let body = {
        'pickup': selectedOption,
        'name': name,
        'email': email,
        'number': `${phone}`,
        'whatsapp': Number(`${whatsapp}`),
        'date': selectedDate,
        'time': selectedTime,
        'carname': carInfo.carname,
        'fare': `${carInfo.fare} SAR`
      }
      let agent = await AsyncStorage.getItem("user");
      agent = JSON.parse(agent)
      if (agent && agent.id) {
        body.IfAgentLoginId = agent.id;
      }
      console.log(body);
      const response = await axios.post('https://node.cabmakkah.com/api/v1/addBooking', body);

      // Handle the API response
      if (response.status === 200) {
        setPhone('');
        setEmail('');
        setName('');
        setCountryCode('');
        setSelectedOption('');
        setShowDatePicker(false);
        setShowTimePicker(false);
        setIsLoading(false);
        setWhatsapp('');
        setSelectedDate('');
        setSelectedTime('');
        setRoutesList([]);
        setCarList([]);
        setCarInfo([]);
        Alert.alert('Success', 'Form data submitted successfully');
        console.log('Form data submitted successfully');
      } else {
        console.log('Error submitting form data');
        Alert.alert('Unsuccessful', 'Form data is not submitted successfully');
      }
    } catch (error) {
      console.log('Error :', error);
      if (error.response) {
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
      }

    }
  };

  const handleDateButtonPress = () => {
    setShowDatePicker(true);
  };

  const handleTimeButtonPress = () => {
    setShowTimePicker(true);
  };

  const handleDateChange = (event, selected) => {
    setShowDatePicker(false);
    if (selected) {
      setSelectedDate(selected);
    }
  };

  const handleTimeChange = (event, selected) => {
    setShowTimePicker(false);
    if (selected) {
      setSelectedTime(selected);
    }
  };

  const handlePhoneChange = (text) => {
    // Remove any non-digit characters from the input
    const formattedText = text.replace(/[^0-9]/g, '');
    setPhone(formattedText);
  };

  const handleCountryCodeSelect = (code) => {
    setCountryCode(code);
    // Remove the country code from the existing phone and whatsapp values
    const newPhone = phone.replace(countryCode, '');
    const newWhatsapp = whatsapp.replace(countryCode, '');

    // Set the new country code and updated phone and whatsapp values
    setPhone(code + newPhone);
    setWhatsapp(code + newWhatsapp);
  };

  const getRoutesList = async () => {
    try {
      console.log("Get PACKAGE LIST CALLED")
      const response = await axios.get('https://node.cabmakkah.com/api/v1/getRoutesList')
      setRoutesList(response?.data?.data);
    } catch (error) {
      console.log("Error in car list", error)

    }
  }
  const getCarInfo = async (carInfo) => {
    setCarInfo(carInfo)
    console.log(carInfo)
  }
  useEffect(() => {
    console.log("Use Effect called")
    async function fetchData() {
      try {
        await getRoutesList()
      } catch (error) {
        // Handle any errors
      }
    }

    fetchData(); // Call the async function

  }, []);
  useEffect(() => {
    if (name && email && phone && countryCode && whatsapp && selectedOption && selectedDate && selectedTime && carInfo) {
      setDisableSubmit(false); // Enable submit button
    } else {
      setDisableSubmit(true); // Disable submit button
    }
  }, [name, email, phone, countryCode, whatsapp, selectedOption, selectedDate, selectedTime, carInfo]);
  return (
    <ScrollView contentContainerStyle={styles.containerScroll}>
      <View style={styles.container}>

        <View style={[styles.dropdownContainer, { backgroundColor: '#ffc61a' }]}>
          <SelectDropdown
            data={routesList}
            onSelect={handleDropdownSelect}
            buttonTextAfterSelection={(selectedItem, index) => {
              return `${selectedItem.pickUpLocation}->${selectedItem.dropOffLocation}`;
            }}
            rowTextForSelection={(item, index) => {
              return `${item.pickUpLocation}->${item.dropOffLocation}`;
            }}
            // defaultButtonText="Select a Location"
            dropdownStyle={{
              backgroundColor: 'white',
              width: '91%',
              marginTop: -40
            }}
            buttonStyle={{
              width: '100%',
              backgroundColor: '#ffc61a',
              borderRadius: 5,
              height: 40,
            }}
            renderCustomizedButtonChild={(selectedItem, index) => (
              <Text style={styles.defaultButtonText}>
                {selectedItem ? `${selectedItem.pickUpLocation}->${selectedItem.dropOffLocation}` : 'Select a Location'}
              </Text>
            )}
          />
        </View>

        <TouchableOpacity style={styles.dateButton} onPress={handleDateButtonPress}>
          <Text style={styles.buttonText}>
            Select Date: {selectedDate ? selectedDate.toDateString() : 'Not Selected'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.timeButton} onPress={handleTimeButtonPress}>
          <Text style={styles.buttonText}>
            Select Time: {selectedTime ? selectedTime.toTimeString().slice(0, 5) : 'Not Selected'}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        {showTimePicker && (
          <DateTimePicker
            value={selectedTime || new Date()}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}
        <View style={styles.selectCarContainer}>
          <View style={styles.selectCarHeading}>
            <Text style={styles.selectCarHeadingText}>Select a car</Text>
          </View>

          <View style={styles.selectCar}>
            {carsList && carsList.length > 0 && carsList[0].result.map((c) => {
              return <React.Fragment key={c._id}>
                <TouchableOpacity style={[styles.Carrchild, carInfo._id === c._id && { borderColor: 'red' } // Update the border color for the selected car
                ]} onPress={() => getCarInfo(c)}>
                  <Image source={{ uri: `https://node.cabmakkah.com/images/${c.img}` }} style={styles.image} />
                  <View style={styles.carContent}>
                    <Text style={styles.carName}>Car Name:</Text>
                    <Text style={styles.carNameValue}>{c.carname}</Text>
                  </View>
                  <View style={styles.carContent}>
                    <Text style={styles.carName}>Fare:</Text>
                    <Text style={styles.carNameValue}>{c.fare} SAR</Text>
                  </View>
                </TouchableOpacity>
              </React.Fragment>
            })}
          </View>
        </View>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="white"
        />
        <CountryCodePicker onSelectCountryCode={handleCountryCodeSelect} />
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          placeholderTextColor="white"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          value={whatsapp}
          onChangeText={setWhatsapp}
          placeholder="Enter your WhatsApp number"
          placeholderTextColor="white"
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: disableSubmit ? 'gray' : '#ffc61a' },]} onPress={handleFormSubmit} disabled={disableSubmit}>
          {isLoading ? (
            <ActivityIndicator size="small" color="black" /> // Show loading animation
          ) : (
            <Text style={styles.buttonText}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: (width * desiredWidthPercentage) / 100,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    height: 40,
    justifyContent: 'center',
    paddingLeft: 8,
    marginBottom: 16,
    color: 'white',
  },
  dateButton: {
    backgroundColor: '#ffc61a',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 16,
  },
  timeButton: {
    backgroundColor: '#ffc61a',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 16,
  },
  selectCarContainer: {
    backgroundColor: '#ffc61a',
    marginBottom: 16
  },

  selectCarHeadingText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10
  },
  selectCar: {
    backgroundColor: '#ffc61a',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    // flexDirection: 'row',
  },
  Carrchild: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    margin: 2,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  carContent: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 8,
    alignItems: 'center',
  },
  carNameValue: {
    fontSize: 14,
    marginLeft: 8,
    marginTop: -7,
  },
  carName: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'white',
    color: 'white',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    backgroundColor: '#ffc61a',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    backgroundColor: '#ffc61a',
    borderRadius: 5,
    marginBottom: 16,
  },
  defaultButtonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  selectCarr: {
    width: '50%',
  }
});

export default BookingForm;


