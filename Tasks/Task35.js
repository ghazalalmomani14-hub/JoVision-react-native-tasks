import AsyncStorage from '@react-native-async-storage/async-storage';

// دالة الحفظ
export const saveUserData = async data => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('@user_data', jsonValue);
  } catch (e) {
    console.error('Save error', e);
  }
};

// دالة الجلب
export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user_data');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Read error', e);
    return null;
  }
};
