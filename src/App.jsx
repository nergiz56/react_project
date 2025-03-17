import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import { Fragment } from 'react';

// tab-> sekme, 
// kullandığın veri türlerine(const, let, var vesaylevesayle) dikkat etmen gerekiyor çünkü hata verme ihtimali yüksek!


function App() {

 


  return (
    <Fragment>
      <Header />
      <main>
       <CoreConcepts/>
       <Examples/>
  
      </main>
    </Fragment>
  );
}

export default App;