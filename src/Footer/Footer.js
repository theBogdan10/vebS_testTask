import React from 'react';
import { Text, View } from 'react-native';
import { FOOTER_INSTRUCTION } from '../../resources/text';
import styles from './footerStyle';


const Footer = () => {
    return (
        <View style={styles.textView}>
            <Text style={styles.text}>
                {FOOTER_INSTRUCTION}
            </Text>
        </View>
    )
}

export default Footer;