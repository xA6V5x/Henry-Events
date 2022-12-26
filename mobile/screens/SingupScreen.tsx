import { RootStackScreenProps } from '../types';
import {
     StyleSheet,
     TextInput,
     View,
     Text,
     TouchableWithoutFeedback,
     Keyboard,
     SafeAreaView,
     ScrollView,
     Alert,
     Pressable,
     TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as yup from 'yup';
import { HenryEventsLogo } from '../components/HenryEventsLogo';
import { TextNavigate } from '../components/TextNavigate';

const reviewSchema = yup.object({
     nickName: yup.string().required(),
     email: yup.string().required().email(),
     password: yup.string().required(),
     confirmPassword: yup.string().required(),
});

type singupProps = {
     nickName: string;
     email: string;
     confirmPassword: string;
     password: string;
};

export default function SingupScreen({ navigation }: RootStackScreenProps<'SingupScreen'>) {
     const submit = async (values: singupProps) => {
          if (values.password !== values.confirmPassword) {
               return Alert.alert('Passwords do not match');
          }
          try {
               //    let res = await axios.post('https://', values);
               Alert.alert('Confirm the message that was sent to your email and log in');
               navigation.navigate('LoginScreen');
          } catch (error: any) {
               Alert.alert(error.response.data.message || error.message);
               return;
          }
     };

     return (
          <SafeAreaView style={styles.container}>
               <View style={styles.triangle_yellow}></View>
               <ScrollView style={{ width: '100%' }}>
                    <View
                         style={{
                              marginTop: '5%',
                         }}
                    >
                         <HenryEventsLogo />
                    </View>
                    <View style={styles.form_container}>
                         <Formik
                              initialValues={{
                                   nickName: '',
                                   email: '',
                                   password: '',
                                   confirmPassword: '',
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
                                                  placeholder="Nick name"
                                                  onChangeText={formikProps.handleChange(
                                                       'nickName'
                                                  )}
                                                  value={formikProps.values.nickName}
                                                  onBlur={formikProps.handleBlur('nickName')}
                                                  style={styles.input}
                                             />

                                             <Text style={styles.text_error}>
                                                  {/* {formikProps.touched.email &&
                                                       formikProps.errors.email} */}
                                             </Text>

                                             <TextInput
                                                  placeholder="Email"
                                                  onChangeText={formikProps.handleChange('email')}
                                                  value={formikProps.values.email}
                                                  onBlur={formikProps.handleBlur('email')}
                                                  style={styles.input}
                                             />
                                             <Text style={styles.text_error}>
                                                  {/* {formikProps.touched.password &&
                                                       formikProps.errors.password} */}
                                             </Text>
                                             <TextInput
                                                  placeholder="Password"
                                                  onChangeText={formikProps.handleChange(
                                                       'password'
                                                  )}
                                                  value={formikProps.values.password}
                                                  secureTextEntry={true}
                                                  style={styles.input}
                                             />
                                             <Text style={styles.text_error}>
                                                  {/* {formikProps.touched.password &&
                                                       formikProps.errors.password} */}
                                             </Text>
                                             <TextInput
                                                  placeholder="Confirm password"
                                                  onChangeText={formikProps.handleChange(
                                                       'confirmPassword'
                                                  )}
                                                  value={formikProps.values.confirmPassword}
                                                  secureTextEntry={true}
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
                                                  <Text style={styles.button_text}>Sing up</Text>
                                             </TouchableOpacity>
                                        </View>
                                   </TouchableWithoutFeedback>
                              )}
                         </Formik>
                         <View style={{ ...styles.footer, marginBottom: 5 }}>
                              <View style={styles.line}></View>
                              <Text style={{ fontSize: 16, color: '#C9C9C9' }}>OR</Text>
                              <View style={styles.line}></View>
                         </View>
                         <View style={styles.footer}>
                              <Text style={styles.text_footer}>
                                   Do you alrady have an account?{' '}
                              </Text>
                              <TextNavigate name="Log In" onPress={() => navigation.goBack()} />
                         </View>
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
