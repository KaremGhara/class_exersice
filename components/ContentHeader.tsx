import {View,Text,StyleSheet} from 'react-native';
import SearchBar from './SearchBar';

function ContentHeader():JSX.Element{
    return(
        <View style={styles.contentHeader}>
                <Text style={styles.textStyle}>Favorites</Text>
                <SearchBar/>
        </View>
    );

    
}
const styles = StyleSheet.create({
    contentHeader:{
        
        flex:1,
        height: 181,
        alignItems:'center',
        backgroundColor:'#06CEA8',
        
        
    
    },
    textStyle:{
        fontFamily:'Roboto',
        fontWeight:'700',
        fontSize:46,
        color:'#FFFFFF',
        margin:10
        
    }
});
export default ContentHeader