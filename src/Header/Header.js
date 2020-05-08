import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { HEADER_CANCEL, HEADER_DATE_TIME, HEADER_DONE } from '../../resources/text';
import styles from './headerStyle';


const Header = () => {
    return (
        <View style={styles.headerLine}>
            <TouchableOpacity>
                <Text style={styles.textCancel}>
                    {HEADER_CANCEL}
                </Text>
            </TouchableOpacity>
            <Text style={styles.textDate}>
                {HEADER_DATE_TIME}
            </Text>
            <TouchableOpacity>
                <Text style={styles.textReady}>
                    {HEADER_DONE}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header;