import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    text: {
        fontFamily: 'latoRegular'
    },
    contextView: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 15
    },
    timeComponent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        elevation: 3
    },
    pressTime: {
        backgroundColor: '#2587ff',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        elevation: 3
    },
    arrow: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    timeText: {
        color: '#2587ff',
        fontFamily: 'latoRegular',
        fontWeight: 'bold'
    },
    pressTimeText: {
        color: 'white',
    },
    iosTimeComponent: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        shadowColor: '#2587ff',
        shadowRadius: 7,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10,
            width: 10
        }
    },
    timeItemsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    }

})

export default styles;