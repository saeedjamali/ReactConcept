//* React is JavaScript Library
//? Upload this project in git : when install flowbit for modal volume nodeModule up to 100 and error when push git // .gitignore  locate in root project and solve it

//* Create-React App : traditional / Vite : new approach T faster and  easiest
//TODO Steps create  react project via cmd
//? 1-open cmd : npm create vite@latest   => create folder project
//? 2-cmd : code .    => open vscode
//? 3-npm install  => install package /create node-modules According to package.json dependencies/
//? 4-npm run dev  => run project
//? 5-npm



//* Component : functions that return html(JSX) => How to Call(render) Component : <function />   => PascalCase Naming


//* Export : 1- default   2- name
//? Default Export => just one item(component,const,var ...) => Export Defaul App : import App from "./App" /  => App is Favorite name
//? Namded Export =>  any use => Export name : Import {name} from "./App" =>  Exactly the same name




//* Component : Piece of UI ,that has is own Data , Logic ANd Appearance
//? in copmponents Data pass is only possible between parent and child (not sibling )


//* Props (properties)  :  are used to pass data from parent component to child component (from Up to Down)
//? Sample : <Course prop1={} prop2={} prop3={} />    ==> Course(props) => props = {prop1,prop2,prop3}  ==> Object Destructuring => Course({prop1,prop2,prop3})

//TODO : if use string with props similar image url use BackTick: {`image\${course.imageUrl}`}


//* Component : Data=> state(internal) , props(pass from parent )  => props is states father component
//? Updating state leads to re-render component (update the UI )


//? Harja k niaz bood ui taqeir kone(rerender) yek state darim

//* Hooks : start with use.... , simple function
//? when define state we use Hooks useState  => useState(arg) return  [arg,setter function:setState ] : setState update state(arg)
//? We not use Hooks in 1-nested Function  2-loop 3-condition
//? State only change by setter function

//? when Updating state based on prev state value : we use callback method  :>  setCount((c)=>c+1);     //zamani k meqdar state vabaste b meqdar qabli hast dar method useState az callback estefade mikonim


//TODO : Control Component sample input text,select option,radio,checkBox .... use event onChange and define state
//TODO in control component define state 3 steps :
//? 1-define state   :>  const [title,setTitle]=useState("");
//? 2-quanification value property in tag :> <select value={title} />
//? 2-define onChenge event :> <select value={title} onChange={setTitle}/>






//TODO mui.com ==> Component Design

//TODO react-icons : npm install react-icons --save


//? in input text wh need value and onChange :sample value is title and onChange is setTitle(e.target.value)

//? in forms we use onSubmit : because work with enter keyboard


//* State Management 
//? 1- Global State : state needed by many component => Context , Redux
//? 2-Local State : state needed only by one or few components : passed by props


//* When to create state ?
//? 1-The data change at app lifecycle
//? 2-Cannot be computed from other state or props : (s02-e02 :state managment)
//? Should re-render the component(Update UI)


//* Where to place state ?
//? 1- Develop static version
//? 2- Decide on creating state
//? 3- Only Used by this component ? yes : leave in component
//? 4- Also used by child component ? yes : Pass to child via props
//? 5-Used by sibling components ? yes : Lifting state up to parent


//* Lifting State Up
//TODO rfce 

//! Sort Notes is very important Episode : S03-E09


//* Children Props
//? this props insert between tags component :> sample : <Notes> Hello notes </Notes>

//? access to children props with : props.children



//Todo Fake Api : rick and morty api

//* Component is a function that handle ONE task.


//* Props drilling : b halati gofte mishe k ma bein parent va child chand level darim va props az valed b farzand pass dade mishavad va bazi az farzand haye miani aslan az props use nemikonan >> solve : Component composition



//* Pure function : do not modify any external state : give the same input, same output

//* ImPure function : given the same input , may produce differrent output at differennt times : can rely on external factors such as changes in global variableor other functions 


//TODO pure component : skipping unnecessary re-renders for class componenets : in function component use memo


//TODO  Effects and Data fetching
//? Component lifeCycle
//? Data fetching
//? useEffect hook




//TODO Component lifecycle
//* Mount : component renderd for the first time - initial state and props created
//* Re-render : updating - state or props changes - Parent component re-renders leeded to re-render child
//* UnMount : componenent destroyed and removed - state and props are destroyed


//TODO Post : send  Get : Received

//TODO useEffect : run in mount component  : useEffect (()=>{},[dependey array])
//? Dependency array : when to run effect function >
//? 1- useEffect(()=>{});   ==> on every update is render run
//? 2- useEffect(()=>{},[]) ==> just on mount run
//? 3-  useEffect(()=>{},[stae,props])  ==> run when state or props (value arrays) change : after rerender useEffect

//! UseEffect Problem : use of useState leaded to loop when state is dependencies array
//* Comounent first run second run useEffect


//TODO state => change => re-render => browser paint => useEffect run

//TODO Sample 
//! run in Everey Rerender
console.log("Rerender Component");

//! run in Everey Rerender
useEffect(() => console.log("Use Effect Run without Dependecy"));

//! run in First Rerender
useEffect(() => console.log("Use Effect Run First Mount"), []);

//! run in Everey state SearchInput changed
useEffect(() => console.log("Use Effect Run Input Search changed"), [searchInput]);


//* Flat function : use when array to array [[]]=> []  67:s6-13

//TODO useRef(initialValue)
//? Call useRef at the top level of your component to declare a ref.
//* 1- Referencing a value with a ref :On the next renders, useRef will return the same object. You can change its current property to store information and read it later. This might remind you of state, but there is an important difference.

//* 2-Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component. For example, if you need to store an interval ID and retrieve it later, you can put it in a ref. To update the value inside the ref, you need to manually change its current property:


//* By using a ref, you ensure that:

//? You can store information between re-renders (unlike regular variables, which reset on every render).
//? Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
//? The information is local to each copy of your component (unlike the variables outside, which are shared).

//* After React creates the DOM node and puts it on the screen, React will set the current property of your ref object to that DOM node. Now you can access the <input>’s DOM node and call methods like focus()
//? inputRef.current.focus();



//* forwardRef : pass ref from parent to child


//TODO Custom Hook
//* Share UI by  Component
//* Share logic (sample fetch data) by Custom Hook

//* Custom Hooks :
//? 1- start with use : useFetch,useLocalStorage,....
//? 2- at least one hooks should be used => useState ,...


//TODO useReducer  (counter sample:reduce func for + - reset)

//* const [state,dispatch-> func]=useReducer(reducer-> function,initialArg,init?)

//? useReducer work for sync function and not appopriate for ASYNC function
//? useReducer is Pure function

//? 1.call useReducer
//? 2.move login to reducer function
//? 3.dispatch action inside event Handlers
//? 4.write login inside reducer function based on each action
//? 5.return new data inside action as new state





//TODO React Router Dom is library create SPA (single page applicatio)
//* install : npm i react-router-dom@latest
//* Add <BrowserRouter> to main page
//* <Routes>   <Route path="/" element={<Home/>}>

//* a tag alternative : <Link to="" /></Link>  for not refresh page
//* for active Link we use <NavLink to="">

//* <Layout /> component use for share simialr contet sample nav or footer
//* Layout use  <Outlet /> for show Children  props
//? Layout use for nested Routes


//* How to get Id from route => useParams  return obj{} : Dynamic Routes with pass id

//* useSearchParams() return array [searchParams,setSearchParams]  => searchParams.get (name)


//TODO Programatically navigation => same as Link
//? 1.useNavigate()    : return function(path,optional=> {replace:true,state:""}=> access this data with useLocation)
//? 2.Navigate Component




//TODO UseContext video BroCode

//* UseContext() =>
//?                    React Hook that allows yout to share value
//?                    between multiple levels of components
//?                    without passing props (props drilling) through each level

//* PROVIDER COMPONENT
//?                    1-import {createCntext} from 'react
//?                    2-export const myContext =createContext();
//?                    3-<MyContext.Provider value={value}>
//?                             <child />
//?                      </MyContext.Provider>

//* CONSUMER COMPONENT
//?                    1-import react,{useContext} from 'react'
//?                    2-import myContext from './ComponentA'
//?                    3-const value =useContext(myContext)

//? Authentication => who is he: information  : is user or no ?
//? Authorization => what access have to routes or files() => Roles


