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

const reviewSchema = yup.object({
     email: yup.string().required().email(),
     password: yup.string().required(),
});

type loginProps = {
     email: string;
     password: string;
};

export function LoginScreen({ navigation }: RootStackScreenProps<'LoginScreen'>) {
     const submit = async (values: loginProps) => {
          navigation.push('Home');
          // () => navigation.replace('Home')
          // try {
          //      let res = await axios.post(
          //           'https://backend-gamematch.herokuapp.com/users/login',
          //           values
          //      );
          //      let user = {
          //           username: res.data.username,
          //           _id: res.data._id,
          //           chats: res.data.chats,
          //           dark: res.data.dark,
          //           premium: res.data.premium,
          //           rating: res.data.rating,
          //           reviews: res.data.reviews,
          //           roles: res.data.roles,
          //           status: res.data.status,
          //      };
          //      navigation.navigate('Home');
          // } catch (error: any) {
          //      Alert.alert(error.response.data.message || error.message);
          //      return;
          // }
     };

     return (
          <SafeAreaView style={styles.container}>
               <View style={styles.triangle_yellow}></View>
               <ScrollView style={{ width: '100%' }}>
                    <View
                         style={{
                              marginTop: '20%',
                              marginBottom: 8,
                         }}
                    >
                         <HenryEventsLogo />
                    </View>
                    <View style={styles.form_container}>
                         <Formik
                              initialValues={{
                                   email: '',
                                   password: '',
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
                                                  placeholder="Email"
                                                  onChangeText={formikProps.handleChange('email')}
                                                  value={formikProps.values.email}
                                                  onBlur={formikProps.handleBlur('email')}
                                                  style={styles.input}
                                             />

                                             <Text
                                                  style={{
                                                       color: 'red',
                                                       fontSize: 15,
                                                  }}
                                             >
                                                  {/* {formikProps.touched.email &&
                                                       formikProps.errors.email} */}
                                             </Text>

                                             <TextInput
                                                  placeholder="Password"
                                                  style={styles.input}
                                                  onChangeText={formikProps.handleChange(
                                                       'password'
                                                  )}
                                                  value={formikProps.values.password}
                                                  secureTextEntry={true}
                                             />
                                             <Text
                                                  style={{
                                                       color: 'red',
                                                       fontSize: 15,
                                                  }}
                                             >
                                                  {/* {formikProps.touched.password &&
                                                       formikProps.errors.password} */}
                                             </Text>

                                             <TouchableOpacity
                                                  activeOpacity={0.8}
                                                  style={styles.button}
                                                  onPress={() => formikProps.handleSubmit()}
                                             >
                                                  <Text style={styles.button_text}>Login</Text>
                                             </TouchableOpacity>
                                        </View>
                                   </TouchableWithoutFeedback>
                              )}
                         </Formik>
                         <View style={styles.footer}>
                              <Pressable onPress={() => navigation.push('SingupScreen')}>
                                   <Text style={styles.text_footer}>
                                        Forgot your login details?
                                   </Text>
                              </Pressable>
                         </View>
                         <View style={{ ...styles.footer, marginTop: 18 }}>
                              <View style={styles.line}></View>
                              <Text style={{ fontSize: 16, color: '#C9C9C9' }}>OR</Text>
                              <View style={styles.line}></View>
                         </View>
                         <View style={styles.footer}>
                              <Text style={styles.text_footer}>Don't have an account? </Text>
                              <Pressable onPress={() => navigation.push('SingupScreen')}>
                                   <Text
                                        style={{
                                             fontSize: 16,
                                        }}
                                   >
                                        Sing up
                                   </Text>
                              </Pressable>
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
          paddingBottom: '12%',
     },

     input: {
          margin: 15,
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
