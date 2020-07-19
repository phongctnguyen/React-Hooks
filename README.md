# React-Hooks

## Hooks System
Hooks are a way to write reusable code, instead of more classic techniques like Inheritance

[React-Hooks](https://reactjs.org/docs/hooks-intro.html)

Ex:
* useState: Function that lets you use state in functional component
* useEffect: Function that lets you use something like lyfecycle methods in a functional component
* useState: Function that lets you create a 'ref' in a function component

**Primitive Hooks:**

* useState
* useEffect
* useContext
* useReducer
* useCallback
* useMemo
* useRef
* useImperativeHandle
* useLayoutEffect
* useDebugValue

**useState**

Syntax:

const [activeIndex (*piece of state*), setIndex (*function to change this piece of state*)] = useState(null (*initial value for this piece of state)*)

**useEffect**
- allow function components to use something like lifecycle methods
- we configure the hook to run some code automatically in one of three scenarios:
  1. When the component is rendered for the first time only
  2. When the component is rendered for the first time and whenever it rerenders
  3. When the component is rendered for the first time and (whenever it rerenders and some piece of data has changed)

- useEffect second argument:
  
  * [] -> Run at initial render (scenario 1) 
  * nothing -> Run at initial render -> Run after every rerender (scenario 2) 
  * [data] -> Run at initial render -> Run after every rerender if data has changed since last render (scenario 3) 