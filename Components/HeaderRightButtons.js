import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderRightButtons = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigation();

  const handleMenuPress = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemPress = (menuOption) => {
    setIsMenuOpen(false);

    if (menuOption === 'Our Cars') {
      navigation.navigate('OurCars');
    } else if (menuOption === 'Our Packages') {
      navigation.navigate('OurPackages');
    } else if (menuOption === 'Agent Login') {
      navigation.navigate('AgentLogin');
    }
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
        <Image source={require('../assets/menuicon.png')} style={styles.menuButtonText}></Image>
        {/* <Text style={styles.menuButtonText}>Menu</Text> */}
      </TouchableOpacity>
      {isMenuOpen && (
        <View style={styles.menuDropdown}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Our Cars')}
          >
            <Text style={styles.menuItemText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Our Packages')}
          >
            <Text style={styles.menuItemText}>Packages</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress('Agent Login')}
          >
            <Text style={styles.menuItemText}>Agent Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  menuButton: {
    marginRight: 16,
  },
  menuButtonText: {
    width:30,
    height:30
  },
  menuDropdown: {
    position: 'absolute',
    top: 40,
    right: 16,
    backgroundColor: '#ffc61a',
    padding: 8,
    borderRadius: 4,
    elevation: 4,
  },
  menuItem: {
    paddingVertical: 8,
  },
  menuItemText: {
    fontSize: 16,
  },
});

export default HeaderRightButtons;
