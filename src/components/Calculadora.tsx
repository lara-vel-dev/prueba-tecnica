import Resultado from "./Resultado";

const Calculadora = (props: any) : any => {
  const primo = (n: number): number => {
    const numerosPrimos: number[] = []; // Array para almacenar los números primos encontrados
    let numero = 2; // Comenzamos con el primer número primo, que es 2

    while (numerosPrimos.length < n) {
      let esPrimo = true;
      // Verificar si el número actual es primo
      for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          esPrimo = false;
          break;
        }
      }

      if (esPrimo) {
        numerosPrimos.push(numero); // Agregamos el número primo al array
      }
      numero++; // Pasamos al siguiente número
    }

    return numerosPrimos[numerosPrimos.length - 1];
  };
  const triangular = (n: number): number => {
    let numeroTriangular = 0;
    for (let i = 1; i <= n; i++) {
      numeroTriangular += i; // Sumamos el número actual a la suma acumulada
    }

    return numeroTriangular;
  };

  const fibbonacci = (n: number): number => {
    if (n === 1 || n === 2) {
      return 1; // Los primeros dos números de Fibonacci son 1
    }

    let numAnterior1 = 1; // El primer número de Fibonacci
    let numAnterior2 = 1; // El segundo número de Fibonacci
    let numeroFibonacci = 0;

    for (let i = 3; i <= n; i++) {
      // El n-ésimo número de Fibonacci es la suma de los dos números anteriores
      numeroFibonacci = numAnterior1 + numAnterior2;
      numAnterior1 = numAnterior2; // Actualizamos el número anterior 1
      numAnterior2 = numeroFibonacci; // Actualizamos el número anterior 2
    }

    return numeroFibonacci;
  };

  const result =  (2 * primo(props.n) * triangular(props.n)) / fibbonacci(props.n - 1);
  
  return (<>
    <Resultado result = {result} n={props.n}/>
  </>)

};

export default Calculadora;
