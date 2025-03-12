import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

// tab-> sekme, 
// kullandığın veri türlerine(const, let, var vesaylevesayle) dikkat etmen gerekiyor çünkü hata verme ihtimali yüksek!


function App() {

 


  return (
    <div>
      <Header />
      <main>
       <CoreConcepts/>
       <Examples/>
  
      </main>
    </div>
  );
}

export default App;