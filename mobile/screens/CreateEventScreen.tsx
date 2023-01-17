import React, { useState } from 'react';
import { RootStackScreenProps } from '../types';
import {
     Button,
     StyleSheet,
     TextInput,
     View,
     Text,
     TouchableWithoutFeedback,
     Keyboard,
     SafeAreaView,
     ScrollView,
     Alert,
     TouchableOpacity,
     Image,
} from 'react-native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as yup from 'yup';
import { HenryEventsLogo } from '../components/HenryEventsLogo';
import { BackArrow } from '../components/BackArrow';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { CalendarButton } from '../components/CalendarButton';

const reviewSchema = yup.object({
     type: yup.string().required(),
     title: yup.string().required(),
     description: yup.string().required(),
     date: yup.date().required(),
     link: yup.string().required(),
});

type CreateEventProps = {
     title: string;
     date: Date;
     description: string;
     link: string;
     type: string;
};

export default function CreateEventScreen({ navigation }: RootStackScreenProps<'CreateEvent'>) {
     const [date, setDate] = useState<Date>(new Date());
     const [show, setShow] = useState(false);
     const [text, setText] = useState('Date');
     const [sendDate, setSendDate] = useState('');

     const onChange = (e: any, selectedDate: any) => {
          setShow(false);
          const currentDate = selectedDate || date;
          setDate(currentDate);
          let tempDate = new Date(currentDate);
          let fDate = moment(tempDate, 'YYYY-MM-DD HH:mm Z').format('DD/MM/YYYY');
          setText(fDate);
          let dateMMDDYY = moment(tempDate, 'YYYY-MM-DD HH:mm Z').format('MM-DD-YYYY');
          setSendDate(dateMMDDYY);
     };

     const submit = async (values: CreateEventProps) => {
          console.log({ ...values, date: sendDate, user_event: '63b63318ddb5877441f60b51' });
          // if (values.password !== values.confirmPassword) {
          //      return Alert.alert('Passwords do not match');
          // }
          // try {
          //      //    let res = await axios.post('https://', values);
          //      Alert.alert('Confirm the message that was sent to your email and log in');
          //      navigation.navigate('Login');
          // } catch (error: any) {
          //      Alert.alert(error.response.data.message || error.message);
          //      return;
          // }
     };

     return (
          <SafeAreaView style={styles.container}>
               <BackArrow navigation={navigation} />
               <View style={styles.triangle_yellow}></View>
               <ScrollView style={{ width: '100%' }}>
                    <View
                         style={{
                              marginTop: '10%',
                         }}
                    >
                         <HenryEventsLogo />
                    </View>
                    <View style={styles.form_container}>
                         <Formik
                              initialValues={{
                                   type: '',
                                   title: '',
                                   description: '',
                                   date: new Date(),
                                   link: '',
                              }}
                              validationSchema={reviewSchema}
                              onSubmit={submit}
                         >
                              {(formikProps) => (
                                   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <View
                                             style={{ ...styles.form_container, paddingBottom: 0 }}
                                        >
                                             <TextInput
                                                  placeholder="Event Type"
                                                  onChangeText={formikProps.handleChange('type')}
                                                  value={formikProps.values.type}
                                                  style={styles.input}
                                             />
                                             <Text style={styles.text_error}>
                                                  {/* {formikProps.touched.password &&
                                                       formikProps.errors.password} */}
                                             </Text>
                                             <TextInput
                                                  placeholder="Title"
                                                  onChangeText={formikProps.handleChange('title')}
                                                  value={formikProps.values.title}
                                                  onBlur={formikProps.handleBlur('title')}
                                                  style={styles.input}
                                             />

                                             <Text style={styles.text_error}>
                                                  {/* {formikProps.touched.email &&
                                                       formikProps.errors.email} */}
                                             </Text>

                                             <CalendarButton
                                                  text={text}
                                                  onPress={() => setShow(true)}
                                             />
                                             {show && (
                                                  <DateTimePicker
                                                       testID="dateTimePicker"
                                                       minimumDate={formikProps.values.date}
                                                       value={date}
                                                       mode="date"
                                                       // display="default"
                                                       display="spinner"
                                                       onChange={onChange}
                                                  />
                                             )}

                                             <Text style={styles.text_error}>
                                                  {/* {formikProps.touched.password &&
                                                       formikProps.errors.password} */}
                                             </Text>
                                             <TextInput
                                                  placeholder="Description"
                                                  onChangeText={formikProps.handleChange(
                                                       'description'
                                                  )}
                                                  value={formikProps.values.description}
                                                  style={styles.input}
                                             />
                                             <Text style={styles.text_error}>
                                                  {/* {formikProps.touched.password &&
                                                       formikProps.errors.password} */}
                                             </Text>
                                             <TextInput
                                                  placeholder={`Link`}
                                                  onChangeText={formikProps.handleChange('link')}
                                                  value={formikProps.values.link}
                                                  style={styles.input}
                                             />
                                             <Text style={styles.text_error}>
                                                  {/* {formikProps.touched.password &&
                                                       formikProps.errors.password} */}
                                             </Text>
                                             <TouchableOpacity
                                                  activeOpacity={0.8}
                                                  style={styles.button}
                                                  onPress={() => formikProps.handleSubmit()}
                                             >
                                                  <Text style={styles.button_text}>
                                                       Create Event
                                                  </Text>
                                             </TouchableOpacity>
                                        </View>
                                   </TouchableWithoutFeedback>
                              )}
                         </Formik>
                    </View>
                    <StatusBar style="auto" />
               </ScrollView>
          </SafeAreaView>
     );
}
const styles = StyleSheet.create({
     container: {
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
     },

     triangle_yellow: {
          position: 'absolute',
          width: '200%',
          height: '100%',
          bottom: '-50%',
          left: '-117.5%',
          backgroundColor: '#FFFF01',
          transform: [{ rotate: '45deg' }],
     },

     form_container: {
          width: '100%',
          alignItems: 'center',
          paddingBottom: '8%',
     },

     input: {
          margin: 5,
          width: '75%',
          height: 45,
          paddingLeft: 15,
          fontSize: 19,
          paddingRight: 15,
          borderRadius: 10,
          borderWidth: 2,
          color: '#000000',
          borderColor: '#717171',
          backgroundColor: '#ffffff',
     },

     text_error: {
          color: 'red',
          fontSize: 15,
     },

     button: {
          margin: 15,
          width: '58%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          backgroundColor: '#F0F0F0',
     },
     button_text: {
          fontSize: 16,
          padding: 10,
     },
     line: {
          marginRight: 15,
          marginLeft: 15,
          width: '35%',
          height: 2,
          backgroundColor: '#C9C9C9',
     },
     footer: {
          marginTop: 15,
          height: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
     },
     text_footer: {
          fontSize: 16,
          color: '#737373',
     },
});
