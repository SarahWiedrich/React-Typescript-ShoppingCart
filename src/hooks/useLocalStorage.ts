import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)){
    const [value, setValue] = useState<T>(() => { 
        // set as function so we invoke check local storage one time
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === "function") {
            // initalValue is a type of invokable function that returns our type of T
            return (initialValue as () => T)()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])
    // first element in arry will always have a type of 'value', second element will always have a type of 'setValue'
    return [value, setValue] as [typeof value, typeof setValue]
}

// T = is whatever type we pass for the useLocalStorage hook from ShoppingCartContext