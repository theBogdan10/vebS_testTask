import { Calendar } from 'react-native-calendars';
import React, { useState, useEffect } from 'react';
import styles from './calendarComponentStyle';
import { Text, View, Platform, TouchableOpacity } from 'react-native';


const CalendarComponent = () => {

    const [directionText, setDirection] = useState({ previousMonth: '<', nextMonth: '>' });
    const [day, setDay] = useState(true);
    const [date, setDate] = useState({ date: '', selected: false });
    const [press, setPress] = useState(false);
    const [dummyDataCopy, setDummyDataCopy] = useState([]);


    useEffect(() => {
        const dummyData = [
            { id: 1, clicked: false, hours: `${getRandomInt(0, 2)}${getRandomInt(0, 2) >= 2 ? getRandomInt(0, 4) : getRandomInt(0, 9)}`, minutes: `${getRandomInt(0, 5)}${getRandomInt(0, 9)}` },
            { id: 2, clicked: false, hours: `${getRandomInt(0, 2)}${getRandomInt(0, 2) >= 2 ? getRandomInt(0, 4) : getRandomInt(0, 9)}`, minutes: `${getRandomInt(0, 5)}${getRandomInt(0, 9)}` },
            { id: 3, clicked: false, hours: `${getRandomInt(0, 2)}${getRandomInt(0, 2) >= 2 ? getRandomInt(0, 4) : getRandomInt(0, 9)}`, minutes: `${getRandomInt(0, 5)}${getRandomInt(0, 9)}` },
            { id: 4, clicked: false, hours: `${getRandomInt(0, 2)}${getRandomInt(0, 2) >= 2 ? getRandomInt(0, 4) : getRandomInt(0, 9)}`, minutes: `${getRandomInt(0, 5)}${getRandomInt(0, 9)}` },
            { id: 5, clicked: false, hours: `${getRandomInt(0, 2)}${getRandomInt(0, 2) >= 2 ? getRandomInt(0, 4) : getRandomInt(0, 9)}`, minutes: `${getRandomInt(0, 5)}${getRandomInt(0, 9)}` },
            { id: 6, clicked: false, hours: `${getRandomInt(0, 2)}${getRandomInt(0, 2) >= 2 ? getRandomInt(0, 4) : getRandomInt(0, 9)}`, minutes: `${getRandomInt(0, 5)}${getRandomInt(0, 9)}` },
            { id: 7, clicked: false, hours: `${getRandomInt(0, 2)}${getRandomInt(0, 2) >= 2 ? getRandomInt(0, 4) : getRandomInt(0, 9)}`, minutes: `${getRandomInt(0, 5)}${getRandomInt(0, 9)}` },
        ]
        setDummyDataCopy(dummyData)

    }, [date.date]);

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const renderArrow = (direction) => {
        if (direction === 'left') {
            return <Text style={styles.arrow}>{directionText.previousMonth}</Text>
        } else {
            return <Text style={styles.arrow}>{directionText.nextMonth}</Text>
        }
    }

    return (
        <View>
            <View style={styles.contextView}>
                <Calendar
                    current={date.date}
                    onDayPress={day => setDate({ date: day.dateString })}
                    monthFormat={'MMMM yyyy'}
                    renderArrow={(direction) => renderArrow(direction)}
                    firstDay={1}
                    onPressArrowLeft={substractMonth => substractMonth()}
                    onPressArrowRight={addMonth => addMonth()}
                    markedDates={{ [date.date]: { selected: true } }}
                    theme={
                        {
                            backgroundColor: '#ffffff',
                            calendarBackground: 'white',
                            selectedDayBackgroundColor: '#2587ff',
                            selectedDayTextColor: 'white',
                            todayTextColor: '#2587ff',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            monthTextColor: 'black',
                            textDayFontSize: 15,
                            textMonthFontSize: 17,
                            textDayHeaderFontSize: 16,
                            textDayFontFamily: 'latoRegular',
                            textDayHeaderFontSize: 13,
                            textDayHeaderFontFamily: 'latoRegular',
                            textMonthFontFamily: 'latoRegular'
                        }
                    }

                />

            </View>
            <View style={styles.timeItemsView}>
                {
                    day && dummyDataCopy.map(item => {
                        return (
                            <View key={item.id}>
                                <TouchableOpacity
                                    onPress={(e) => { setPress(item.id) }}
                                    style={[Platform.OS == 'ios' ? styles.iosTimeComponent : styles.timeComponent, press == item.id ? styles.pressTime : null]} >
                                    <Text style={[styles.timeText, press == item.id ? styles.pressTimeText : null]}>
                                        {`${item.hours}:${item.minutes}`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}


export default CalendarComponent;