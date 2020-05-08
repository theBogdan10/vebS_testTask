import { StyleSheet, Dimensions } from 'react-native';


const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    headerLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },
    textCancel: {
        fontFamily: 'latoRegular',
        color: 'grey',
        fontWeight: 'bold'
    },
    textDate: {
        fontFamily: 'latoRegular',
        fontWeight: 'bold'
    },
    textReady: {
        fontFamily: 'latoRegular',
        color: '#2587ff',
        fontWeight: 'bold'
    }
})

export default styles;