// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const CountryCodePicker = ({ onSelectCountryCode }) => {
//   const [countryCode, setCountryCode] = useState('+1'); // Default country code

//   const countryCodes = [
//     { code: '+1', label: 'USA' },
//     { code: '+44', label: 'UK' },
//     { code: '+91', label: 'India' },
//     // Add more country codes as needed
//   ];

//   const handleCountryCodeSelect = (code) => {
//     setCountryCode(code);
//     onSelectCountryCode(code);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.pickerButton}>
//         <Text style={styles.pickerText}>{countryCode}</Text>
//       </TouchableOpacity>
//       {/* Render the country code options */}
//       {countryCodes.map((country) => (
//         <TouchableOpacity
//           key={country.code}
//           style={styles.countryButton}
//           onPress={() => handleCountryCodeSelect(country.code)}
//         >
//           <Text style={styles.countryText}>{country.label}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//   },
//   pickerButton: {
//     marginRight: 10,
//   },
//   pickerText: {
//     color: 'white',
//   },
//   countryButton: {
//     padding: 5,
//   },
//   countryText: {
//     color: 'white',
//   },
// });

// export default CountryCodePicker;




// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';

// const CountryCodePicker = ({ onSelectCountryCode }) => {
//   const [countryCode, setCountryCode] = useState('+1'); // Default country code
//   const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility state

//   const countryCodes = [
//     { code: '+1', label: 'USA' },
//     { code: '+44', label: 'UK' },
//     { code: '+91', label: 'India' },
//     // Add more country codes as needed
//   ];

//   const handleCountryCodeSelect = (code) => {
//     setCountryCode(code);
//     onSelectCountryCode(code);
//     setShowDropdown(false); // Hide dropdown after selection
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown); // Toggle dropdown visibility
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.pickerButton} onPress={toggleDropdown}>
//         <Text style={styles.pickerText}>{countryCode}</Text>
//       </TouchableOpacity>
//       <Modal
//         visible={showDropdown}
//         transparent
//         animationType="fade"
//         onRequestClose={() => setShowDropdown(false)}
//       >
//         <TouchableWithoutFeedback onPress={() => setShowDropdown(false)}>
//           <View style={styles.modalBackground}>
//             <View style={styles.dropdownContainer}>
//               <ScrollView style={styles.dropdownScroll}>
//                 {countryCodes.map((country) => (
//                   <TouchableOpacity
//                     key={country.code}
//                     style={styles.countryButton}
//                     onPress={() => handleCountryCodeSelect(country.code)}
//                   >
//                     <Text style={styles.countryText}>{country.label}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </ScrollView>
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//   },
//   pickerButton: {
//     marginRight: 10,
//   },
//   pickerText: {
//     color: 'white',
//   },
//   modalBackground: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dropdownContainer: {
//     width: '80%',
//     maxHeight: 200,
//     backgroundColor: 'white',
//     borderRadius: 5,
//     paddingVertical: 10,
//   },
//   dropdownScroll: {
//     flexGrow: 1,
//   },
//   countryButton: {
//     padding: 10,
//   },
//   countryText: {
//     color: 'black',
//   },
// });

// export default CountryCodePicker;



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';

const CountryCodePicker = ({ onSelectCountryCode }) => {
  const [countryCode, setCountryCode] = useState('+1'); // Default country code
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility state

  const countryCodes = [
    { code: '+93', label: 'Afghanistan' },
    { code: '+355', label: 'Albania' },
    { code: '+213', label: 'Algeria' },
    { code: '+1684', label: 'American Samoa' },
    { code: '+376', label: 'Andorra' },
    { code: '+244', label: 'Angola' },
    { code: '+1264', label: 'Anguilla' },
    { code: '+672, +64', label: 'Antarctica' },
    { code: '+1268', label: 'Antigua and Barbuda' },
    { code: '+54', label: 'Argentina' },
    { code: '+374', label: 'Armenia' },
    { code: '+297', label: 'Aruba' },
    { code: '+247', label: 'Ascension Island' },
    { code: '+61', label: 'Australia, Cocos Islands, Christmas Island' },
    { code: '+43', label: 'Austria' },
    { code: '+994', label: 'Azerbaijan' },
    { code: '+1242', label: 'Bahamas' },
    { code: '+973', label: 'Bahrain' },
    { code: '+880', label: 'Bangladesh' },
    { code: '+1246', label: 'Barbados' },
    { code: '+375', label: 'Belarus' },
    { code: '+32', label: 'Belgium' },
    { code: '+501', label: 'Belize' },
    { code: '+229', label: 'Benin' },
    { code: '+1441', label: 'Bermuda' },
    { code: '+975', label: 'Bhutan' },
    { code: '+591', label: 'Bolivia' },
    { code: '+387', label: 'Bosnia and Herzegovina' },
    { code: '+267', label: 'Botswana' },
    { code: '+55', label: 'Brazil' },
    { code: '+1284', label: 'British Virgin Islands' },
    { code: '+673', label: 'Brunei' },
    { code: '+359', label: 'Bulgaria' },
    { code: '+226', label: 'Burkina Faso' },
    { code: '+95', label: 'Burma (Myanmar)' },
    { code: '+257', label: 'Burundi' },
    { code: '+855', label: 'Cambodia' },
    { code: '+237', label: 'Cameroon' },
    { code: '+1', label: 'Canada, United States' },
    { code: '+238', label: 'Cape Verde' },
    { code: '+1345', label: 'Cayman Islands' },
    { code: '+236', label: 'Central African Republic' },
    { code: '+235', label: 'Chad' },
    { code: '+56', label: 'Chile' },
    { code: '+86', label: 'China' },
    { code: '+57', label: 'Colombia' },
    { code: '+269', label: 'Comoros' },
    { code: '+242', label: 'Congo' },
    { code: '+682', label: 'Cook Islands' },
    { code: '+506', label: 'Costa Rica' },
    { code: '+385', label: 'Croatia' },
    { code: '+53', label: 'Cuba' },
    { code: '+357', label: 'Cyprus' },
    { code: '+420', label: 'Czech Republic' },
    { code: '+243', label: 'Democratic Republic of the Congo' },
    { code: '+45', label: 'Denmark' },
    { code: '+246', label: 'Diego Garcia' },
    { code: '+253', label: 'Djibouti' },
    { code: '+1767', label: 'Dominica' },
    { code: '+1809, +1829, +1849', label: 'Dominican Republic' },
    { code: '+593', label: 'Ecuador' },
    { code: '+20', label: 'Egypt' },
    { code: '+503', label: 'El Salvador' },
    { code: '+240', label: 'Equatorial Guinea' },
    { code: '+291', label: 'Eritrea' },
    { code: '+372', label: 'Estonia' },
    { code: '+251', label: 'Ethiopia' },
    { code: '+500', label: 'Falkland Islands' },
    { code: '+298', label: 'Faroe Islands' },
    { code: '+679', label: 'Fiji' },
    { code: '+358', label: 'Finland' },
    { code: '+33', label: 'France' },
    { code: '+594', label: 'French Guiana' },
    { code: '+689', label: 'French Polynesia' },
    { code: '+241', label: 'Gabon' },
    { code: '+220', label: 'Gambia' },
    { code: '+995', label: 'Georgia' },
    { code: '+49', label: 'Germany' },
    { code: '+233', label: 'Ghana' },
    { code: '+350', label: 'Gibraltar' },
    { code: '+30', label: 'Greece' },
    { code: '+299', label: 'Greenland' },
    { code: '+1473', label: 'Grenada' },
    { code: '+1671', label: 'Guam' },
    { code: '+502', label: 'Guatemala' },
    { code: '+224', label: 'Guinea' },
    { code: '+245', label: 'Guinea-Bissau' },
    { code: '+592', label: 'Guyana' },
    { code: '+509', label: 'Haiti' },
    { code: '+504', label: 'Honduras' },
    { code: '+852', label: 'Hong Kong' },
    { code: '+36', label: 'Hungary' },
    { code: '+354', label: 'Iceland' },
    { code: '+91', label: 'India' },
    { code: '+62', label: 'Indonesia' },
    { code: '+98', label: 'Iran' },
    { code: '+964', label: 'Iraq' },
    { code: '+353', label: 'Ireland' },
    { code: '+44', label: 'Isle of Man, Jersey, United Kingdom' },
    { code: '+972', label: 'Israel' },
    { code: '+39', label: 'Italy, Holy See (Vatican City)' },
    { code: '+225', label: 'Ivory Coast (Côte d\'Ivoire)' },
    { code: '+1876', label: 'Jamaica' },
    { code: '+81', label: 'Japan' },
    { code: '+962', label: 'Jordan' },
    { code: '+254', label: 'Kenya' },
    { code: '+686', label: 'Kiribati' },
    { code: '+965', label: 'Kuwait' },
    { code: '+996', label: 'Kyrgyzstan' },
    { code: '+856', label: 'Laos' },
    { code: '+371', label: 'Latvia' },
    { code: '+961', label: 'Lebanon' },
    { code: '+266', label: 'Lesotho' },
    { code: '+231', label: 'Liberia' },
    { code: '+218', label: 'Libya' },
    { code: '+423', label: 'Liechtenstein' },
    { code: '+370', label: 'Lithuania' },
    { code: '+352', label: 'Luxembourg' },
    { code: '+853', label: 'Macau' },
    { code: '+389', label: 'Macedonia' },
    { code: '+261', label: 'Madagascar' },
    { code: '+265', label: 'Malawi' },
    { code: '+60', label: 'Malaysia' },
    { code: '+960', label: 'Maldives' },
    { code: '+223', label: 'Mali' },
    { code: '+356', label: 'Malta' },
    { code: '+692', label: 'Marshall Islands' },
    { code: '+596', label: 'Martinique' },
    { code: '+222', label: 'Mauritania' },
    { code: '+230', label: 'Mauritius' },
    { code: '+52', label: 'Mexico' },
    { code: '+691', label: 'Micronesia' },
    { code: '+373', label: 'Moldova' },
    { code: '+377', label: 'Monaco' },
    { code: '+976', label: 'Mongolia' },
    { code: '+382', label: 'Montenegro' },
    { code: '+1664', label: 'Montserrat' },
    { code: '+212', label: 'Morocco, Western Sahara' },
    { code: '+258', label: 'Mozambique' },
    { code: '+264', label: 'Namibia' },
    { code: '+674', label: 'Nauru' },
    { code: '+977', label: 'Nepal' },
    { code: '+31', label: 'Netherlands' },
    { code: '+599', label: 'Netherlands Antilles' },
    { code: '+687', label: 'New Caledonia' },
    { code: '+64', label: 'New Zealand' },
    { code: '+505', label: 'Nicaragua' },
    { code: '+227', label: 'Niger' },
    { code: '+234', label: 'Nigeria' },
    { code: '+683', label: 'Niue' },
    { code: '+672', label: 'Norfolk Island' },
    { code: '+850', label: 'North Korea' },
    { code: '+1670', label: 'Northern Mariana Islands' },
    { code: '+47', label: 'Norway, Svalbard' },
    { code: '+968', label: 'Oman' },
    { code: '+92', label: 'Pakistan' },
    { code: '+680', label: 'Palau' },
    { code: '+970', label: 'Palestine' },
    { code: '+507', label: 'Panama' },
    { code: '+675', label: 'Papua New Guinea' },
    { code: '+595', label: 'Paraguay' },
    { code: '+51', label: 'Peru' },
    { code: '+63', label: 'Philippines' },
    { code: '+870', label: 'Pitcairn Islands' },
    { code: '+48', label: 'Poland' },
    { code: '+351', label: 'Portugal' },
    { code: '+1787, +1939', label: 'Puerto Rico' },
    { code: '+974', label: 'Qatar' },
    { code: '+262', label: 'Reunion Island, Mayotte' },
    { code: '+40', label: 'Romania' },
    { code: '+7', label: 'Russia, Kazakhstan' },
    { code: '+250', label: 'Rwanda' },
    { code: '+590', label: 'Saint Barthelemy, Saint Barthelemy, Saint Martin' },
    { code: '+290', label: 'Saint Helena' },
    { code: '+1869', label: 'Saint Kitts and Nevis' },
    { code: '+1758', label: 'Saint Lucia' },
    { code: '+508', label: 'Saint Pierre and Miquelon' },
    { code: '+1784', label: 'Saint Vincent and the Grenadines' },
    { code: '+685', label: 'Samoa' },
    { code: '+378', label: 'San Marino' },
    { code: '+239', label: 'Sao Tome and Principe' },
    { code: '+966', label: 'Saudi Arabia' },
    { code: '+221', label: 'Senegal' },
    { code: '+381', label: 'Serbia' },
    { code: '+248', label: 'Seychelles' },
    { code: '+232', label: 'Sierra Leone' },
    { code: '+65', label: 'Singapore' },
    { code: '+1721', label: 'Sint Maarten' },
    { code: '+421', label: 'Slovakia' },
    { code: '+386', label: 'Slovenia' },
    { code: '+677', label: 'Solomon Islands' },
    { code: '+252', label: 'Somalia' },
    { code: '+27', label: 'South Africa' },
    { code: '+82', label: 'South Korea' },
    { code: '+211', label: 'South Sudan' },
    { code: '+34', label: 'Spain' },
    { code: '+94', label: 'Sri Lanka' },
    { code: '+249', label: 'Sudan' },
    { code: '+597', label: 'Suriname' },
    { code: '+268', label: 'Swaziland' },
    { code: '+46', label: 'Sweden' },
    { code: '+41', label: 'Switzerland' },
    { code: '+963', label: 'Syria' },
    { code: '+886', label: 'Taiwan' },
    { code: '+992', label: 'Tajikistan' },
    { code: '+255', label: 'Tanzania' },
    { code: '+66', label: 'Thailand' },
    { code: '+670', label: 'Timor-Leste (East Timor)' },
    { code: '+228', label: 'Togo' },
    { code: '+690', label: 'Tokelau' },
    { code: '+676', label: 'Tonga Islands' },
    { code: '+1868', label: 'Trinidad and Tobago' },
    { code: '+216', label: 'Tunisia' },
    { code: '+90', label: 'Turkey' },
    { code: '+993', label: 'Turkmenistan' },
    { code: '+1649', label: 'Turks and Caicos Islands' },
    { code: '+688', label: 'Tuvalu' },
    { code: '+256', label: 'Uganda' },
    { code: '+380', label: 'Ukraine' },
    { code: '+971', label: 'United Arab Emirates' },
    { code: '+598', label: 'Uruguay' },
    { code: '+1340', label: 'US Virgin Islands' },
    { code: '+998', label: 'Uzbekistan' },
    { code: '+678', label: 'Vanuatu' },
    { code: '+58', label: 'Venezuela' },
    { code: '+84', label: 'Vietnam' },
    { code: '+681', label: 'Wallis and Futuna' },
    { code: '+967', label: 'Yemen' },
    { code: '+260', label: 'Zambia' },
    { code: '+263', label: 'Zimbabwe' },

    // Add more country codes as needed
  ];

  const handleCountryCodeSelect = (code) => {
    setCountryCode(code);
    onSelectCountryCode(code);
    setShowDropdown(false); // Hide dropdown after selection
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.pickerButton} onPress={toggleDropdown}>
        <Text style={styles.pickerText}>Select a country for phone</Text>
      </TouchableOpacity>
      <Modal
        visible={showDropdown}
        transparent
        animationType="fade"
        onRequestClose={() => setShowDropdown(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1} // Prevents background touch events
          onPress={() => setShowDropdown(false)}
        >
          <View style={styles.dropdownContainer}>
            <ScrollView style={styles.dropdownScroll}>
              {countryCodes.map((country) => (
                <TouchableOpacity
                  key={country.code}
                  style={styles.countryButton}
                  onPress={() => handleCountryCodeSelect(country.code)}
                >
                  <Text style={styles.countryText}>{country.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  pickerButton: {
    marginRight: 10,
  },
  pickerText: {
    color: 'white',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    width: '80%',
    maxHeight: 200,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
  },
  dropdownScroll: {
    flexGrow: 1,
  },
  countryButton: {
    padding: 10,
  },
  countryText: {
    color: 'black',
  },
});

export default CountryCodePicker;











