import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from './TabButton'; // doğru dosya yoluna göre düzelt

export default function Examples(){

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

    return(
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

    )
    
}

