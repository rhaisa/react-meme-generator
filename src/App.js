import React, { useState } from 'react';
import './App.css';
import SelectBox, { options } from './SelectBox';
import InputBox from './InputBox';
import Button from './Button';
import logo from './mememaker.png';

function App() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [imageSrc, setImageSrc] = useState(
    `https://memegen.link/${selectedOption?.value}/_.jpg`,
  );

  const onChange = meme => {
    setSelectedOption(meme);
    setImageSrc(`https://memegen.link/${meme.value}/_.jpg`);
  };

  const onChangeText = event => {
    setText1(event.target.value);
  };

  const onChangeText2 = event => {
    setText2(event.target.value);
  };

  const onClick = event => {
    setImageSrc(event.target.value);
  };

  // Null coalescing (?) é responsavel por perguntar ao objeto sobre o "value" caso nao tenha nada definido ele volta como "undefined" sem crashar o programa.
  // _.jpg tive que colocar esse padrao para a URL funcionar.
  // let imgUrl; esta "undefined" quando chamamos ela no "if" nos definimos isso. ele esta mudando de "undefined" para "defined" por isso usamos "let" insted "const"

  // let imgUrl;

  // if (text1 === '' || text2 === '') {
  //   imgUrl = `https://memegen.link/${selectedOption?.value}/_.jpg`;
  // } else {
  //   imgUrl = `https://memegen.link/${selectedOption?.value}/${text1}/${text2}.jpg`;
  // }

  // usei src={imgUrl} pq esta definido em cima tudo detalhado já.
  // alt="Meme" é por uma questao de acessibilidade é preciso fazer se nao o app reclama na sintaxe.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SelectBox onChange={onChange} value={selectedOption} />
      <InputBox
        onChange={onChangeText}
        value={text1}
        onChange2={onChangeText2}
        value2={text2}
      />
      <Button
        className="ButtonGenerate"
        onClick={() =>
          setImageSrc(
            `https://memegen.link/${selectedOption?.value}/${text1}/${text2}.jpg`,
          )
        }
      />
      <button class="btn">
        <a
          href={`https://memegen.link/${selectedOption?.value}/${text1}/${text2}.jpg`}
        >
          {' '}
        </a>
        <i class="fa fa-download"></i> Download
      </button>
      <img src={imageSrc} alt="Meme" />
    </div>
  );
}

export default App;
