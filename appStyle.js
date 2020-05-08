import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edf6ff',
    },
    context: {
        height: height,
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: width * 0.9,
        alignSelf: 'center'
    }
})

export default styles;