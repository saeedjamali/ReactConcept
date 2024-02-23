//* React is JavaScript Library


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


//TODO mui.com ==> Component Design

//TODO react-icons : npm install react-icons --save


//? in input text wh need value and onChange :sample value is title and onChange is setTitle(e.target.value)

//? in forms we use onSubmit : because work with enter keyboard


//* State Management 
//? 1- Global State : state needed by many component => Context , Redux
//? 2-Local State : state needed only by one or few components : passed by props


//* When to create state ?
//? 1-The data change at app lifecycle
//? 2-Caonnot be computed from other state or props : (s02-e02 :state managment)
//? Should re-render the component(Update UI)


 //* Where to place state ?
 //? 1- Develop static version
 //? 2- Decide on creating state
 //? 3- Only Used by this component ? yes : leave in component
 //? 4- Also used by child component ? yes : Pass to child via props
 //? 5-Used by sibling components ? yes : Lifting state up to parent


 //* Lifting State Up
 //TODO rfce 