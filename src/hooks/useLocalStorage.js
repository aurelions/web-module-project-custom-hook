import { useState } from 'react';


//we need to create a local storage hook... so we will work on it here

export const useLocalStorage = (key, initialValue) => {
//Call localStorage.getItem(itemname)
      const [value, setStoredValue] = useState(() => {
            //grab the key here
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
      })

      const setValue = value => {
            //savestate
            setStoredValue(value)
            //save this to the local storage
            window.localStorage.setItem(key, JSON.stringify(value))
      }

      return [value, setStoredValue]

}

