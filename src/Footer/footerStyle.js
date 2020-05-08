import { StyleSheet, Dimensions } from 'react-native';


const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    textView: {
        width: width * 0.7,
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        fontFamily: 'latoRegular',
        color: 'grey',
        fontWeight: '100'
    }
})

export default styles;