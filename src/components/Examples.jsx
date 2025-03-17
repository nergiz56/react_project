import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from './TabButton'; // doğru dosya yoluna göre düzelt
import Section from "./Section.jsx";

export default function Examples(){

    const [selectedTopic, setSelectedTopic] = useState();

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
        <Section title="Examples" id="examples">
           
            <menu>
            <TabButton isSelected={selectedTopic=== 'components'}
            onClick={() => handleSelect ('components')} >
                Components
            </TabButton>
            <TabButton isSelected={selectedTopic=== 'jsx'}  onClick={() => handleSelect ('jsx')} >JSX</TabButton>
            <TabButton isSelected={selectedTopic=== 'props'}  onClick={() => handleSelect ('props')} >PROPS</TabButton> 
            <TabButton isSelected={selectedTopic=== 'state'}  onClick={() => handleSelect ('state')} >State</TabButton>
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
        </Section>

    )
    
}

