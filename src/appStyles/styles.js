import {
    View,
    Text,
    TouchableOpacity,
    Picker,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
import colors from '../constants/colors';
const HEIGHT = Dimensions.get('window').height ;

const AppStyles= StyleSheet.create({
    picker:{
        borderWidth:1,
        alignSelf:'center',
        marginHorizontal:3,
        marginVertical:5,
        width:'90%',
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    pickerBack:{
        width:'90%',
        height:HEIGHT / 14 ,
        flexDirection:'row',
        borderWidth:2   ,
        borderRadius:4,
        alignSelf:'center',
        marginVertical:5,
        alignItems:'center',
        backgroundColor:colors.lighGrey,
        borderColor:colors.lighGrey
    
    },
})

export default AppStyles;
