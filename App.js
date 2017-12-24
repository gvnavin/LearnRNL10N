/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import I18n, { getLanguages } from 'react-native-i18n'

export default class App extends Component<{}> {
    render() {
        
        getLanguages()
            .then(languages => {
                console.log('ReactNative-I18N-getLanguages:', languages) // ['en-US', 'en']
            })
        
        let currentLocale = I18n.currentLocale();
        console.log('ReactNative-I18N currentLocale:', currentLocale)
        
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Current Locale: {currentLocale} {'\n'}
                </Text>
                <Text>
                    {I18n.t('greeting')} {'\n'}
                </Text>
                <Text>
                    {I18n.t('hello', {name: 'John Doe'})} {'\n'}
                </Text>
                <Text>
                    {I18n.l('date.formats.short', '2009-09-18')} {'\n'}
                    {I18n.l('time.formats.short', '2009-09-18 23:12:43')} {'\n'}
                    {I18n.l('time.formats.short', '2009-11-09T18:10:34')} {'\n'}
                    {I18n.l('time.formats.short', '2009-11-09T18:10:34Z')} {'\n'}
                    {I18n.l('date.formats.short', 1251862029000)} {'\n'}
                    {I18n.l('date.formats.short', '09/18/2009')} {'\n'}
                    {I18n.l('date.formats.short', (new Date()))}
                </Text>
                <Text>
                    {I18n.t('inboxCounting', {count: 1})}
                </Text>
                <Text>
                    {I18n.t('inboxCounting', {count: 10})}
                </Text>
                <Text>
                    {I18n.t('inboxCounting', {count: 0})}
                </Text>
                <Text>
                    {
                        I18n.t(
                            'pointFormattedNumber', {
                                formatted_number: I18n.toNumber(1000)
                            }
                        )
                    }
                </Text>
                <Text>
                    {
                        I18n.t(
                            'pointPluralFormattedNumber', {
                                count: 10000,
                                formatted_number: I18n.toNumber(10000)
                            }
                        )
                    }
                </Text>
                <Text>
                    {I18n.toHumanSize(1234)}
                </Text>
                <Text>
                    {I18n.toCurrency(1000, {precision: 0})}
                </Text>
                <Text>
                    {I18n.toNumber(1000)}
                </Text>
                <Text>
                    {I18n.toCurrency(1000)}
                </Text>
                <Text>
                    {I18n.toPercentage(100)}
                </Text>
                <Text>
                    {I18n.toPercentage(100, {precision: 0})}
                </Text>
                <Text>
                    {I18n.toNumber(1000, {precision: 0})}
                </Text>
                <Text>
                    {
                        I18n.toNumber(1000, {
                            delimiter: '.',
                            separator: ','
                        })
                    }
                </Text>
                <Text>
                    {
                        I18n.toNumber(1000, {
                            delimiter: '.',
                            precision: 0
                        })
                    }
                </Text>
                <Text>
                    {I18n.l("date.formats.ordinal_day", "2009-09-18", { day: '18th' })}
                </Text>
            </View>
        );
    }
}

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

I18n.translations = {
    en: {
        date: {
            formats: {
                ordinal_day: '%B %{day}'
            }
        },
        number: {
            human: {
                storage_units:
                    {
                        units: {
                            kb: 'KB'
                        }
                    }
            }
        },
        greeting: 'Hi!',
        hello: 'Hello {{name}}',
        inboxCounting:
            {
                'one': 'You have 1 new message',
                'other': 'You have {{count}} new messages',
                'zero': 'You have no messages'
            },
        pointPluralFormattedNumber: {
            'one': '1 Point',
            'other': '{{formatted_number}} Points',
            'zero': '0 Points'
        },
        pointFormattedNumber: '{{formatted_number}} Points'
    },
    fr: {
        greeting: 'Bonjour!'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
