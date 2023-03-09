import React, {useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// Form Validations
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(6, 'Should be min of 6 characters')
    .max(16, 'Should be of max of 16 characters')
    .required('Length is required!'),
});

const App = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatedPasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    console.log(passwordResult);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={styles.rootContainer}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.mainHeading}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              generatedPasswordString(+values.passwordLength);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputText}>Password Length</Text>
                  {touched.passwordLength && errors.passwordLength && (
                    <Text>{errors.passwordLength}</Text>
                  )}
                  <TextInput
                    style={styles.textInput}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 8"
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputText}>Include Lowercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputText}>Include Uppercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="#FED85D"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputText}>Include Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#C9A0DC"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputText}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#FC80A5"
                  />
                </View>

                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    style={[styles.btn, styles.primaryBtn]}
                    disabled={!isValid}
                    onPress={handleSubmit}>
                    <Text style={styles.primaryBtnText}>Generate Password</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.btn, styles.secondaryBtn]}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}>
                    <Text style={styles.secondaryBtnText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          {isPassGenerated ? (
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.cardTitle}>Here is your Password</Text>
              <Text style={styles.cardSubTitle}>Long Press to Copy</Text>
              <Text style={styles.cardBody} selectable={true}>
                {password}
              </Text>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  btn: {
    width: 100,
    marginHorizontal: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnContainer: {
    flexDirection: 'row',
    marginHorizontal: 26,
    marginVertical: 10,
  },
  card: {
    marginTop: 16,
    backgroundColor: '#758283',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#03203C',
    flex: 1,
    alignItems: 'center',
  },
  cardBody: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardElevated: {
    elevation: 5,
  },
  cardSubTitle: {
    fontSize: 12,
    color: '#242B2E',
  },
  cardTitle: {
    fontSize: 20,
    marginBottom: 3,
    color: '#000',
  },
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  inputText: {
    color: '#CAD5E2',
  },
  mainHeading: {
    marginTop: 4,
    marginBottom: 10,
    fontSize: 28,
    color: '#CAD5E2',
    fontWeight: 'bold',
  },
  primaryBtn: {
    backgroundColor: '#2827CC',
  },
  primaryBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  rootContainer: {
    flex: 1,
    backgroundColor: '#242B2E',
  },
  secondaryBtn: {
    backgroundColor: '#BF3325',
  },
  secondaryBtnText: {
    color: '#CAD5E2',
    fontWeight: 'bold',
  },
  textInput: {
    width: 70,
    height: 35,
    borderWidth: 1,
    color: '#758283',
    borderColor: '#758283',
  },
});
