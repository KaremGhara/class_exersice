import {View,Text,Pressable,ViewStyle, StyleSheet} from 'react-native'

interface InterfaceCustomButton{
    text: string,
    onClick: () => void,
    styles:ViewStyle

}

const CustomButton:React.FC<InterfaceCustomButton>=({text,onClick,styles})=>{
    return(
        <Pressable onPress={onClick}>
            <View style={styles}>
            <Text style={styles1.textButton}>{text}</Text>
        </View>
        </Pressable>
        
    )
}

const styles1=StyleSheet.create({
    textButton:{
        color:'#ffffff',
        fontFamily:'Roboto',
        fontWeight:'600',
        fontSize:16
    }

})

export default CustomButton;