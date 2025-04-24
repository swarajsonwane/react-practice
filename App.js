import './App.css';
import TimerHandling from "./components/TimerHandling";
import {ThemeProvider }from "./context/ThemeContext";
import ThemeBox from "./components/ThemeBox";
import SearchList from "./components/SearchList";
import Employee from "./components/Employee";
import File from "./components/File";
import {FormProvider} from "./context/FormContext";
import {MultiStepForm} from "./components/formComponents/MultiStepForm";
import RealTimeAPISearch from "./components/RealTimeApiSearch";
import CouterWithReducer from "./components/CouterWithReducer";

function App() {
  return (
    <div className="App">
        <ThemeProvider>
            {/*<SearchFilter />*/}
            <TimerHandling />
            <ThemeBox />
            <SearchList/>
            <Employee />
            <File/>
            <RealTimeAPISearch/>
            <CouterWithReducer/>
        </ThemeProvider>
        <FormProvider>
            <MultiStepForm/>
        </FormProvider>
    </div>
  );
}

export default App;
