import {Image, StyleSheet, TextInput, View} from 'react-native'
function SearchBar():JSX.Element{
    return(
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={styles.searchContainer}>
            {/* <Image style={styles.searchIcon}  source={require('../images/search.png')}/> */}
            <TextInput style={styles.searchBar} placeholder='Seacrh' />
            </View>
        
      </View>
            
            
    );
}

const styles = StyleSheet.create({
    searchBar:{
        width:335,
        height:42,
        backgroundColor:'#FFFFFF',
        borderRadius:35,
        paddingVertical:6,
        paddingHorizontal:14,
        
      
    },
    searchContainer:{
        flexDirection: 'row',
    alignItems: 'center',
    },
    // searchIcon:{
    //     padding: 10,
    // margin: 5,
    // height: 25,
    // width: 25,
    // resizeMode: 'stretch',
    // alignItems: 'center',

    // }
})

export default SearchBar;