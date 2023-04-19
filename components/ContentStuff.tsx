 import {StyleSheet, View,Text,Image, FlatList, ScrollView} from 'react-native';
import Footer from './Footer';
import CustomButton from './CustomButton';
// import { Image } from 'react-native-svg';
function ContentStuff():JSX.Element{

    return(
        <View>

            <View style={styles.listOptions}>
                <Text>Recipe Box</Text>
                <Text>Videos</Text>
                <Text>Articles</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../images/soup.png')}/>
                <Text style={styles.imageDescription}> Vegetable Bone Marrow Soup</Text>
            </View>

            <View style={styles.container}>
  <View style={styles.row}>
    <View style={styles.item}>
      <Image style={[styles.item]} source={photoData[0].uri} />
      <Text style={styles.imageTexts}>{photoData[0].desriptions}</Text>
    </View>
    <View style={styles.item}>
      <Image style={[styles.item]} source={photoData[1].uri} />
      <Text style={styles.imageTexts}>{photoData[1].desriptions}</Text>
    </View>
  </View>
  <View style={styles.row}>
    <View style={styles.item}>
      <Image style={[styles.item]} source={photoData[2].uri} />
      <Text style={styles.imageTexts}>{photoData[2].desriptions}</Text>
    </View>
    <View style={styles.item}>
      <Image style={[styles.item]} source={photoData[3].uri} />
      <Text style={styles.imageTexts}>{photoData[3].desriptions}</Text>
    </View>
  </View>
</View>
<View style={styles.buttonContatiner}>
<CustomButton text='Explore More' onClick={PressMe} styles={styles.button}/>
</View>
        </View>
    )

}

function PressMe(){
    console.log('ALo');
    
}

function renderItem(){

}

const photoData = [
    { id: '1', uri:require('../images/cookies.png',),desriptions:'Brown Cookies'  },
    { id: '2', uri: require('../images/cookies.png'),desriptions:'Brown Cookies' },
    { id: '3', uri: require('../images/cookies.png'),desriptions:'Brown Cookies' },
    { id: '4', uri: require('../images/cookies.png'),desriptions:'Brown Cookies' },
    // Add more photo data as needed
  ];
const styles = StyleSheet.create({
    listOptions:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginHorizontal:-90,
        marginVertical:10
    },
    image:{
        borderRadius:10,
    },
    imageContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    imageDescription:{
        marginRight:60,
        fontFamily:'Roboto',
        fontWeight:'600',
        fontSize:20,
        color:'#333133'
    },
    imageList:{
        margin:20,
        borderRadius:20
    },
    imageText:{
        marginTop:-15,
        marginLeft:20,
        fontFamily:'Roboto',
        fontSize:16,
        fontWeight:'bold',
        color:'#333133'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10,
      },
      row: {
        flexDirection: 'row',
        marginTop:10
      },
      item: {
        flex: 1,
        alignItems: 'center',
      },
     
      imageTexts: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily:'Roboto',
        color:'#333133',
        marginLeft:-50
      },
      button:{
        width:335,
        height:42,
        backgroundColor:'#16266e',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center' 
      },
      buttonContatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:30
      }
})

export default ContentStuff;