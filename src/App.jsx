import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data.js';

// tab-> sekme, 
// kullandığın veri türlerine(const, let, var vesaylevesayle) dikkat etmen gerekiyor çünkü hata verme ihtimali yüksek!


function App() {

  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton){ // handleSelect fonksiyonunun parametresi olarak tanımlanmladık
    //selectedBUttom=> 'Components', 'JSX','PROPS','State'
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;
  
  if(selectedTopic){
    tabContent =  
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
   </div> 
  }
  


  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
              ))}
            {/*Bu kısmı yukarıda dinamik olarak ekleyelim!
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description} 
              image={CORE_CONCEPTS[0].image}
            />
             <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic=== 'components'}
             onSelect={() => handleSelect ('components')} >
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic=== 'jsx'} onSelect={() => handleSelect ('jsx')} >JSX</TabButton>
            <TabButton isSelected={selectedTopic=== 'props'} onSelect={() => handleSelect ('props')} >PROPS</TabButton> 
            <TabButton isSelected={selectedTopic=== 'state'} onSelect={() => handleSelect ('state')} >State</TabButton>
          </menu>
          {/*1. yazım şekli
           {!selectedTopic ? (<p>Please select a topic.</p>): (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div> 
            )} */}

             {/*
             2. yazım şekli
              {!selectedTopic && <p>Please select a topic.</p>}
               {selectedTopic && (
               <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
               </div> 
             )} */}
             {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;