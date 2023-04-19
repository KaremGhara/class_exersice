import {StyleSheet, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';

function Footer():JSX.Element{
    return(
        <View style={styles.container}>
      {/* <Icon name="android" size={30} color="#900" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#16266E',
        height:551
    }
})

export default Footer;