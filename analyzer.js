
const analyzer = {  
  getWordCount: (text) => {
    const palabras1=text.split(/\s+/).filter(palabras1 => isNaN(palabras1) && palabras1.trim() !== "");
    
    return palabras1.length
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const palabras2 = text.replace(/\s+/g, '').replace(/[.,/#!$%&;:{}=\-_`~()]/g, '');
    return palabras2.length
    
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {  
    const palabras1=text.split(/\s+/).filter(palabras1 => isNaN(palabras1) && palabras1.trim() !== "");
    let sumapalabras = 0;
    let total = 0 ;

    if(palabras1.length === 0){
      return 0;
    }

    for(let i = 0; i< palabras1.length; i ++){
      const palabra = palabras1[i]
      sumapalabras = sumapalabras + Number(palabra.length);
    
    }
    
    total = Number((sumapalabras / palabras1.length).toFixed(2))
    return total;

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const numeros1=text.match(/\b\d+(\.\d+)?\b/g);
    
    if(numeros1 === null){
      
      return 0
    }
    const numeros2 = numeros1.filter(numeros1=> !isNaN(parseFloat(numeros1)))
    return numeros2.length;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const numeros1 = text.replace(/\.$/, "").split(/\s+(\.\d+)?/g).filter(numeros1=> !isNaN(numeros1));
    let sumaNumeros = 0;

    for (let i = 0; i < numeros1.length; i++) { 
      const numero =parseFloat(numeros1[i]); 
      if (!isNaN(numero)) { 
        sumaNumeros = sumaNumeros + numero;
      }
    }
    
    return Number((sumaNumeros).toFixed(2));
    
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },

};

export default analyzer;
