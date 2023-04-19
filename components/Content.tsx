import {StyleSheet, Text, View} from 'react-native'
import Header from './Header';
import ContentHeader from './ContentHeader';
import ContentStuff from './ContentStuff';
function Content():JSX.Element{
    return(
        <View style={styles.container}>
           
            <View>
                <ContentHeader/>
            </View>
            <View>
                <ContentStuff/>
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
container:{
    flex:1,
    flexDirection: 'column'
},

    
});

export default Content;