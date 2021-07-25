import AsyncStorage from '@react-native-community/async-storage';
import {KeyStorage} from '@/utils';

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export async function loadString(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    // not sure why this would fail... even reading the RN docs I'm unclear
    return null;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveString(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export async function load(key) {
  try {
    const almostThere = await AsyncStorage.getItem(key);
    return JSON.parse(almostThere);
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function save(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export async function remove(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch {}
}

/**
 * Burn it all to the ground.
 */
export async function clear() {
  try {
    await AsyncStorage.clear();
  } catch {}
}

/**
 * Get keyword from search history
 */
export async function loadKeyword() {
  try {
    const listKeyword = await AsyncStorage.getItem(
      KeyStorage.KEY_SEARCH_HISTORY,
    );
    if (listKeyword !== null) {
      return JSON.parse(listKeyword);
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * Update keyword to search history
 */
export async function saveKeyword(keyword) {
  try {
    const listKeyword = await loadKeyword();
    const generateId = Math.random().toString(36).substr(2, 9);
    let newListKeyword = [];
    if (listKeyword !== null) {
      newListKeyword = [...listKeyword, {id: generateId, key: keyword}];
    } else {
      newListKeyword.push({id: generateId, key: keyword});
    }
    await AsyncStorage.setItem(
      KeyStorage.KEY_SEARCH_HISTORY,
      JSON.stringify(newListKeyword),
    );
    return true;
  } catch {
    return false;
  }
}

/**
 * Remove keyword to search history
 */
export async function removeKeyword(id) {
  try {
    const listKeyword = await loadKeyword();
    const newListKeyword = listKeyword.filter(function (obj) {
      return obj.id !== id;
    });
    await AsyncStorage.setItem(
      KeyStorage.KEY_SEARCH_HISTORY,
      JSON.stringify(newListKeyword),
    );
    return newListKeyword;
  } catch {
    return null;
  }
}
