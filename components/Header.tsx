import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function Header():JSX.Element{
    return(
        <View style={styles.headerStyle}>

            <Image style={styles.headerIcon} source={require('../images/menu.png')}/>
            <Image style={styles.profileIcon} source={require('../images/profile.png')}/>
            <Image style={styles.searchIcon} source={require('../images/search.png')}/>
            <Image style={styles.favoriteIcon} source={require('../images/favorite.png')}/>
            <Image style={styles.accountIcon} source={require('../images/account.png')}/>
            </View>
    );
}

const styles=StyleSheet.create({
    headerStyle:{
        width:356,
        height:56,
        flexDirection: 'row',
        backgroundColor:'#FFFFFF',

    },
 
    headerIcon: {
        width:17,
        height:16.41,
        top:19.7,
        left:16
        
      },
      profileIcon: {
        width:30,
        height:31,
        top:13,
        left:55,
      },
      searchIcon:{
        height:18,
        width: 18,
        left: 3,
        top: 19,
        marginLeft:220

      },
      favoriteIcon:{
        height: 18.350000381469727,
        width: 20,
        left: 50,
        top: 19

      },
      accountIcon:{
        height: 20,
        width: 20,
        left: 80,
        top: 19,
      }

});
export default Header;